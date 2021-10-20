<template>
  <div class="acount">
    <div class="form-wrap">
      <a-form v-bind="layout" name="">
        <a-form-item>
          <label>用户名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <Captcha></Captcha>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
      </a-form>
      <div class="fs-12 text-center">
        <router-link to="/forget" class="color-white">忘记密码</router-link>｜
        <router-link to="/register" class="color-white">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive, toRefs} from "vue";
//滑动验证组件
import Captcha from '@/components/Captcha/Index.vue'
export default {
  name: 'Login',
  setup(props){
    const formConfig = reactive({
      layout: {
        wrapperCol:{ span:24 },
      }
    });
    onMounted(() => {
        
    });
    const data = toRefs(formConfig);
    console.log(data)
    return {
      ...data,
      formConfig
    };
  },
  components: {
      Captcha,
  }
}
</script>
<style lang="scss">
@import "./style.scss";

</style>