<template>
  <div class="acount">
    <div class="form-wrap">
      <a-form :model="acount_form" name="" @finish="handleFinish">
        <a-form-item>
          <label>用户名</label>
          <a-input v-model="acount_form.username" type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>密码</label>
          <a-input v-model="acount_form.password" type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>确认密码</label>
          <a-input v-model="acount_form.passwords" type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>验证码</label>
          <a-row :gutter="15">
              <a-col :span="14">
                <a-input v-model="acount_form.code" type="password" autocomplete="off" />
              </a-col>
              <a-col :span="10">
                  <a-button type="primary" block>获取验证码</a-button>
              </a-col>
          </a-row>
          
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>注册</a-button>
        </a-form-item>
      </a-form>
      <div class="fs-12 text-center">
        <a href="" class="color-white">忘记密码</a> ｜
        <router-link to="/register" class="color-white">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive, toRefs} from "vue";
//滑动验证组件
export default {
  name: 'Register',
  setup(props){
    const formConfig = reactive({
      layout: {
        wrapperCol:{ span:24 },
      },
      acount_form:{
        username:"",
        password:"",
        passwords:"",
        code:"",
      }
    });
    //提交表单
    const handleFinish = () => {
      console.log("dddd");
    };
    onMounted(() => {
        
    });
    const data = toRefs(formConfig);
    console.log(data)
    return {
      ...data,
      formConfig,
      handleFinish
    };
  },
  components: {
  }
}
</script>
<style lang="scss">
@import "./style.scss";

</style>