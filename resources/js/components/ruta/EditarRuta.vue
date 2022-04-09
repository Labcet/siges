<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header">
						<h4>Editar Rutas</h4>
					</div>
					<div class="card-body">
						<form @submit.prevent="actualizarRuta">
							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Documento ID </label>
											<input type="text" class="form-control" v-model="ruta.documento_id">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Oficina ID</label>
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
										<label>Fecha Ingreso </label>
											<input type="date" class="form-control" v-model="ruta.fecha_ingreso">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Hora Ingreso </label>
											<input type="time" class="form-control" v-model="ruta.hora_ingreso">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Fecha Salida </label>
											<input type="date" class="form-control" v-model="ruta.fecha_salida">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Hora Salida </label>
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
export default {
	name:"editar-Ruta",
	data(){
		return{
			ruta:{
				documento_id:"",
				oficina_id:"",
				descripción:"",
				fecha_ingreso:"",
				hora_ingreso:"",
				fecha_salida:"",
				hora_salida:""
			}
		}
	},
	mounted(){
		this.buscarRuta()
	},
	methods:{

		buscarRuta(){
			
			axios.get('/api/rutas/' + this.$route.params.id)
			.then(response=>{
				const{documento_id, oficina_id, descripción, fecha_ingreso, hora_ingreso, fecha_salida, hora_salida } = response.data
				this.ruta.documento_id = documento_id,
				this.ruta.oficina_id = oficina_id,
				this.ruta.descripción = descripción,
				this.ruta.fecha_ingreso = fecha_ingreso,
				this.ruta.hora_ingreso = hora_ingreso,
				this.ruta.fecha_salida = fecha_salida,
				this.ruta.hora_salida = hora_salida
			})
			.catch(error=>{
				console.log(error)
			})
		},

		actualizarRuta(){

			const data = {
				id: this.$route.params.id,
				ruta: this.ruta 
			};

			axios.put('/api/rutas/' + this.$route.params.id, this.ruta)
			.then(response=>{
				this.$router.push({
					name:"mostrarRutas"
				})
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
}
</script>