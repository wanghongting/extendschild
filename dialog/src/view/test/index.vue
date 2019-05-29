<template>
  <div>
    <p>弹框组件</p>
    <button @click='showdialog("我是弹框")'>点击出现弹框</button>
    <hr>
    <div>
     <input v-model="message" placeholder="edit me">
     <p>Message is: {{ message }}</p> 
    </div>
    
    <p>广告组件</p>
    <button @click="showCurtain">点击出现广告</button>
    <hr>
    <p>卡片组件</p>
    <Card style="width: 300px;" :noHover="true">
      <h4 slot="title" style="margin:0">Card Title</h4>
      <div slot="extra">
        <a style="color:blue">Extra</a>
      </div>
      <div class="card-content">Card Content</div>
    </Card>
    <hr>
    <p>图片详情组件</p>
    <ul class="ul-img">
        <li @click="showimg(1)">
            <img class="img" :src="Img1" alt="">
        </li>
         <li @click="showimg(2)">
            <img class="img" :src="Img2" alt="" >
        </li>
         <li @click="showimg(3)">
            <img class="img" :src="Img3" alt="">
        </li>
    </ul>
    <hr>
    <p>进度条组件</p>
    <Progressbar></Progressbar>
    <hr>
    <p>五星好评组件</p>
    <Start></Start>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Img1 from '@/images/1.jpg'
import Img2 from '@/images/2.jpg'
import Img3 from '@/images/3.jpg'
import Progressbar from '@/components/Progressbar'
import Start from "@/components/Start"
export default {
  props: {},
  components: {
    Card,
    Progressbar,
    Start
  },
  data() {
    return {
        Img1,
        Img2,
        Img3,
       message:'哈哈'
    };
  },
  computed: {},
  methods: {
    showCurtain() {
      this.$curtain();
    },
    showimg(type){
        // console.log(type)
        this.$showimg(type)
    },
    //弹框
    showdialog(str){
      this.$dialog(str)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.card-content {
  width: 100%;
  height: 90px;
  line-height: 90px;
}
.img{
    width:200px;
    height:auto;
    border:1px solid #ccc;
}
.ul-img{
    display: flex;
    justify-content: space-around;
    list-style: none;
}
*{
    margin:0;
    padding: 0;
}
</style>