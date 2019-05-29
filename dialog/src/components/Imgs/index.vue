<template>
    <div class="wrap-box" @click="close" v-show="flag">
        <img class="IMG" :src="src" alt="">
    </div>
</template>
<script>
import Img1 from '@/images/1.jpg'
import Img2 from '@/images/2.jpg'
import Img3 from '@/images/3.jpg'

export default {
    props:["type","flag"],
    components:{

    },
    data(){
        console.log(this.type)
        return {
            src:this.type == 1?Img1:this.type == 2?Img2:Img3
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
.wrap-box{
    width:100vw;
    height:100vh;
    position: absolute;
    left:0;
    top:0;
    background: #ccc;
}
.IMG{
    width:80%;
    height:auto;
    margin-left: 10%;
    margin-top: 5%;
}
</style>