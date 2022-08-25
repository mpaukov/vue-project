<template>
  <notifications classes="vue-notification" />
</template>

<script>
export default { name: "NotificationsConfig" };
</script>

<style lang="scss" scoped>
::v-deep .vue-notification {
  margin: 0 5px 5px;
  padding: 10px;
  font-size: 12px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  .notification-title {
    font-size: 16px;
    line-height: 1.3;
  }
  .notification-content {
    font-size: 14px;
    margin-top: 5px;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
}
</style>