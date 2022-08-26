<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="registration__form">
      <CustomInput
        v-model="formData.name"
        name="name"
        placeholder="Name"
        type="text"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="Email"
        type="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        placeholder="Password"
        type="password"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        name="password"
        placeholder="Password"
        type="password"
        :rules="confirmPassword"
        class="registration__input"
      />
      <MainButton type="submit" class="registration__btn" :loading="loading"
        >Registration</MainButton
      >
    </Form>
  </AuthContainer>
</template>

<script>
import { mapActions } from "vuex";
import Form from "../../shared/form/index.vue";
import CustomInput from "../../shared/CustomInput.vue";
import MainButton from "../../shared/MainButton.vue";
import AuthContainer from "../AuthContainer.vue";
import MainTitle from "@/components/shared/MainTitle.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
  charMinLimit,
} from "../../../utils/validationRules";

export default {
  name: "RegistrationForm",
  components: { Form, CustomInput, MainButton, AuthContainer, MainTitle },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      loading: false,
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
        charMinLimit,
      };
    },
    nameRules() {
      return [this.rules.isRequired, this.rules.charMinLimit(3)];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Passwords don't match",
        }),
      ];
    },
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();

      if (isFormValid) {
        const { name, email, password } = this.formData;
        this.loading = true;
        try {
          await this.registerUser({
            name,
            email,
            password,
          });
          form.reset();
          this.$router.push({ name: "home" });
        } catch (error) {
          this.$notify({
            type: "error",
            title: error.message,
            text: error.response.data.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  &__form {
    display: block;
    flex-direction: column;
  }
  &__title {
    text-align: center;
  }
  &__input {
    margin-bottom: 20px;
    width: 100%;
  }
  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>