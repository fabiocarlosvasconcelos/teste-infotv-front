var listMovies = Vue.component("ListMovies", {
    template: `<div>
                  <b-table striped hover :fields="fields" :items="items"></b-table>
                  <b-alert variant="success" :show="showAlert">{{ info }}</b-alert>
                </div>`,
    props: ["title"],
    data() {
      return {
          fields: ['name', 'file', 'file_size'],
          items : null,
          info: null
        
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

        axios.get('http://172.24.91.85/api/v1/movies?order=ASC', config)
        .then(response => {

            var d = response.data.data;

            //console.log(d);

            if(d.erro != 'indefined'){
                this.items =  d;
            }

            
        })
        
      }
      
    }
  });