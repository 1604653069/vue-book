<template>
  <div>
    <search-bar @onSearch="keywordChange" ref="searchBar"/>
    <el-row>
      <el-col :span="8" v-for="book in books" :key="book">
        <el-popover
            placement="right-start"
            title="标题"
            :width="200"
            trigger="hover"
            :content="book.abs"
        >
          <template #reference>
            <el-card
                :body-style="{ padding: '0px' }"
                style="width: 240px; margin-top: 15px"
                shadow="hover"
            >
              <img :src="book.cover" style="height: 300px" class="image"/>
              <div style="padding: 14px">
                <span class="bookText">{{ book.title }}</span>
                <div style="margin-top: 12px">
                  <span class="authorText">作者:{{ book.author }}</span>
                </div>
                <div>
                  <el-rate
                      v-model="book.score"
                      show-score
                      disabled
                      allow-half
                      text-color="#ff9900"
                  ></el-rate>
                </div>
              </div>
            </el-card>
          </template>
        </el-popover>
      </el-col>
    </el-row>
    <el-row>
      <div style="margin: 15px auto">
        <el-pagination
            background
            layout="prev, pager, next"
            @current-change="onShowSizeChange"
            :total="total"
            :current-page="currentPage"
            v-model="currentPage"
        >
        </el-pagination>
      </div>
    </el-row>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  name: "Books",
  components: {SearchBar},
  props: {
    propArticleType: "",
  },
  data() {
    return {
      books: [],
      total: 0,
      currentPage: 1,
      size: 10,
    };
  },
  methods: {
    getAllBooks() {
      this.axios
          .get("/book/list", {
            params: {
              currentPage: this.currentPage,
              size: this.size,
            },
          })
          .then((response) => {
            if (response.data.code === 200) {
              this.books = response.data.data.rows;
              this.currentPage = response.data.data.current;
              this.total = response.data.data.total;
            }
          });
    },
    keywordChange() {
      this.axios
          .get("/book/list/" + this.$refs.searchBar.keywords, {
            params: {
              currentPage: this.currentPage,
              size: this.size
            }
          })
          .then((response) => {
            if (response.data.code === 200) {
              this.books = response.data.data;
              this.currentPage = response.data.data.current;

            }
          });
    },

    onShowSizeChange(current) {
      this.currentPage = current;
      this.getAllBooks();
    },
  },
  created() {
    this.getAllBooks();
  },
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.bookText {
  font-size: 18px;
  color: #008cff;
}

.authorText {
  font-size: 12px;
  margin-top: 21px;
}

.page {
  margin-top: 30px auto;
}
</style>
