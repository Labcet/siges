<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header"><h4>Crear Documentos</h4></div>
					
					<div class="card-body">
						<form @submit.prevent="formSubmit">
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
										   <select name="prioridad_id" id="inputPrioridad_id" class="form-control" v-model="documents.prioridad">
										   <option value=""> seleccione </option>
										   		<option value = "A"> Alta</option> 
										   		<option value = "M"> Media </option>
										   		<option value = "B"> Baja </option> 
										   </select>
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Estado </label>
										 <select name="estado_id" id="inputEstado_id" class="form-control" v-model="documents.estado">
										   <option value=""> seleccione </option>
										   		<option value = "A"> Activo </option> 
										   		<option value = "I"> Inactivo </option> 
										   </select>
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
										<input type="file" v-on:change="archivo" class="form-control">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
									    <label>Oficina Actual </label>
									   	<select name="oficina_actual" id="inputOficina_actual" class="form-control" v-model="documents.oficina_actual">
									  	 	<option v-for="oficina in oficinas" :value="oficina.id">{{oficina.nombre_oficina}}</option>
									  	</select>
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

		oficinas: [],
		
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
			oficina_actual:"",
			user_id: this.$userId
		}

	}
},

	mounted: function(){

		this.getOficinas()
	},


	methods:{
		formSubmit(){

			axios.post('/api/documentos', this.documents)
			.then(response=>{
				this.$router.push({name:"mostrarDocumentos"});
			})
			.catch(error=>{
				alert(error);
				console.log(error);
			})
		},

		archivo(e){

			var self = this;

			var reader = new FileReader()
                reader.readAsDataURL(e.target.files[0])
                reader.onload = function () {
                    self.documents.doc_adjunto = reader.result;
                };
		},

				getOficinas(){

			axios.get('/api/consultaOficina')
			.then(response=>{
				console.log(response.data);
				this.oficinas = response.data;
			})
			.catch(error=>{
				alert(error);
				console.log(error)
			})
		}
	}
}
</script>