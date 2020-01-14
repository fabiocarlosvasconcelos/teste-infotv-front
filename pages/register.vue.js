var register = Vue.component("NewUSer", {
  template: `<div>
                  <b-card class="mt-3" header="Cadastrar usuário">
                    <b-form @submit="onSubmit">

                      <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
                        <b-form-input
                          id="input-0"
                          v-model="form.name"
                          type="text"
                          required
                          placeholder="Insira seu Nome"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="form.email"
                          type="email"
                          required
                          placeholder="Insira seu email"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group id="input-group-2" label="Sua senha:" label-for="input-2">
                        <b-form-input
                          id="input-2"
                          v-model="form.password"
                          type="password"
                          minlength="6"
                          required
                          placeholder="Insira sua senha"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group id="input-group-2" label="Confirmar senha:" label-for="input-2">
                        <b-form-input
                          id="input-3"
                          v-model="form.password_confirmation"
                          type="password"
                          minlength="6"
                          required
                          placeholder="Confirme sua senha"
                        ></b-form-input>
                      </b-form-group>

                      <b-button type="submit" variant="primary">Enviar</b-button>
                    </b-form>
                  </b-card>
                  <b-alert show variant="danger" v-if="error"><pre class="m-0">{{info}}</pre></b-alert>
                </div>`,
  props: ["title"],
  data() {
    return {
      form: {
        nome: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      info: '',
      error: false
    }
  },
  created() {

  },
  methods: {

    onSubmit(evt) {
      evt.preventDefault();

      axios({
        method: 'post',
        url: url + 'users',
        data: {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.password_confirmation
        }
      }).then(response => {

        //se tiver o indice error
        if (response.data.error == undefined) {

            var resp = response.data;
            var d = resp.data;
            //redireciona para o login
            this.$router.push('/')

        } else {
          console.log(response.data);
          this.error = true;
          this.info = response.data.error;
        }

      }).catch(error => {
        console.log(error.data);
        this.error = true;
        this.info = error;
       
      });

    },

  }
});