<template>
  <div class="login-vue">
   <login-navbar/>
   <login-form></login-form>
   <login-others></login-others>
  </div>
</template>

<script>
import {loginCheck} from 'network/login.js'
import LoginNavbar from './Uicom/LoginNavbar'
import LoginForm from './Uicom/LoginForm'
import LoginOthers from './Uicom/LoginOthers'
import axios from 'axios'
export default {
    name:'Login',
    components:{
        LoginNavbar,
        LoginForm,
        LoginOthers
    },
    created(){
      
    },
    destroyed(){
        console.log('des');
         this.$store.commit("changeMainBarShow",true);
    }
};
</script>

<style>
</style>