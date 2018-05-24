<template>
    <div class="login">
      <form>
        <label for="name">
          <input type="text" class="input" id="name" @focus.stop="focus=1" @blur="focus=0" v-model="own.name" placeholder="登录名">
          <em v-show="focus===1 || nameIn===false">*你的姓名不能为空且只能由字母，数字，下划线组成</em>
          <em v-show="req===false && focus!==1">*改昵称已被使用</em>
        </label>
        <label for="tel">
          <input type="text" class="input" id="tel" @focus="focus=2" @blur="focus=0" v-model="own.tel" placeholder="你的电话">
          <em v-show="focus==2||telIn==false">*手机号必须位数字噢</em>
          <em v-show="focus==2">手机话码为十一位噢</em>
        </label>

        <label for="pwd" class="last">
          <input type="password" class="input" id="pwd" @focus="3" @blur="focus=0" v-model="own.pwd" placeholder="请输入密码，密码需由数字，字母，符号，下划线组合而成噢">
          <em v-show="focus==3||psdIn===false">*密码不少于8位噢</em>
        </label>
        <button class="loginSubmit" @click="addToSql">
          <span v-show="!result">注册速讯</span>
          <span v-if="req" v-show="result">注册成功(^_^)</span>
          <span v-else v-show="result">重新注册(^*^)</span>
          <i class="fa fa-spinner fa-spin" v-show="icon"></i>
          <i class="fa fa-check" v-if="req" v-show="result"></i>
          <i class="fa fa-times" v-else v-show="result"></i>
        </button>
      </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      own: {
        name: '',
        tel: '',
        pwd: ''
      },
      icon: false, // 控制传动
      result: false, // 得到响应后
      req: '', // 控制注册成功与否字样
      focus: 0,
      nameIn: true,
      telIn: true,
      pwdIn: true
    }
  },
  methods: {
    ...mapActions(['register']),
    addToSql () {
      this.nameIn = !(this.own.name === '' || /\W/g.test(this.own.name))
      this.telIn = !(!this.own.tel.length)
      this.pwdIn = !(this.own.pwd.length < 6)

      if (this.nameIn && this.telIn && this.pwdIn) {
        this.icon = true
        this.result = false
        this.req = ''

        setTimeout(() => {
          this.result = true
          this.icon = false
          this.register(this.icon)

          // 注册成功状态
          if (sessionStorage.register && sessionStorage.register === 1) {
            this.req = true
            this.own.name = ''
            this.own.tel = ''
            this.own.pwd = ''
          } else {
            this.req = false
          }
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
  @import "../assets/register.css";

</style>
