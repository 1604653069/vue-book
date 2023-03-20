<template>
  <div style="margin-bottom: 30px;display: flex;justify-content: center;align-items: center">
    <el-input
        :prefix-icon="Search"
        @keyup.enter.native="searchClick"
        placeholder="通过书名或作者搜索..."
        size="small"
        style="width: 400px;margin-right: 10px;height: 50px;"
        v-model="keywords">
    </el-input>
    <el-button type="primary" style="font-size: 15px;" @click="searchClick">搜索</el-button>
  </div>
</template>

<script>
import {Search} from "@element-plus/icons-vue";

export default {
  name: 'SearchBar',
  data() {
    return {
      keywords: '',
      books: [],
      cardLoading: [],
      Search
    }
  },
  methods: {
    searchClick() {
      this.$emit('onSearch')
    }
  }
}
</script>

<style scoped>

</style>

