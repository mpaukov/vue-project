<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Суммарный рейтинг</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviews }} отзыв(a/ов)</span>
        <StarRating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <MainButton @click="toggleReviews" :btn="false" class="reviews__show-more">
      {{ buttonText }}
    </MainButton>
  </section>
</template>

<script>
import ReviewsItem from "./item/index.vue";
import StarRating from "../shared/StarRating.vue";
import MainButton from "../shared/MainButton.vue";
export default {
  name: "ReviewsList",
  components: {
    ReviewsItem,
    StarRating,
    MainButton,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? "Свернуть"
        : "Читать еще...";
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss";
.reviews {
  margin-top: 20px;
  background: $card-bg;
  padding: 0 2px;
  &__heading {
    padding: 20px 20px 10px;
  }
  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
}
</style>