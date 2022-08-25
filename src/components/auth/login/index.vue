<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" @submit.prevent="handleSubmit" class="login__form">
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="Email"
        type="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        placeholder="Password"
        type="password"
        :rules="passwordRules"
        class="login__input"
      />
      <MainButton type="submit" class="login__btn" :loading="loading"
        >Log in</MainButton
      >
    </Form>
  </AuthContainer>
</template>

<script>
import Form from "../../shared/form/index.vue";
import CustomInput from "../../shared/CustomInput.vue";
import MainButton from "../../shared/MainButton.vue";
import AuthContainer from "../AuthContainer.vue";
import MainTitle from "@/components/shared/MainTitle.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import { loginUser } from "../../../services/auth.service";

export default {
  name: "LoginForm",
  components: { Form, CustomInput, MainButton, AuthContainer, MainTitle },
  data() {
    return {
      formData: {
        email: "",
        password: "",
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
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();

      if (isFormValid) {
        this.loading = true;
        try {
          const { data } = await loginUser(this.formData);
          console.log("data", data);
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
.login {
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