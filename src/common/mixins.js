
import {debounce} from "./utils"
import BackTop from 'components/content/backtop/BackTop'
//有关于 图片加载 事件绑定，处理函数的  混入对象
export const imgloadedMixin = {
    data() {
        return {
            imgloadedhander:null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 100);
        this.imgloadedhander= () => {
            refresh();
            //  console.log('refresh');
        };
        //在涉及图片加载和 better-scroll 的组件中，注册事件总线的 imgloaded 事件
        this.$bus.$on("imgloaded",this.imgloadedhander);
    }
}

//回到顶部的 混入对象
export const backTopMixin={
    data(){
        return {
            isshowbackTop: false,
        }
    },
    components:{
        BackTop
    },
    methods:{
        btClick(){//点击 ,回到顶部的函数
            this.$refs.scroll.toTop();
        }
    }
}