<template>
  <MainContainer>
    <slot name="title"></slot>
    <div class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </div>
  </MainContainer>
</template>

<script>
import MainContainer from "../shared/MainContainer.vue";
export default {
  name: "ApartmentsList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: { MainContainer },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>