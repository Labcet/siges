<template>
       <div class="container">
        <div class="col-md-4 offset-md-4 mt-5">
            <h1 class="my-3 text center">Iniciar sesion</h1>
            <div class="card-body">
            <form @submit.prevent="enviar">
                <div class="form-group">
                    <label for="usuario "> Email</label>
                    <input v-model = "form.email" type="text" name="email" class="form-control" id="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="pass">Contraseña</label>
                    <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Password"> 
                </div>
                <br>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
        </div>
        </div>

  
</template>
<script>
export default {
    data: () => ({
      form: {
        email:"",
        password:""
      }
    }),

    methods: {

      /*enviar(){
        console.log("enviando");
      }*/

      enviar(){
       this.axios.post('/api/login', this.form)
        .then(response=>{
          if(response.data == 0){
            this.$router.push({name:"muestraCoordinador"});
          } else {
            alert("Error de autenticacion!");
          }
        })
        .catch(error=>{
          console.log(error)
        })
      },
    }

};
</script>