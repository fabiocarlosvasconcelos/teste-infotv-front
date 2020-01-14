var login = Vue.component("Login", {
  template: `<div>
                <b-card class="mt-3" header="Login">
                  <b-form @submit="onSubmit">
                    <b-form-group
                      id="input-group-1"
                      label="Email:"
                      label-for="input-1"
                    >
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
                        required
                        placeholder="Insira sua senha"
                      ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Login</b-button>
                  </b-form>
                </b-card>
                <b-alert show variant="danger" v-if="error"><pre class="m-0">{{info}}</pre></b-alert>
              </div>`,
  props: ["title"],
  data() {
    return {
      form: {
        email: '',
        password: ''
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
        url: url+'token',
        data: {
          email: this.form.email,
          password: this.form.password
        }
      }).then(response => {

          //se tiver o indice error
          if(response.data.error == undefined){

            var resp = response.data;

            var d = resp.data;

            if(d.status == 'success'){

              localStorage.token = d.token;
              window.app.user = d.user;
              window.app.logged = true;

              //redireciona para a lista de filmes
              this.$router.push('/movies')

            }
            
          } else {
            console.log(response.data);
            this.error = true;
            this.info = response.data.error;
          }
      }).catch(error => {
          console.log(error);
          this.error = true;
          this.info = error;
      });

    },

  }
});