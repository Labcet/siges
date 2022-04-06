<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header"><h4>Edita Coordinador</h4></div>
					
					<div class="card-body">
						<form @submit.prevent="update">

							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Nombre </label>
										<input type="text" class="form-control" v-model="coordinador.nombre">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Apellido Paterno </label>
										<input type="text" class="form-control" v-model="coordinador.paterno">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Apellido Materno</label>
										<input type="text" class="form-control" v-model="coordinador.materno">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Direccion </label>
										<input type="text" class="form-control" v-model="coordinador.direccion">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>DNI </label>
										<input type="text" class="form-control" v-model="coordinador.dni">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Telefono</label>
										<input type="text" class="form-control" v-model="coordinador.telefono">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>email </label>
										<input type="email" class="form-control" v-model="coordinador.email">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Password</label>
										<input type="password" class="form-control" v-model="coordinador.password">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Estado </label>
										<input type="text" class="form-control" v-model="coordinador.estado">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Oficina</label>
										<input type="text" class="form-control" v-model="coordinador.oficina_id">
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
	name:"Edita-Coordinador",
	data(){
	return{
		coordinador:{
			nombre:"",
			paterno:"",
			materno:"",
			direccion:"",
			dni:"",
			telefono:"",
			email:"",
			password:"",
			estado:"",
			oficina_id:""
		}

	 }
	},
		mounted(){
		this.buscarCoordinador()
	},
	methods:{
		buscarCoordinador(){
			
			axios.get('/api/coordinadores/' + this.$route.params.id)
				.then(response=>{
					const{nombre, paterno, materno, direccion, dni, telefono, email, password, estado, oficina_id} = response.data
					this.coordinador.nombre = nombre,
					this.coordinador.paterno = paterno,
					this.coordinador.materno = materno,
					this.coordinador.direccion = direccion,
					this.coordinador.dni = dni,
					this.coordinador.telefono = telefono,
					this.coordinador.email = email,
					this.coordinador.password = password,
					this.coordinador.estado = estado,
					this.coordinador.oficina_id = oficina_id
				})
				.catch(error=>{
					console.log(error)
				})
		},
		update(){

			const data = {
				id: this.$route.params.id,
				oficina: this.coordinador 
			};
			axios.put('/api/coordinadores/' + this.$route.params.id, this.coordinador)
			.then(response=>{
				this.$router.push({
					name:"mostrarCoordinadores"
				})
			})
			.catch(error=>{
				alert(error);
				console.log(error)
			})
		}
	}
}
</script>