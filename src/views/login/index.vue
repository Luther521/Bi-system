<!-- 登录页面 -->
<template>
  <div class="rel hp100">
    <div class="header">
      <div class="hd-ct">
        <!-- <img class="logo dib vm" src="~@/assets/logo.png" alt="" srcset=""> -->
        <span class="dib vm csd">登录</span>
      </div>
    </div>
    <div class="login-bg" />
    <div class="login-box clearfix">
      <div class="l hp100 bg-white right-ct">
        <h2 class="f30 n text-light login-tie">欢迎登录</h2>
        <el-form ref="loginForm" label-position="top" label-suffix=":" :model="loginForm" class="ruleForm">
          <el-form-item label="用户名">
            <el-input ref="username" type="text" placeholder="用户名" maxlength="12" auto-complete="on" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input ref="password" type="password" placeholder="密码" maxlength="18" auto-complete="on" />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked">记住我</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="pct100" :loading="loading" @click="submitForm">登录</el-button>
          </el-form-item>
          <div class="text-danger f12"></div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
     
    }
  },
  computed: {
    
  },
  watch: {
   
  },
  created() {
   
  },
  mounted() {
   
  },
  methods: {
   
  }
}
</script>

<style lang='scss' scoped>
  .header{
    height: 82px;
    background-color: #fff;
    line-height: 82px;
    .hd-ct{
      margin-left: 14%;
    }
    .logo{
        margin-right: 20px;
        display: inline-block;
        height: 28px;
        width: auto;
        line-height: 28px;
    }
    .csd{
      padding-left: 20px;
      border-left:2px solid #DDD;
      font-size:24px;
      line-height: 28px;
      color: #333;
    }
  }
  .login-bg{
    position:absolute;
    top: 82px;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('~@/assets/login.jpg');
  }
 .login-box{
   position: absolute;
   top: 50%;
   right: 14.79%;
  width:340px;
  height:416px;
  background:rgba(255,255,255,1);
    border-radius:4px;
   margin-top: -170px;
   overflow: hidden;
   z-index: 10;
   box-shadow: 0px 0px 30px 4px rgba(0, 0, 0, 0.1);
 }
 .right-ct{
   width: 100%;
   padding: 38px 42px 0 42px;
  }
 .login-tie{
   font-size: 18px;
   margin-bottom: 28px;
 }
  .ruleForm{
    .el-form-item{
      margin-bottom: 10px;
    }
    label{
      font-size: 12px;
      font-weight: normal;
      line-height: 16px;
    }
  }
  .captcha{
    float: right;
    display: inline-block;
    background-color: #fff;
    width: 83px;
    margin-top: 4px;
    margin-left: 15px;
    height: 32px;
    border-radius: 3px;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
 .bg-white{
   background-color: #fff;
 }
 .el-button--primary{
   background:linear-gradient(270deg,rgba(79,193,247,1) 0%,rgba(39,141,236,1) 100%);
   border-color: rgba(79,193,247,1);
  border-radius:2px;
 }
</style>
