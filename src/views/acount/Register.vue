<template>
  <div class="acount">
    <div class="form-wrap">
      <a-form :model="acount_form" name="" @finish="handleFinish" :rules="rules_form">
        <a-form-item name="username">
          <label>用户名</label>
          <a-input v-model:value="acount_form.username" type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item name="password">
          <label>密码</label>
          <a-input v-model:value="acount_form.password" type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input v-model:value="acount_form.passwords" type="password" autocomplete="off" />
        </a-form-item>
        <a-form-item name="code">
            <label>验证码</label>
            <a-row :gutter="15">
                <a-col :span="14">
                    <a-input maxlength="6" v-model:value="acount_form.code" type="password" autocomplete="off" />
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
import * as veri from "@/utils/verification";
import {onMounted, reactive, toRefs} from "vue";
//滑动验证组件
export default {
  name: 'Register',
  setup(props){
    //校验用户名
    let validateUserName = async (rule, value, callback) => {
        if (value === '') {
            return Promise.reject('请输入用户名！');
        } else {
            if(veri.checkPhone(value)){
                return Promise.reject('输入的手机号格式有误！');
            }
            return Promise.resolve();
        }
    };
    //校验密码
    let validatePassWord = async (rule, value, callback) => {
        if (value === '') {
            return Promise.reject('请输入密码！');
        } else {
            if(veri.checkPassWord(value)){
                return Promise.reject('密码必须包含字母和数字，且在6-16位之间！');
            }
            return Promise.resolve();
        }
    };
    //校验验证密码
    let validatePassWords = async (rule, value, callback) => {
        const password = formConfig.acount_form.password;
        if (value === '') {
            return Promise.reject('请输入确认密码！');
        } else {
            if(value !== password){
                return Promise.reject('密码不一致');
            }
            return Promise.resolve();
        }
    };
    //校验验证码
    let validateCode = async (rule, value, callback) => {
        if (value === '') {
            return Promise.reject('请输入验证码！');
        } else {
            if(veri.checkCode(value)){
                return Promise.reject('验证码必须包含字母和数字，为6位！');
            }
            return Promise.resolve();
        }
    };
    const formConfig = reactive({
      //表单布局
      layout: {
        wrapperCol:{ span:24 },
      },
      //表单值
      acount_form:{
        username:"",
        password:"",
        passwords:"",
        code:"",
      },
      //验证规则
      rules_form:{
        username:[
            {required: true, validator: validateUserName, trigger: 'change'},
        ],
        password:[
            {required: true, validator: validatePassWord, trigger: 'change'},
        ],
        passwords:[
            {required: true, validator: validatePassWords, trigger: 'change'},
        ],
        code:[
            {required: true, validator: validateCode, trigger: 'change'},
        ]
      },
    });
    const data = toRefs(formConfig);
    //提交表单
    const handleFinish = () => {
      console.log("dddd");
    };
    onMounted(() => {
        
    });
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