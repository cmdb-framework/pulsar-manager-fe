<script setup lang="ts">
import { ref } from 'vue'
import { useBaseStore } from '@/stores/base'
const menuStore = useBaseStore().menuStatus
</script>

<template>
  <t-menu theme="light" default-value="3-2" :expand-mutex="true" height="550px" :collapsed="menuStore.isCollapsed">
    <t-submenu value="3">
      <template #icon>
        <t-icon name="mail" />
      </template>
      <template #title>
        <span>消息区</span>
      </template>
      <t-submenu value="3-1" title="二级菜单">
        <t-menu-item value="3-1-1"> 三级菜单内容 </t-menu-item>
        <t-menu-item value="3-1-2"> 三级菜单内容 </t-menu-item>
        <t-menu-item value="3-1-3"> 三级菜单内容 </t-menu-item>
      </t-submenu>
      <t-submenu value="3-5" title="二级菜单">
        <t-menu-item value="3-5-1"> 三级菜单内容 </t-menu-item>
        <t-menu-item value="3-5-2"> 三级菜单内容 </t-menu-item>
        <t-menu-item value="3-5-3"> 三级菜单内容 </t-menu-item>
      </t-submenu>
      <t-menu-item value="3-2"> 二级菜单内容 </t-menu-item>
      <t-menu-item value="3-3"> 二级菜单内容 </t-menu-item>
      <t-menu-item value="3-4"> 二级菜单内容 </t-menu-item>
    </t-submenu>
    <t-menu-item value="user-circle">
      <template #icon>
        <t-icon name="user-circle" />
      </template>
      个人中心
    </t-menu-item>
    <t-submenu value="4">
      <template #icon>
        <t-icon name="play-circle" />
      </template>
      <template #title>
        <span>视频区</span>
      </template>
      <t-menu-item value="4-1"> 二级菜单内容 </t-menu-item>
      <t-menu-item value="4-2"> 二级菜单内容 </t-menu-item>
      <t-menu-item value="4-3"> 二级菜单内容 </t-menu-item>
    </t-submenu>
    <t-menu-item value="edit1">
      <template #icon>
        <t-icon name="edit-1" />
      </template>
      资源编辑
    </t-menu-item>
    <template #operations>
      <t-button variant="text" shape="square" @click="menuStore.toggleCollapsed()">
        <template #icon><t-icon name="view-list" /></template>
      </t-button>
    </template>
  </t-menu>
</template>

<style scoped lang="scss"></style>
