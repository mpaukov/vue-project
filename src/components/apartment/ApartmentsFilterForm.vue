<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput v-model="price" />
    <SubmitButton class="form__submit" type="submit">Подбор жилья</SubmitButton>
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import SubmitButton from "../shared/MainButton.vue";
export default {
  name: "ApartmentsFilterForm",
  components: { CustomSelect, CustomInput, SubmitButton },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "Город", selected: true },
        "kiev",
        "Odesa",
        "poltava",
        "kharkov",
        "dnepr",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("changeFilter", { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>