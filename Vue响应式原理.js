//响应式原理代码如下：
class Vue {
    constructor(options) {
        //1.保存数据
        this.$options = options
        this.$data = options.data
        this.$el = options.el

        //2.将data添加到响应式系统中
        new Observer(this.$data)

        //3.代理this.$data的数据
        Object.keys(this.$data).forEach(key => {
            this._proxy(key)
        })

        //4.处理el
        new Compiler(this.$el, this)//并创建 watcher 实例
    }

    _proxy(key) {
        Object.defineProperty(this, key, {
            configurable: true,
            enumerable: true,
            set(newValue) {
                this.$data[key] = newValue
            },
            get() {
                return this.$data[key]
            }
        })
    }
}


class Observer {
    constructor(data) {
        this.data = data
        Object.keys(data).forEach(key => {
            this.defineReactive(this.data, key, data[key])//将data 上的 所有属性 添加set 和 get
        })
    }

    defineReactive(data, key, val) {
        const dep = new Dep()
        Object.defineProperty(data, key, {
            configurable: true,
            enumerable: true,
            set(newValue) {
                if (newValue === val) {
                    return
                }
                val = newValue
                dep.notify()
            },
            get() {
                if (Dep.target) {
                    dep.addSub(Dep.target)
                }
                return val
            }
        })
    }
}



class Dep {
    constructor() {
        this.subs = []//保存订阅的属性
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}
class Watcher {
    constructor(node, name, vm) {
        this.node = node
        this.name = name
        this.vm = vm
        Dep.target = this;//将 当前的订阅者 指向正在 创建的watcher实例 对象
        this.update()
        Dep.target = null
    }
    update() {
        this.node.nodeValue = this.vm[this.name];//取值操作会 触发 get,将 当前 创建的watcher 实例，添加到Dep 的依赖数组subs里
    }
}

class Compiler {
    constructor(el, vm) {
        this.el = document.querySelector(el)
        this.vm = vm
        this.frag = this._createFragment()
        this.el.appendChild(this.frag)
    }
    _createFragment() {
        const frag = document.createDocumentFragment()
        let child
        while (child = this.el.firstChild) {
            this._compile(child)
            frag.appendChild(child)
        }
        return frag
    }

    _compile(node) {//处理v-model
        if (node.nodeType === 1) { //标签节点
            const attrs = node.attributes
            if (attrs.hasOwnProperty('v-model')) {
                const name = attrs['v-model'].nodeValue
                node.value = this.vm[name]
                node.addEventListener('input', e => {
                    this.vm[name] = e.target.value
                }, false)
            }
        }
        if (node.nodeType === 3) {//文本节点
            if (reg.test(node.nodeValue)) {
                const name = RegExp.$1.trim()
                new Watcher(node, name, this.vm)//创建wather 实例
            }
        }
    }
}