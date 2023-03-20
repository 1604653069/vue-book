<template>
  <body id="poster">
    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input
          type="text"
          v-model="loginForm.username"
          auto-complete="off"
          placeholder="账号"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%; background: #505458; border: none"
          v-on:click="login"
          >登录</el-button
        >
        <div style="margin: 0 auto;">
          <span style="color: slateblue" v-on:click="register">注册</span>
        </div>
      </el-form-item>
    </el-form>
  </body>

  <router-view />
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123",
      },
    };
  },
  methods: {
    login() {
      this.axios.post("/user/login", this.loginForm).then((response) => {
        if (response.data.code === 200) {
          this.$router.push("/index");
          console.log(
            "登录用户的信息为:" +
              response.data.data.username +
              " " +
              response.data.data.password
          );
        } else {
          alert("登录失败,账号密码错误!");
        }
      });
    },
    register(){
      console.log("注册被点击了");
      this.$router.push("/register");
    }
  },
};
</script>

<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 270px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

#poster {
  background: url("../assets/vue-bg.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

body {
  margin: 0px;
}
</style>
