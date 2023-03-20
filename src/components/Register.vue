<template>
  <body>
  <el-form class="register-container">
    <el-form-item>
      <div class="center">
        <h3>用户注册</h3>
      </div>
    </el-form-item>
    <el-form-item>
      <el-input
          type="text"
          placeholder="用户名"
          v-model="registerForm.username"
          name="username"
      />
    </el-form-item>
    <el-form-item>
      <el-input
          type="password"
          placeholder="密码"
          v-model="registerForm.password"
          name="password"
      />
    </el-form-item>
    <el-form-item>
      <el-button
          style="width: 100%; background: #505458; color: white"
          @click="register"
      >注册
      </el-button
      >
    </el-form-item>
    <el-form-item>
      <div class="backBtn">
        <button @click="toLogin">返回</button>
      </div>
    </el-form-item>
  </el-form>
  </body>
  <router-view/>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      if (
          this.registerForm.username === "" ||
          this.registerForm.password === ""
      ) {
        alert("输入的用户名或者密码不能为空");
      }
      this.axios.post("/user/register", this.registerForm).then((response) => {
        if (response.data.code == 200) {
          this.$message({
            type: "success",
            message: "用户注册成功",
          });
        } else {
          this.$message({
            type: "warning",
            message: response.data.msg,
          });
        }
      });
    },
    toLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 270px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.center {
  margin: 0 auto;
}

.backBtn {
  width: 100%;
  margin: 0 auto;
}
</style>
  