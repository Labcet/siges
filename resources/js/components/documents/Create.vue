<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header"><h4>Crear Documentos</h4></div>
					
					<div class="card-body">
						<form @submit.prevent="create">

							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Codigo</label>
										<input type="text" class="form-control" v-model="documents.codigo">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Prioridad </label>
										<input type="text" class="form-control" v-model="documents.prioridad">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Estado </label>
										<input type="text" class="form-control" v-model="documents.estado">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Fecha Ingreso </label>
										<input type="date" class="form-control" v-model="documents.fecha_ingreso">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Hora Ingreso </label>
										<input type="time" class="form-control" v-model="documents.hora_ingreso">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Fecha Salida </label>
										<input type="date" class="form-control" v-model="documents.fecha_salida">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Hora Salida </label>
										<input type="time" class="form-control" v-model="documents.hora_salida">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>N° de folios </label>
										<input type="text" class="form-control" v-model="documents.num_folios">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>DNI solicitante </label>
										<input type="text" class="form-control" v-model="documents.dni_solicitante">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>RUC solicitante </label>
										<input type="text" class="form-control" v-model="documents.ruc_solicitante">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Observacion </label>
										<input type="text" class="form-control" v-model="documents.observacion">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Documento Adjunto </label>
										<input type="file" @change="archivo" class="form-control" v-on:change="documents.doc_adjunto">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>coordinador </label>
										<input type="text" class="form-control" v-model="documents.user_id">
									</div>
								</div>

								<div class="col-12">
									<button type="submit" class="btn btn-primary">Guardar</button>
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
		documents:{
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
			user_id: 1,
		}

	}
},

	methods:{
		create(){
			axios.post('/api/documentos', this.documents)
			.then(response=>{
				this.$router.push({name:"mostrarDocumentos"})
			})
			.catch(error=>{
				alert(error);
				console.log(error)
			})
		},

		archivo (e){
		let file=e.target.files[0];
		let reader = new filereader();
		reader.onloadend = function(){
		 	//console.log('RESULT', reader.result)
		 	this.doc_adjunto = reader.result
		}
		reader.readAsDataURL(file);

		}



	}
}
</script>