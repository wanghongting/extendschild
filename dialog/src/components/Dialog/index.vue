<template>
  <div class="dialog" v-show="isshow">
    {{title}}
    <button @click="hiddendialog()">确定</button>
    <button @click="hiddendialog()">取消</button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    isshow: {
      type: Boolean
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    hiddendialog() {
      this.$emit("closes");
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>
<style lang="scss">
.dialog {
  width: 100%;
  height: 100%;
  background: rgba(225, 225, 225, 0.3);
  position: fixed;
  left: 0;
  top: 0;
}
.error {
  background: red;
}
.success {
  background: green;
}
.info {
  background: #ccc;
}
</style>