<template>
  <div class="orders-list">
    <MainTitle v-if="!items.length">Not found</MainTitle>
    <template v-else>
      <OrdersItem
        v-for="order in items"
        :key="order.id"
        :order="order.apartment"
      />
    </template>
  </div>
</template>

<script>
import OrdersItem from "./OrdersItem";
import MainTitle from "../shared/MainTitle.vue";
export default {
  name: "OrdersList",
  components: {
    OrdersItem,
    MainTitle,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-list {
  margin-top: 20px;
}
</style>