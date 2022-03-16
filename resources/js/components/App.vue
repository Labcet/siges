<template>
       <div class="container">
        <div class="col-md-4 offset-md-4 mt-5">
            <h1 class="my-3 text center">Iniciar sesion</h1>
            <div class="card-body">
            <form @submit.prevent="enviar">
                <div class="form-group">
                    <label for="usuario "> Usuario</label>
                    <input v-model = "form.usuario" type="text" name="usuario" class="form-control" id="usuario" placeholder="usuario">
                </div>
                <div class="form-group">
                    <label for="pass">Contraseña</label>
                    <input v-model="form.password" type="password" class="form-control" id="pass" placeholder="ingresa tu clave"> 
                </div>
                <button type="button" class="btn btn-primary">Enviar</button>
            </form>
        </div>
        </div>
        </div>

  
</template>
<script>
export default {
    data: () => ({
    form: {
    usuario:"",
    contraseña:""
    }
    }),
    methods: {
    enviar(){
    console.log("enviando");
    }
    }

};
</script>