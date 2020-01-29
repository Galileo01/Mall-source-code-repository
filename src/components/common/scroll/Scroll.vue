<template>
  <div
    class="wapper"
    ref="wapper"
  >
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { log } from "util";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props:{
    probeType:{
      type:Number,
      default:1
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }

  },

  mounted() {
    //创建Scroll 对象
    this.scroll = new BScroll(this.$refs.wapper, {
      click: true,
      probeType: this.probeType,   //滚动的监听类型
      pullUpLoad:this.pullUpLoad  
    });


    //绑定 scroll 事件
    if(this.probeType===2 ||this.probeType===3)
    {
      this.scroll.on("scroll", (position) => {
        this.$emit('scroll',position);    //  向父组件 发送一个 scroll 自定义 事件，把事件的处理权 交给父组件
    });
    }
    
    //绑定 上拉到底事件

    this.scroll.on("pullingUp",this.scrolPullingUp);


    this.$nextTick(()=>{
      console.log('更新了DOM');
      
    })
  },
  methods: {
      //被HOME.vue 组件  调用 回到顶部
    toTop(inter = 500) {
      console.log(this.scroll);

      this.scroll.scrollTo(0, 0,inter);
    },
    // 上拉 到 顶部 ， 触发better-scroll 的 pullingUp 事件的 的回调函数
    scrolPullingUp(){
      console.log('上拉加载');
      this.$emit('loadMore');//向父组件 发送一个 loadmore 事件
      
    },
    refresh()
    {
      this.scroll&&this.scroll.refresh();
      // console.log(666);
      
    },
    getScrollY(){
        if(this.scroll)
        return this.scroll.y;
        // console.log(this.scroll);
        
    }
  }
};
</script>

<style scoped>
</style>