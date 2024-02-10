<script setup lang="ts"></script>

<template>
  <div class="full flex-base">
    <div class="title">欢迎使用 PulsarManger/Server</div>
    <div class="sub-title">请在左上角选择一个实例开始</div>
  </div>
</template>

<style scoped lang="scss">
$titleSize: 22px;

.flex-base {
  flex-direction: column;
  .title {
    font-size: $titleSize;
    line-height: $titleSize + 8;
    color: #333;
    font-weight: 600;
    margin-bottom: 1rem * 0.5;
  }
  .sub-title {
    font-size: $titleSize * 0.75;
    color: #666;
  }
}
</style>
