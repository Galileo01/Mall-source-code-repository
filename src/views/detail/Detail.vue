<template>
  <div class="detail">
    <detail-navbar @titleClick="titleClick"  ref="nav"></detail-navbar>

    <scroll
      class="de-wapper"
      :probeType=3
      ref="scroll"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods-info="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-image
        :detailInfo="detailInfo"
        @imgloaded="detailImgLoaded"
      ></detail-image>
      <detail-params
        :itemParams="itemParams"
        ref="params"
      ></detail-params>
      <detail-commont
        :commentInfo="commentInfo"
        ref="commont"
      ></detail-commont>
      <goods-list
        :goods="recommends"
        ref="recommend"
      ></goods-list>
    </scroll>
    <back-top
      @click.native="btClick"
      v-show="isshowbackTop"
    ></back-top>
    <detail-bottombar @addCart="addCart"></detail-bottombar>
  </div>
</template>

<script>
//页面 子组件
import DetailNavbar from "./detailCom/DetailNavbar";
import DetailSwiper from "./detailCom/DetailSwiper";
import DetailBaseInfo from "./detailCom/DetailBaseInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailShopInfo from "./detailCom/DetailShopInfo";
import DetailImage from "./detailCom/DetailImage";
import DetailParams from "./detailCom/DetailParams";
import DetailCommont from "./detailCom/DetailCommont";
import GoodsList from "components/content/goodslist/Goodslist";
import DetailBottombar from "./detailCom/DetailBottombar"


//数据请求相关
import { getDetail, GoodsInfo, getRecommend } from "network/detail";

//导入方法
import { debounce } from "common/utils";
import { imgloadedMixin ,backTopMixin} from "common/mixins";

export default {
  name: "Detail",
  data() {
    return {
      iid: "", //对应的id
      topImages: [], //轮播图
      goodsInfo: {}, //存储 商品文本信息
      shopInfo: {}, //存储 店铺信息
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      titileTop: [0], //当前标题的下标
      getTops: null,
      currentTitle: 0
    };
  },
  mixins: [imgloadedMixin,backTopMixin],//在imgloadedMixin 混入对象里,封装图片加载 触发的 事件
  methods: {
    getAllData(result) {
      //获取 顶部的轮播 图片
      this.topImages = result.itemInfo.topImages;

      //通过GoodsInfo 对象，构造包含所有需要信息的 对象
      this.goodsInfo = new GoodsInfo(
        result.itemInfo,
        result.columns,
        result.shopInfo.services,
      
      );

      //获取shopInfo
      this.shopInfo = result.shopInfo;
      //获取展示效果的 图片
      this.detailInfo = result.detailInfo;

      //获取商品参数
      this.itemParams = result.itemParams;
      //获取评论
      // console.log(result.rate.list);

      this.commentInfo = result.rate.list ? result.rate.list[0] : {};
      // console.log(this.commentInfo);
    },
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.titileTop[index],300);
    },
    detailImgLoaded() {
      this.titileTop = [0];
      this.getTops();
    },
    contentScroll(position) {
       this.isshowbackTop = -position.y > 1000 ? true : false;
      //滚动是 更改 titleIndex,
      const topY = -position.y;
      let length = this.titileTop.length;
      for (let i = 0; i < length; i++) {
        let iPos = this.titileTop[i];
        if (topY >= iPos && topY < this.titileTop[i + 1]) {
          if (this.currentTitle !== i) {
            this.currentTitle = i;
            console.log(  this.currentTitle );
            this.$refs.nav.currentIndex=i;
          }
          break;
        }
      }
    },
    //添加购物车 
    addCart(){
      const good={};
      good.image=this.topImages[0]; 
      good.title=this.goodsInfo.title;
      good.iid= this.iid;
      good.desc=this.goodsInfo.desc;
      good.price=this.goodsInfo.price;
      
      this.$store.dispatch('addCart',good)
      .then(res=>{
        this.$toast.show(res);
      })
       
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    //请求详情页的商品详情
    getDetail(this.iid).then(res => {
      const result = res.result;
      console.log(result);

      this.getAllData(result);
    });
    //请求详情页 下方的推荐信息

    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list;
    });

    //绑定 防抖函数
    this.getTops = debounce(() => {
      this.titileTop.push(this.$refs.params.$el.offsetTop);
      this.titileTop.push(this.$refs.commont.$el.offsetTop);
      this.titileTop.push(this.$refs.recommend.$el.offsetTop);
      this.titileTop.push(Number.MAX_VALUE);
      //如果没有评论,[2]的 位置为undefined
      if (!this.titileTop[2]) {
        this.titileTop[2] = this.titileTop[3];
        console.log("no commont");
      }
      console.log(this.titileTop);
    }, 400);
  },
  mounted() {
    //监听事件总线的 imgloaded 事件   ,要在组件 挂载之后 再监听
    //已经通过 mixins 混入对象 完成
  },
  destroyed() {
    // console.log("destroyed");
    this.$bus.$off("imgloaded", this.imgloadedhander);
  },
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    scroll: Scroll,
    DetailShopInfo,
    DetailImage,
    DetailParams,
    DetailCommont,
    GoodsList,
    DetailBottombar
  }
};
</script >

<style scoped>
.detail {
  position: relative;
  height: 100vh;
  z-index: 3;
  background-color: #fff;
}
.de-wapper {
  background-color: #fff;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>