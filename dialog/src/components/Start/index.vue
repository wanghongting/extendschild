<template>
  <div>
    <ul class="wrap-star2">
      <li class="inner-star" 
            title="差" 
            @click="showpro(0)" 
            :class="[arr[0].flag==true?'all':'inner-star']"
            ></li>
      <li class="inner-star" title="一般" @click="showpro(1)" :class="[arr[1].flag==true?'all':'inner-star']"></li>
      <li class="inner-star" title="良好" @click="showpro(2)" :class="[arr[2].flag==true?'all':'inner-star']"></li>
      <li class="inner-star" title="不错" @click="showpro(3)" :class="[arr[3].flag==true?'all':'inner-star']"></li>
      <li class="inner-star" title="非常好" @click="showpro(4)" :class="[arr[4].flag==true?'all':'inner-star']"></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
        arr:[
            {
                flag:false
            },
            {
                flag:false
            },
            {
                flag:false
            },
            {
                flag:false
            },
            {
                flag:false
            }
        ]
    };
  },
  computed: {},
  methods: {
      showpro(flag){
         let newarr = this.arr.filter((i,index)=>{
            //  console.log(index,flag)
             return index<=flag ? i.flag = true:i.flag = false
         })
        //  console.log(newarr)
      }
  },
  mounted() {}
};
</script>
<style scoped lang="">
.wrap-star2 {
  width: 200px;
  height: 50px;
  margin: 0 auto;
}
.inner-star {
  width: 21px;
  height: 21px;
  float: left;
  background: url('../../commstar.png') 0 -21px;
  list-style-type: none;
}
.clear{
    background-position : '0 -21px';
}
.all{
    background: url('../../commstar.png') 0 0;
}
/* .ban{
    background-position : '0 -42px';
} */
</style>