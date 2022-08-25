<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput
      v-model="price"
      placeholder="Price, from"
      type="number"
      errorMessage="Please fulfill"
      :rules="rules"
    />
    <SubmitButton class="form__submit" type="submit"
      >Filtering by price and place</SubmitButton
    >
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import SubmitButton from "../shared/MainButton.vue";
import { isRequired, charLimit } from "../../utils/validationRules";

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
    rules() {
      return [isRequired, charLimit(6)];
    },
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
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
  margin-bottom: 40px;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>