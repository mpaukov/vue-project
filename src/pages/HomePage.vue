<template>
  <main class="home-page">
    <SectionWithHeaderSpacer>
      <MainContainer>
        <ApartmentsFilterForm @changeFilter="filter" />
      </MainContainer>
      <MainContainer>
        <CircleLoader v-if="loading" width="200" height="200" class="loader" />
        <p v-else-if="!filteredApartments.length">Nothing found</p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :id="apartment.id"
              :description="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </MainContainer>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm.vue";
import MainContainer from "../components/shared/MainContainer.vue";
import { getApartmentsList } from "../services/apartment.service";
import SectionWithHeaderSpacer from "@/components/shared/SectionWithHeaderSpacer.vue";
import CircleLoader from "@/components/loaders/Circle.vue";

export default {
  name: "HomePage",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    MainContainer,
    SectionWithHeaderSpacer,
    CircleLoader,
  },
  data() {
    return {
      apartments: [],
      filters: {
        city: "",
        price: 0,
      },
      loading: false,
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      this.loading = true;
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.log("error", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}
</style>



