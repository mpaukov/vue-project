<template>
  <main class="apartment-page">
    <MainContainer>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewList" />
        </div>
      </div>
    </MainContainer>
  </main>
</template>

<script>
import MainContainer from "../components/shared/MainContainer.vue";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner.vue";
import Reviews from "../components/reviews/index.vue";
import reviews from "../components/reviews/reviews.json";
import { getApartmentById } from "../services/apartment.service";
export default {
  name: "ApartmentPage",
  components: {
    MainContainer,
    ApartmentsMainInfo,
    ApartmentsOwner,
    Reviews,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewList() {
      return reviews;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      console.error("error", error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  &__owner {
    min-width: 350px;
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>