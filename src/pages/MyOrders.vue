<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <Container>
        <section class="my-orders-page__content">
          <MainTitle>Orders</MainTitle>
          <CircleLoader
            v-if="loading"
            width="200"
            height="200"
            class="loader"
          />
          <OrdersList v-else :items="orders" />
        </section>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from "@/components/shared/MainContainer";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";
import MainTitle from "../components/shared/MainTitle";
import OrdersList from "../components/my-orders/OrdersList";
import { getOrders } from "../services/order.service";
import CircleLoader from "@/components/loaders/Circle.vue";
export default {
  name: "MyOrdersPage",
  components: {
    SectionWithHeaderSpacer,
    Container,
    MainTitle,
    OrdersList,
    CircleLoader,
  },
  data() {
    return {
      orders: [],
      loading: false,
    };
  },
  async created() {
    try {
      this.loading = true;
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: "error",
        title: error.message,
        text: error.response.data.message,
      });
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
.loader {
  display: flex;
  justify-content: center;
}
</style>