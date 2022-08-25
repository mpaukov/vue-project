<template>
  <header class="header">
    <MainContainer>
      <router-link :to="{ name: 'home' }">
        <MainLogo />
      </router-link>
    </MainContainer>
  </header>
</template>

<script>
import MainContainer from "./shared/MainContainer.vue";
import MainLogo from "./MainLogo.vue";
export default {
  name: "MainHeader",
  components: { MainContainer, MainLogo },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 1000;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>