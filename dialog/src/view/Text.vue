<template>
    <div class='button'>
         <button @click="getdilog('inifo')" >提示信息</button>
         <button @click="getdilog('success')">成功信息</button>
         <button @click="getdilog('error')">失败信息</button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        //点击时调用弹框子类的这个方法
        getdilog(str){ 
          this.$dialog(str) 
        },
        
    },
    mounted(){
        this.$on('his',(str)=>{
            console.log(str)
        })
    }
   
}
</script>
<style scoped  lang="scss">

</style>