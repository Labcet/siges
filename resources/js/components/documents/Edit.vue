<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header"><h4>Edit Documents</h4></div>
					
					<div class="card-body">
						<form @submit.prevent="actualiza">

							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Codigo</label>
										<input type="text" class="form-control" v-model="Documentos.codigo">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Prioridad </label>
										<input type="text" class="form-control" v-model="Documentos.prioridad">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Estado </label>
										<input type="text" class="form-control" v-model="Documentos.estado">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Fecha Ingreso </label>
										<input type="date" class="form-control" v-model="Documentos.fecha_ingreso">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Hora Ingreso </label>
										<input type="text" class="form-control" v-model="Documentos.hora_ingreso">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Fecha Salida </label>
										<input type="date" class="form-control" v-model="Documentos.fecha_salida">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Hora Salida </label>
										<input type="text" class="form-control" v-model="Documentos.hora_salida">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>N° de folios </label>
										<input type="text" class="form-control" v-model="Documentos.num_folios">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>DNI solicitante </label>
										<input type="text" class="form-control" v-model="Documentos.dni_solicitante">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>RUC solicitante </label>
										<input type="text" class="form-control" v-model="Documentos.ruc_solicitante">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Observacion </label>
										<input type="text" class="form-control" v-model="Documentos.observacion">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Documento Adjunto </label>
										<input type="text" class="form-control" v-model="Documentos.doc_adjunto">
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
	name:"create-Documentos",
	data(){
	return{
		Documentos:{
			codigo:"",
			prioridad:"",
			estado:"",
			fecha_ingreso:"",
			hora_ingreso:"",
			fecha_salida:"",
			hora_salida:"",
			num_folios:"",
			dni_solicitante:"",
			ruc_solicitante:"",
			observacion:"",
			doc_adjunto:"",
		}

			}
	},
	mounted(){
		this.showDocuments()
	},
	methods:{
		async showDocuments(){
			await this.axios.get('/api/Documentos/${this.$route.params.id}')
				.then(response=>{
					const{codigo, prioridad, estado, fecha_ingreso, hora_ingreso, fecha_salida, hora_salida, num_folios, dni_solicitante, ruc_solicitante, observacion, doc_adjunto} = response.data
					this.Documentos.codigo = codigo,
					this.Documentos.prioridad = prioridad,
					this.Documentos.estado = estado,
					this.Documentos.fecha_ingreso = fecha_ingreso,
					this.Documentos.hora_ingreso = hora_ingreso,
					this.Documentos.fecha_ingreso = fecha_salida,
					this.Documentos.hora_salida = hora_salida,
					this.Documentos.num_folios = num_folios,
					this.Documentos.dni_solicitante = dni_solicitante,
					this.Documentos.ruc_solicitante = ruc_solicitante,
					this.Documentos.observacion = observacion,
					this.Documentos.doc_adjunto = doc_adjunto
				})
				.catch(error=>{
					console.log(error)
				})
		},
		async actualiza(){
			await this.axios.put('/api/Documentos/${this.$route.params.id}', this.Documentos)
			.then(response=>{
				this.$router.push({
					name:"showDocuments"
				})
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
}
</script>