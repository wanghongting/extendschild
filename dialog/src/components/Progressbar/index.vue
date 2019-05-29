<template>
  <div style="margin-top:30px;">
    <div class="wrapper" @click="clickwrapper" @mousemove="movewrapper">
      <!--填充块-->
      <div class="fill" :style="{width:greenwidth}"></div>
      <!--滑块-->
      <div class="slider" :style="{left:left}"></div>
    </div>
    <p>{{bfb}}</p>
  </div>
</template>

<script>
export default {
  name: "Progressbar",
  data() {
    return {
      greenwidth: 0,
      left: 0,
      bfb: 0,
      flag:false
    };
  },
  methods: {
    clickwrapper(e) {
        this.flag = true
      if (e.offsetX > 180) {
        this.left = "180px";
        this.greenwidth = "180px";
        this.bfb = 100 + "%";
      } else if (e.offsetX < 20) {
        this.left = "0px";
        this.greenwidth = "0px";
        this.bfb = 0 + "%";
      } else {
        this.left = e.offsetX - 10 + "px";
        this.greenwidth = e.offsetX - 10 + "px";
        let str = ((e.offsetX - 10) / 200) * 100 + "";
        this.bfb = str.substring(0, str.indexOf(".") + 3) + "%";
      }
    },
    movewrapper(e) {
      if (e.pageX > 189) {
        this.left = "180px";
        this.greenwidth = "180px";
        this.bfb = 100 + "%";
      } else if (e.pageX < 29) {
        this.left = "0px";
        this.greenwidth = "0px";
        this.bfb = 0 + "%";
      } else {
        this.left = e.pageX - 19 + "px";
        this.greenwidth = e.pageX - 19 + "px";
        let str = ((e.pageX - 19) / 200) * 100 + ''
        this.bfb = str.substring(0,str.indexOf(".")+3)+"%"
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  position: relative;
  width: 200px;
  height: 20px;
  border: 1px solid darkgray;
}
.slider {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: #af58a8;
  cursor: pointer;
}
.fill {
  /* display: inline-block; */
  width: 0;
  height: 20px;
  background: #6caf00;
}
</style>