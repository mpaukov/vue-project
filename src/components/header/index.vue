<template>
  <header class="header">
    <MainContainer class="header__content">
      <router-link :to="{ name: 'home' }">
        <MainLogo />
      </router-link>
      <AccountActions v-if="isLoggedIn" />
      <AuthActions v-else />
    </MainContainer>
  </header>
</template>

<script>
import MainContainer from "../shared/MainContainer.vue";
import MainLogo from "../MainLogo.vue";
import AuthActions from "./AuthActions.vue";
import AccountActions from "./AccountActions.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainHeader",
  components: { MainContainer, MainLogo, AuthActions, AccountActions },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss";
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
  z-index: 100;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>