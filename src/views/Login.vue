<template>
  <div class="login-wrapper">
    <div class="title">Vue3后台管理系统</div>
    <el-form :model="ruleForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
      <el-form-item label="账号：" prop="username">
        <el-input v-model="ruleForm.username" maxlength="5"></el-input>
      </el-form-item>
      <el-form-item class="last" label="密码：" prop="password">
        <el-input v-model="ruleForm.password" maxlength="12"></el-input>
      </el-form-item>
      <el-checkbox class="checkbox" v-model="ruleForm.checked" label="下次自动登录"></el-checkbox>
      <el-form-item>
        <el-button type="primary" @click="submitForm" class="button">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import utils from '../utils'
const loginForm = ref(null)
const router = useRouter()
const state = reactive({
  ruleForm: {
    username: '',
    password: '',
    checked: true
  },
  rules: {
    username: [
      {
        required: true,
        message: '请输入账号',
        trigger: 'blur'
      },
      {
        min: 3,
        max: 5,
        message: '长度必需3-5',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 12,
        message: '长度必需6-12',
        trigger: 'blur'
      }
    ],
    type: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change'
      }
    ]
  }
})
const submitForm = async () => {
  (loginForm as any).value.validate((valid: boolean) => {
    if (valid) {
      utils.localSet('token', state.ruleForm.username)
      router.push('/home')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const { ruleForm, rules } = toRefs(state) // reactive对象响应式
</script>

<style scoped lang="less">
.login-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -175px;
  margin-top: -200px;
  width: 350px;
  height: 400px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgb(0 0 0 / 20%);
  padding: 0 30px;
  .title {
    font-size: 28px;
    text-align: center;
    padding: 30px 0 40px;
  }
  .last {
    margin-bottom: 10px;
  }
  .checkbox {
    margin-left: 54px;
  }
  .button {
    width: 100%;
    margin-top: 30px;
  }
}
/deep/ .el-checkbox__label {
  padding-left: 6px;
}
</style>
