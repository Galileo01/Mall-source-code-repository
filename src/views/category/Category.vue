<template>
  <div class="category">
    <nav-bar class="cate-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <category-menu :categories="categories" @menuClick="menuClick"></category-menu>
      <scroll class="content-scroll" ref="scroll">
        <category-sub :subcategories="subCategory" />
        <tab-control :titles="['流行','最新','销量']" @controlclick="changegood"></tab-control>
        <category-detail  :CategoryDetail="CategoryDetail"></category-detail>
      </scroll>
    </div>
  </div>
</template>

<script>
//组件导入
import Navbar from "components/common/navbar/Navbar";
import CategoryMenu from "./UiCom/CategoryMenu";
import CategorySub from "./UiCom/CategorySub"
import Scroll from "components/common/scroll/Scroll"
import Tabcontrol from "components/content/tabcontrol/Tabcontrol"
import CategoryDetail from "./UiCom/CategoryDetail"

//导入请求方法
import {
  getAllCategory,
  getSubcategory,
  getCategoryDetail
} from "network/category";
import { imgloadedMixin ,backTopMixin} from "common/mixins";
export default {
  name: "Category",
  data() {
    return {
      categories: [],
      currentCateIndex: -1,//当前显示的 分类所属下标
      currentDetailType: "",//当前 显示的 详情商品的 类型
      subCategory: [],//当前 显示的 子分类
      CategoryDetail: [],//当前 显示的 商品详情
      scrollY:{}// 记录页面离开时 detail详情 的 竖直 滚动位置 
    };
  },
  mixins:[imgloadedMixin],
  computed: {
    //获取当前 展示的 分类 的计算属性
    currentCate() {
      return this.categories[this.currentCateIndex];
    }
  },
  //第一次进入 分类
  created() {
    let temp = null;
    
    getAllCategory().then(res => {
      // console.log(res.data.category.list);
      this.categories = res.data.category.list; //保存数据
      //默认加载 第一个子类的 pop
      this._getSubCategory(0);
    });
   
  },
  methods: {
    //根据下标 获取子分类
    _getSubCategory(index) {
      console.log(index);
      
      //确保 要请求的数据和正在显示的 下标不一样再请求
      if (index !== this.currentCateIndex) {
        const maitKey = this.categories[index].maitKey;
        this.currentCateIndex = index; //更改 当前下标
        getSubcategory(maitKey).then(res => {

          this.subCategory = res.data.list;
          console.log('list',res.data.list);
          
          this._getDetail("pop");

        });
      }
    },
    //根据类型 获取 对应的detail
    _getDetail(type) {
        this.currentDetailType = type; //更改类型
        getCategoryDetail(this.currentCate.miniWallkey, type).then(res => {
          console.log('getDetail',res);
          this.CategoryDetail = res;
        });
      
    },
    //菜单 点击后请求 对应的 数据
    menuClick(index){
     this._getSubCategory(index);
     this.subCategory=this.categories[index];
     this.$refs.scroll.scroll.scrollTo(0,0,0); //滚到 页面顶端
    },
    // tabcontrol 点击的 事件, 请求响应的 商品详情数据
    changegood(index){
      const arr=['pop','new','sell'];
      this._getDetail(arr[index]);
    }
  },activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.scrollY,0);
    this.$refs.scroll.refresh();
    console.log('activated');
    
  },
  //离开  组件 保存 竖直位置
  deactivated(){
      this.scrollY=this.$refs.scroll.getScrollY();
      console.log(this.scrollY);
      
  },
  components: {
    "nav-bar": Navbar,
    CategoryMenu,
    CategorySub,
    Scroll,
    'tab-control':Tabcontrol,
    CategoryDetail
  }
};
</script>

<style scoped>
.category{
position: relative;
height:100vh;
width: 100%;
}
.cate-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 2;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
 
  width: 100%;
  display: flex;
}
.content-scroll{
  height:100%;
  flex-grow: 1;
  width:calc(100% - 100px);
}
</style>

