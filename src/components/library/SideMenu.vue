<template>
  <el-menu
      class="categories"
      :default-active="activeIndex"
      @select="handlerSelect"
      active-text-color="red">

    <el-menu-item index="0">
      <span slot="title">全部</span>
    </el-menu-item>

    <el-menu-item index="1">
      <span slot="title">文学</span>
    </el-menu-item>

    <el-menu-item index="2">
      <span slot="title">流行</span>
    </el-menu-item>

    <el-menu-item index="3">
      <span slot="title">文化</span>
    </el-menu-item>

    <el-menu-item index="4">
      <span slot="title">生活</span>
    </el-menu-item>

    <el-menu-item index="5">
      <span slot="title">经管</span>
    </el-menu-item>
    <el-menu-item index="6">
      <span slot="title">科技</span>
    </el-menu-item>
  </el-menu>


</template>

<script>
export default {
  name: "SideMenu.vue",
  data() {
    return {
      activeIndex: "0",
      cid: 0,
    }
  },
  methods: {

    handlerSelect: function (selectedIndex) {
      this.cid = selectedIndex;
      this.$emit("selectedIndex");
    }
  }
}
</script>

<style scoped>
.categories {
  position: fixed;
  margin-left: 50%;
  left: -600px;
  top: 100px;
  width: 150px;
}
</style>