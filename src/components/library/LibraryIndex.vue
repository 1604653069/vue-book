<template>
  <el-container>
    <el-aside style="width: 200px; margin-top: 20px">
      <switch></switch>
      <div class="left_menu">
        <SideMenu @selectedIndex="changeSelectedIndex" ref="sideMenu"></SideMenu>
      </div>
     
    </el-aside>
    <el-main>
      <books class="books-area" ref="book"></books>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from "./SideMenu";
import Books from "./Books";

export default {
  name: "LibraryIndex.vue",
  data() {
    return {
      currentPage: 1,
      size: 10,
    };
  },
  components: {
    SideMenu,
    Books,
  },
  methods: {
   
    changeSelectedIndex() {
      this.axios
        .get("/category/" + this.$refs.sideMenu.cid + "/books",{
          params:{
              currentPage:this.currentPage,
              size:this.size,
          }
        })
        .then((response) => {
          if (response.data.code === 200) {
            this.$refs.book.books = response.data.data.rows;
            this.$refs.book.currentPage = response.data.data.current;
            this.$refs.book.total = response.data.data.total;
          }
        });
    },
  },
};
</script>

<style scoped>
.books-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
.left_menu{
  text-align: right;
}
</style>