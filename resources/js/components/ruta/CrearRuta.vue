j<template> 
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header"><h4>Crear</h4></div>
					
					<div class="card-body">
						<form @submit.prevent="crearRut">

							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Documendo id</label>
										<input type="text" class="form-control" v-model="ruta.documento_id">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label> Oficina id </label>
										<input type="text" class="form-control" v-model="ruta.oficina_id">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Descripción </label>
										<input type="text" class="form-control" v-model="ruta.descripción">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Fecha Ingreso</label>
										<input type="date" class="form-control" v-model="ruta.fecha_ingreso">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Hora Ingreso</label>
										<input type="time" class="form-control" v-model="ruta.hora_ingreso">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Fecha Salida</label>
										<input type="date" class="form-control" v-model="ruta.fecha_salida">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Hora Salida</label>
										<input type="time" class="form-control" v-model="ruta.hora_salida">
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
	name:"crear-Ruta",
	data(){
		return{
			ruta:{
				documento_id:"",
				oficina_id:"",
				descripción:"",
				fecha_ingreso:"",
				hora_ingreso:"",
				fecha_salida:"",
				hora_salida:"",
			}
		}
	},

	methods:{
		crearRut(){
			axios.post('/api/rutas', this.ruta)
			.then(response=>{
				this.$router.push({name:"mostrarRutas"})
			})
			.catch(error=>{
				console.log(error)
			})
		},
	}
}
</script>