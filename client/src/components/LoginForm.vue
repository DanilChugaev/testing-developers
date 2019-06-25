<script>
export default {
  name: 'LoginForm',

  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    sending: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      show: false,
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
      formSending: false,
    };
  },

  computed: {
    btnDisabled() {
      return !this.valid || !this.password.trim() || !this.email.trim();
    },
    formValidated() {
      this.$emit('formValidated', this.$refs.authForm.validate());
    },
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        };

        this.$emit('submit', user);
      }
    },
  },
};
</script>

<template lang="pug">
  v-form.login-form.elevation-3(
    ref='form'
    v-model='valid'
    lazy-validation
  )
    h2 {{title}}

    v-text-field(
      autofocus
      v-model='email'
      :rules='emailRules'
      label='E-mail'
      required
      @keyup.enter='submit'
    )

    v-text-field(
      v-model='password'
      :append-icon="show ? 'visibility_off' : 'visibility'"
      :rules='passwordRules'
      :counter='10'
      :type="show ? 'text' : 'password'"
      label='Password'
      required
      @keyup.enter='submit'
      @click:append="show = !show"
    )

    v-btn(
      :disabled='btnDisabled'
      :loading='sending'
      @click='submit'
    ) {{type}}
</template>

<style scoped>
.login-form {
  background-color: #fff;
  width: 500px;
  margin: 0 auto;
}
</style>
