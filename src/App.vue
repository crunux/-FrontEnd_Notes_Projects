<script setup>

</script>

<template>
  <router-view/>
  <notifications group="auth" position="top center" />
  <notifications group="note" position="bottom right" />
</template>

<style scoped>

</style>

.my-notification {
  
  .notification-title {
    font-weight: 600;
  }


  .notification-content {
    text-align: center;
  }
  
  &.success {
    background: #ffffff;
    border-left-color: #31ad54;
  }
  &.info {
    background: #ffffff;
    border-left-color: #06a9f4;
  }
  &.warn {
    background: #ffffff;
    border-left-color: #ff9900;
  }
  &.error {
    background: #ffffff;
    border-left-color: #ff2600;
  }
}