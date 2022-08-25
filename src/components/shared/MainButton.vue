<template>
  <button
    v-bind:type="type"
    :class="{ btn: btn, 'btn--outlined': outlined }"
    :disabled="loading"
  >
    <CircleLoader v-if="loading" width="38" height="38" class="btn__loader" />
    <span class="button__content" :class="contentStyle">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import CircleLoader from "../loaders/Circle.vue";
export default {
  name: "MainButton",
  components: { CircleLoader },
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    btn: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      return {
        "btn__content--hidden": this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss";
.btn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  background: $main-color;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color 0.4s, color 0.4s;
  font-family: Montserrat, sans-serif;

  &:hover {
    background: #fff;
    color: $main-color;
    border: 1px solid $main-color;
  }

  &--outlined {
    background: none;
    border: 1px solid $main-color;
    color: $main-color;

    &:hover {
      background: $main-color;
      color: #fff;
      border: 1px solid transparent;
    }
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>