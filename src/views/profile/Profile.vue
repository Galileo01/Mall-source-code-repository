<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">Mall</div></nav-bar>
    <!--1.单独封装一个组件: 利用slot知识点-->
    <UserInfo></UserInfo>
    <!--3.封装成一个整体-->
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
  </div>
</template>

<script>
  import UserInfo from './childComps/UserInfo'
  import ListView from './childComps/ListView'
  import NavBar from 'components/common/navbar/Navbar'

	export default {
		name: "Profile",
    components: {
		  UserInfo, ListView, NavBar
    },
    data: function () {
		  return {
		    orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    },
    mounted: function () {
    }
	}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }

</style>
