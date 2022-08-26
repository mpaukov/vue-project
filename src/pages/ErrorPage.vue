<template>
  <SectionWithHeaderSpacer>
    <MainContainer>
      <MainTitle class="error__title">Page not found</MainTitle>
      <router-link class="error__link" :to="{ name: 'home' }">
        <MainButton class="error__button"> Home </MainButton>
      </router-link>
    </MainContainer>
  </SectionWithHeaderSpacer>
</template>

<script>
import MainTitle from "@/components/shared/MainTitle.vue";
import MainButton from "@/components/shared/MainButton.vue";
import SectionWithHeaderSpacer from "@/components/shared/SectionWithHeaderSpacer.vue";
import MainContainer from "@/components/shared/MainContainer.vue";

export default {
  name: "ErrorPage",
  components: {
    MainTitle,
    MainButton,
    SectionWithHeaderSpacer,
    MainContainer,
  },
};
</script>

<style lang="scss" scoped>
.error {
  &__title {
    font-size: 60px;
    text-align: center;
  }
  &__button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  &__link {
    text-decoration: none;
  }
}
</style>