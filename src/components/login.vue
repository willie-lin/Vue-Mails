<template>
  <div class="login">
    <form>
      <label for="name">
        <input typr="text" class="input" id="name" v-model="name" placeholder="用户名"/>
      </label>
      <label for="pwd">
        <input type="password" class="input" id="pwd" v-model="pwd" placeholder="密码"/>
        <em v-show="req">用户名或密码错误</em>
      </label>
      <button class="loginSubmit" @click="login">
        <span>登陆</span>
        <i class="fa fa-spinner fa-spin" v-show="icon"></i>
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {

  data () {
    return {
      name: '',
      pwd: '',
      icom: false,
      req: false
    }
  },
  methods: {
    ...mapActions(['signIn']),
    login () {
      this.icon = true
      this.req = false
      setTimeout(() => {
        this.signIn({
          name: this.name,
          pwd: this.pwd
        })
        if (sessionStorage.login && sessionStorage.login === 1) {
          // 登陆成功
          this.$router.replace('/contacts')
          this.icon = false
        } else {
          this.icon = false
          this.req = true
        }
      }, 1000)
    }

  }
}
</script>

<style scoped>
  @import "../assets/login.css";
</style>
