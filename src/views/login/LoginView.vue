<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { LoginSchema } from '@/views/login/schema'
import { type FormRules, MessagePlugin } from 'tdesign-vue-next'
import { UserCircleIcon, UserPasswordIcon } from 'tdesign-icons-vue-next'

const loginForm = {
  rules: reactive<FormRules>({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }),
  form: reactive<LoginSchema>({
    username: '',
    password: ''
  }),
  checking: ref<boolean>(false),
  loginAction({ validateResult, firstError, e }): void {
   this.checking.value = true
    e.preventDefault();
    if (validateResult === true) {
      MessagePlugin.success('提交成功');
      this.checking.value = false
    } else {
      console.log('Validate Errors: ', firstError, validateResult);
      MessagePlugin.warning(firstError);
      this.checking.value = false
    }
  }
}

</script>

<template>
  <t-layout class="full">
    <t-header>
      <div class="loginNav">
        <div class="title">Pulsar Manager</div>
        <div></div>
      </div>
    </t-header>
    <t-content>
      <div class="full flex-base">
        <div class="loginForm flex-base">
          <div class="loginTitle">Log In</div>
          <div class="subLoginTitle">
            multi pulsar cluster management platform
          </div>
          <t-divider />
          <t-form @submit="loginForm.loginAction" :label-width="0" :model="loginForm.form" :rules="loginForm.rules" style="width: 100%">
            <t-form-item name="username">
              <t-input v-model="loginForm.form.username" :clearable="true" :disabled="loginForm.checking.value">
                <template #prefix-icon>
                  <UserCircleIcon />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item name="password">
              <t-input type="password" v-model="loginForm.form.password" :clearable="true"
                       :disabled="loginForm.checking.value">
                <template #prefix-icon>
                  <UserPasswordIcon />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item>
              <t-button
                type="submit"
                :block="true"
                :loading="loginForm.checking.value"
              >
                登录
              </t-button>
            </t-form-item>
          </t-form>
        </div>
      </div>
    </t-content>
  </t-layout>
</template>

<style scoped lang="scss">
.full {
  background-color: transparent;

  .loginNav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    height: 100%;

    .title {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .loginForm {
    width: 300px;
    margin: 0 auto;
    flex-direction: column;


    @media (max-width: 768px) {
      width: 100%;
      padding: 0 20px;
    }

    .loginTitle {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 450;
      margin: 20px 0;
    }

    .subLoginTitle {
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>