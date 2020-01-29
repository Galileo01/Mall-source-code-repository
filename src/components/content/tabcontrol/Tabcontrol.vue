<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(value,index) in titles" :key="index" @click="itemclick(index)">
          <span :class="{active:index===currentIndex}">{{value}}</span>
      </div>    
  </div>
</template>

<script>
export default {
    name:'Tabcontrol',
    props:{
        titles:Array
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemclick(index){
            this.currentIndex =index;
            this.$emit('controlclick',index);
        }
    }
}
</script>

<style>
.tab-control{
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    background-color: #fff;
    color: black;
}
.tab-control-item{
    flex:1;

}
.tab-control span.active{
    color: var(--color-tint);
    border-bottom: 1px solid var(--color-tint);
}
</style>