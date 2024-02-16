<script setup lang="ts">
import type { instanceDataType } from '@/views/instance/schema'
const formData = defineModel<instanceDataType>({ required: true })
</script>

<template>
  <t-form :colon="true">
    <t-form-item label="实例名称">
      <t-input v-model="formData.instance_name" :clearable="true" />
    </t-form-item>
    <t-form-item label="连接地址">
      <t-input v-model="formData.instance_url" :clearable="true" />
    </t-form-item>
    <t-form-item label="连接端口">
      <t-input-number theme="column" :max="65535" :min="1" v-model="formData.instance_port" />
    </t-form-item>
    <t-form-item label="用户名">
      <t-input v-model="formData.auth_username" :clearable="true" />
    </t-form-item>
    <t-form-item label="密码">
      <t-input v-model="formData.auth_password" type="password" :clearable="true" />
    </t-form-item>
    <t-form-item label="标签">
      <t-input v-model="formData.tag" :clearable="true" />
    </t-form-item>
    <t-form-item label="描述">
      <t-textarea
        v-model="formData.description"
        placeholder="请输入文案"
        name="description"
        :autosize="{ minRows: 3, maxRows: 5 }"
        :clearable="true"
      />
    </t-form-item>
  </t-form>
</template>

<style scoped lang="scss"></style>
