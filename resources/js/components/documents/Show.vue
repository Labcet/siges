<template>

	<div class="container">
		<div class="row">
		   <div class="col-lg-12 mb-4">
		       <router-link :to='{name:"crearDocumentos"}'class="btn btn-success">Crear</router-link>
		    </div>
			<div class="col-12">
				<div class ="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-primary text-white">
							 <tr>
							 	<th> ID </th>
							 	<th> Código </th>
							 	<th> Prioridad </th>
							 	<th> Estado </th>
							 	<th> Fecha Ingreso </th>
							 	<th> Hora Ingreso </th>
							 	<th> Fecha Salida </th>
							 	<th> Hora Salida </th>
							 	<th> N° de Folios </th>
							 	<th> DNI Solicitante </th>
							 	<th> RUC Solicitante </th>
							 	<th> Observación </th>
							 	<th> Documento Adjunto </th>
							 	<th> Oficina Actual </th>
							 	<th> Ciclo </th>
							 	<th> Acciones </th>
							 </tr>
						</thead>
						<tbody>
						   <tr v-for="documents in documentos" :key="documents.id">
						      <td>{{documents.id}}</td>
						      <td>{{documents.codigo}}</td>
						      <td>{{documents.prioridad}}</td>
						      <td>{{documents.estado}}</td>
						      <td>{{documents.fecha_ingreso}}</td>
						      <td>{{documents.hora_ingreso}}</td>
						      <td>{{documents.fecha_salida}}</td>
						      <td>{{documents.hora_salida}}</td>
						      <td>{{documents.num_folios}}</td>
						      <td>{{documents.dni_solicitante}}</td>
						      <td>{{documents.ruc_solicitante}}</td>
						      <td>{{documents.observacion}}</td>
						      <td><a download=documento_Adjunto :href="documents.doc_adjunto">PDF</a></td>
						      <td>{{documents.oficina_actual}}</td>
						      <td>{{documents.ciclo}}</td>

						      <td v-if="documents.oficina_actual == user_oficina && documents.oficina_actual != 6">
						      	<router-link :to='{name:"editarDocumentos", params:{id:documents.id}}' ><font-awesome-icon icon="user-edit" /></router-link>
						      	<a type="button" @click="borrarDocumento(documents.id)" ><font-awesome-icon icon="trash-alt" /></a>
						      	<a type="button" @click="derivarDocumento(documents.id)" class="btn btn-danger ">D<i class="far fa-trash-alt"></i></a>
						      </td>
					     </tr>
			        </tbody>
		        </table>
	         </div>
         </div>
      </div>
   </div>
</template>

<script>
	export default{
		name:"documentos",
		data(){
			return{
				documentos:[],
				user_id: this.$userId,
				user_oficina: ""
			}
		},

		mounted(){

			this.showDocuments()
			this.getUserOficina()
		},

		methods:{
			showDocuments(){

				axios.get('/api/showDocuments/' + this.user_id)
				.then(response=>{
					this.documentos = response.data
				})
				.catch(error=>{
					alert(error);
					//console.log(error)
				})
			},

			getUserOficina(){

				axios.get('/api/getUserOficina/' + this.user_id)
				.then(response=>{

					this.user_oficina = response.data;
					console.log(this.user_oficina);
				})
				.catch(error=>{
					alert(error);
					//console.log(error)
				})
			},

			borrarDocumento(id){

				if(confirm("¿confirma eliminar el registro")){
					axios.delete('/api/documentos/' + id)
					.then(response=>{
						this.showDocuments()
					})
					.catch(error=>{
						alert(error);
						//console.log(error)
					})			
				}
			},

			derivarDocumento(id){
				if(confirm("¿confirma derivar el registro")){
					axios.get('/api/derivarDoc/' + id)
					.then(response=>{
						//console.log(response.data);
						this.$router.push({name:"mostrarDocumentos"})
					})
					.catch(error=>{
						alert(error);
						//console.log(error)
					})			
				}
			},
      }
	}
</script>