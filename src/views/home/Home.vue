<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">主页</p>
    </nav-bar>

    <tab-control
      :titles="['流行','新款','精选']"
      @controlclick="controlclick"
      ref="tabControl2"
      class="tab-control2"
      v-show="isControlfixed"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @loadMore="loadMore"
      :pullUpLoad="true"
      @scroll="contentScroll"
    >
      <home-swiper
        :banner="banner"
        @swiperImgload="swiperImgload"
        v-if="showSwiper"
      ></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-features></home-features>
      <tab-control
        :titles="['流行','新款','精选']"
        @controlclick="controlclick"
        ref="tabControl1"
      ></tab-control>

      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top
      @click.native="btClick"
      v-show="isshowbackTop"
    ></back-top>
  </div>
</template>

<script>
//公共组件
import Navbar from "components/common/navbar/Navbar";
import Scroll from "components/common/scroll/Scroll";
//业务组件
import HomeSwiper from "./UIcomponpents/HomeSwiper";
import Homerecommend from "./UIcomponpents/Homerecommend";
import Homefeatures from "./UIcomponpents/Homefeatures";
import Tabcontrol from "components/content/tabcontrol/Tabcontrol";
import Goodslist from "components/content/goodslist/Goodslist";
import BackTop from "components/content/backtop/BackTop";

//导入 方法/模块
import { getHomeMultidata, getHomegoods } from "network/home";
import { log } from "util";
import { debounce } from "common/utils";
import { imgloadedMixin ,backTopMixin} from "common/mixins";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      showGoodstype: "pop",
      controlTop: 0,
      isControlfixed: false,
      scrollY: 0
    };
  },
  mixins: [imgloadedMixin,backTopMixin],
  components: {
    "nav-bar": Navbar,
    scroll: Scroll,
    "home-swiper": HomeSwiper,
    "home-recommend": Homerecommend,
    "home-features": Homefeatures,
    "tab-control": Tabcontrol,
    "goods-list": Goodslist,
  },
  computed: {
    showGoods() {
      //获取要显示的 goods 列表
      return this.goods[this.showGoodstype].list;
    },
    //解决 轮播图的显示bug，防止图片未加载出来就显示 轮播图
    showSwiper() {
      return this.banner.length !== 0;
    }
  },
  created() {
    //只 包含  调用的语句，具体的逻辑 在methods 中
    this.CgetHomeMultidata();

    //加载 goods数据
    this.CgetHomegoods("pop");
    this.CgetHomegoods("new");
    this.CgetHomegoods("sell");
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("imgloaded"); //注销 imgloaded 事件的监听
    console.log("de");
  },
  activated() {
    // 组件被激活时设置 滚动距离
    this.$refs.scroll.scroll.scrollTo(0, this.scrollY, 0);
    this.$refs.scroll.refresh(); //刷新，避免 产生不必要的bug
  },
  deactivated() {
    //组件 停用时 保存 滚动距离
    this.scrollY = this.$refs.scroll.getScrollY();
    console.log(this.scrollY);
     //离开 Home 页面 ，注销 Home imgloaded 事件的监听
    this.$bus.$off("imgloaded",this.imgloadedhander);
  },

  methods: {
    //事件处理函数
    //goods 按钮 切换事件
    controlclick(index) {
      const types = ["pop", "new", "sell"];
      this.showGoodstype = types[index];
      console.log("change goods");
      //同步两个 control的 行为
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //backtop 显示切换 和 control的吸顶效果
    contentScroll(position) {
      const temp=this.isControlfixed;
      this.isshowbackTop = -position.y > 1000 ? true : false;
      this.isControlfixed = -position.y > this.controlTop ? true : false;

        if(temp!==this.isControlfixed)
        {
          console.log('position.y',position.y);
          console.log('this.controlTop',this.controlTop);
        }
      
    },
    loadMore() {
      //配合 Scroll  组件的 上拉加载 事件
      //加载对应 类型的 新的 goods
      this.CgetHomegoods(this.showGoodstype);
      this.$refs.scroll.scroll.finishPullUp(); //主动 调用 方法，表示本次 上拉加载完成
      this.$bus.$emit('imgloaded');
    },
    swiperImgload() {
      this.controlTop = this.$refs.tabControl1.$el.offsetTop; // 图片加载完之后 计算 top值
      console.log('controlTop',this.controlTop);
    },

    //网络请求
    async CgetHomeMultidata() {
      //配合 async 函数，异步请求 获取 muldata数据
      const res = await getHomeMultidata();
      // console.log(res);

      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    },
    CgetHomegoods(
      type //获取首页下拉 的 goods ，根据传入的类型
    ) {
      const page = this.goods[type].page + 1; //获取 下一页 page
      getHomegoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    }
    //图片加载的防抖
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint); /*使用 在:root 里面 定义的 变量  */
  color: #fff;
  position: relative;

  z-index: 3;
}
#home {
  /* margin-top: 44px; */
  position: relative;
  height: 100vh;
}
.tab-control2 {
  position: relative;
  z-index: 3;
}
.wapper {
  position: relative;
}
.content {
  /** Scroll 的最外层必须要有  固定的 高度  */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* overflow: hidden;  */
  /* z-index: 1;  */
}
</style>