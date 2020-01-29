<template>
  <div v-if="Object.keys(itemParams).length!==0" class="params">
      <table v-for="(item,index) in itemParams.rule.tables" :key="index" class="rule">
          <tr v-for="(it,indey) in item" :key="indey">
              <td v-for="(value,indez) in it" :key="indez">{{value}}</td>
          </tr>
      </table>
      <table v-for="(value,index) in itemParams.info.set" :key="index+10" class="info">
          <tr>
              <td class="key">{{value.key}}</td>
              <td class="value">{{value.value}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name:"DetailParams",
    props:{
        itemParams:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.info,.rule{
      border-collapse: collapse;
      font-size: 15px;
}
.params{
    padding: 8px;
}
.rule{
   
     width: 100%;
}
.rule tr{
    height:42px;
    width: 95px;   
    border-bottom: 1px solid #999;
}
.info{
   width: 100%;
   margin-top: 20px;
}
.info tr{
     height: 42px;
  
}
.info  .key{
       width: 95px;
}
.info .value{
       color: var(--color-high-text);

}

</style>