var listMovies = Vue.component("ListMovies", {
    template: `<div>
                  <b-card class="mt-3" header="Filmes">
                    <b-table striped hover :fields="fields" :items="items"></b-table>
                    <b-alert show variant="danger" v-if="error"><pre class="m-0">{{info}}</pre></b-alert>
                  </b-card>
                </div>`,
    props: ["title"],
    data() {
      return {
          fields: ['name', 'file', 'file_size'],
          items : null,
          info: null,
          error: false,
        
      }
    },
    created() {
      this.listMovies();
    },
    computed: {
      showAlert() {
        return false;
      }
    },
    methods: {

      listMovies() {

        var config = {
            headers: {Authorization: 'Bearer ' + store.state.token}
        };

        //console.log(store.state.token);

        axios.get(url+'/api/v1/movies?order=ASC', config)
        .then(response => {

            if(response.data.error == undefined){

              var d = response.data.data;
              this.items =  d;

            } else {
               this.info = response.data.error;
               this.error = true;
            }

        }).catch(error => {
            console.log(error)
            this.info = "Erro o tentar listas os filmes";
            this.error = true;
        });
        
      }
      
    }
  });