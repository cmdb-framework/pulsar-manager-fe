<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { LoginSchema } from '@/views/login/schema'
import {
  type FormRules,
  type FormValidateResult,
  MessagePlugin,
  type SubmitContext
} from 'tdesign-vue-next'
import { UserCircleIcon, UserPasswordIcon } from 'tdesign-icons-vue-next'
import type { FormSubmitEvent } from 'tdesign-vue-next/es/common'
import { useI18n } from 'vue-i18n'
import { userLogin } from '@/api/user'
import { useRouter } from 'vue-router'
import Token from '@/utils/other/token'

const router = useRouter()
const { t } = useI18n()
const rules: FormRules = {
  username: [
    { required: true, message: `${t("login.authRule.username")}`, trigger: 'blur', type: 'error' },
  ],
  password: [{ required: true, message: `${t("login.authRule.password")}`, trigger: 'blur', type: 'error' }]
}
const formData = reactive<LoginSchema>({
  username: '',
  password: ''
})
const form = ref<Element | null>(null)
const checking = ref<boolean>(false)

async function loginAction(context: SubmitContext<LoginSchema>): Promise<void> {
  let validateResult: FormValidateResult<LoginSchema> = context.validateResult
  let firstError: string | undefined = context.firstError
  let e: FormSubmitEvent | undefined = context.e
  checking.value = true
  e?.preventDefault()
  if (validateResult === true) {
    let result = await userLogin(formData)
    if (result) {
      Token.setToken(result)
      await MessagePlugin.success(`${t("login.success")}`)
      await router.push('/dashboard')
    } else {
      await MessagePlugin.error(`${t("login.error")}`)
    }
  } else {
    console.log('Validate Errors:', firstError, validateResult)
    await MessagePlugin.warning(firstError ? firstError : '')
    checking.value = false
  }
}
</script>

<template>
  <t-layout class="full">
    <t-header>
      <div class="loginNav">
        <div class="title">Pulsar <span class="titleColor">Manager</span></div>
        <div class="placeholder"></div>
      </div>
    </t-header>
    <t-content>
      <div class="full flex-base">
        <div class="loginForm flex-base">
          <div class="loginTitle">{{ t('login.title') }}</div>
          <div class="subLoginTitle">{{ t('login.desc') }}</div>
          <t-divider />
          <t-form
            ref="form"
            @submit="loginAction"
            :label-width="0"
            :data="formData"
            :rules="rules"
            style="width: 100%"
          >
            <t-form-item name="username">
              <t-input v-model="formData.username" :clearable="true" :disabled="checking" :placeholder="`${t('login.placeholder.username')}`">
                <template #prefix-icon>
                  <UserCircleIcon />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item name="password">
              <t-input
                type="password"
                v-model="formData.password"
                :clearable="true"
                :disabled="checking"
                :placeholder="`${t('login.placeholder.password')}`"
              >
                <template #prefix-icon>
                  <UserPasswordIcon />
                </template>
              </t-input>
            </t-form-item>
            <t-form-item>
              <t-button type="submit" :block="true" :loading="checking"> {{t("login.loginBtn")}} </t-button>
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
      .titleColor {
        color: #0052d9;
      }
    }

    .placeholder {
      @media (max-width: 1024px) {
        display: none;
      }
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
