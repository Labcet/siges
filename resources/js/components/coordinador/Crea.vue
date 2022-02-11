<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header"><h4>Crear Coordinador</h4></div>
					
					<div class="card-body">
						<form @submit.prevent="crea">

							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Nombre </label>
										<input type="text" class="form-control" v-model="Coordinador.nombre">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Apellido Paterno </label>
										<input type="text" class="form-control" v-model="Coordinador.paterno">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Apellido Materno</label>
										<input type="text" class="form-control" v-model="Coordinador.materno">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Direccion </label>
										<input type="text" class="form-control" v-model="Coordinador.direccion">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>DNI </label>
										<input type="text" class="form-control" v-model="Coordinador.dni">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Telefono</label>
										<input type="text" class="form-control" v-model="Coordinador.telefono">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>email </label>
										<input type="email" class="form-control" v-model="Coordinador.email">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Password</label>
										<input type="password" class="form-control" v-model="Coordinador.password">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Estado </label>
										<input type="text" class="form-control" v-model="Coordinador.estado">
									</div>
								</div>

								<div class="col-12">
									<button type="submit" class="btn btn-primary"> Guardar</button>
								</div>
							</div>
						</form>
					</div>
				</div>				
			</div>
		</div>
	</div>

</template>
<script>
export default{
	name:"crea-Coordinador",
	data(){
	return{
		Coordinador:{
			nombre:"",
			paterno:"",
			materno:"",
			direccion:"",
			dni:"",
			telefono:"",
			email:"",
			password:"",
			estado:"",
		}

			}
	},

	methods:{
		async crea(){
			await this.axios.post('/api/Coordinador', this.Coordinador)
			.then(response=>{
				this.$router.push({name:"muestraCoordinador"})
			})
			.catch(error=>{
				console.log(error)
			})
		},
	}
}
</script>