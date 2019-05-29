<template>
    <div class="curtain" v-show="isOpened">
        <img class="img" :src="img" alt="">
        <span class='span' :class="closeBtnPosition == 'top'?'top':'bottom'" @click="close">X</span>
    </div>
</template>
<script>
//引入广告图片
import img from '../../curtain.png' 
export default {
    props:{
        isOpened:{ //父组件通过plugins传过来的参数 类型是boolean值
            type:Boolean
        },
        closeBtnPosition:{//x的样式通过前面传参决定
            type:String
        }
    },
    components:{

    },
    data(){
        return {
            img:img
        }
    },
    computed:{

    },
    methods:{
        close(){
            this.$emit("close")
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.curtain{
    width:100vw;
    height:100vh;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top:0;
    left:0;
    display: flex;
}
.img{
    width:200px;
    height:170px;
    position: absolute;
    left:50%;
    margin-left: -100px;
    top:50%;
    margin-top: -85px;
}
.top{
    position: absolute;
    left:50%;
    margin-left: 200px;
    top:50%;
    margin-top:-100px;
}
.bottom{
    position: absolute;
    left:50%;
    margin-left: 200px;
    top:50%;
    margin-top:100px;
}
</style>