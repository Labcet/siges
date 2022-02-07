<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header"><h4>Crear Oficinas</h4></div>
					
					<div class="card-body">
						<form @submit.prevent="crear">

							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Nombre Oficina </label>
										<input type="text" class="form-control" v-model="office.nombre_oficina">
									</div>
								</div>

								<div class=col-12 mb-2">
									<div class="form-group">
										<label>Nombre Jefe </label>
										<input type="text" class="form-control" v-model="office.nombre_jefe">
									</div>
								</div>
								<div class=col-12 mb-2">
									<div class="form-group">
										<label>Descripción </label>
										<input type="text" class="form-control" v-model="office.descripcion">
									</div>
								</div>
								<div class=col-12 mb-2">
									<div class="form-group">
										<label>Estado </label>
										<input type="text" class="form-control" v-model="office.estado">
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
	name:"crear-office",
	data(){
	return{
		office:{
			nombre_oficina:"",
			nombre_jefe:"",
			descripcion:"",
			estado:"",
		}

			}
	},

	methods:{
		async crear(){
			await this.axios.post('/api/office', this.office)
			.then(response=>{
				this.$router.push({name:"mostrarOficinas"})
			})
			.catch(error=>{
				console.log(error)
			})
		},
	}
}
</script>