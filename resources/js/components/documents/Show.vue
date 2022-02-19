<template>

<div class="container">

<div class="row">
   <div class="col-lg-12 mb-4">
       <router-link :to='{name:"createDocuments"}'class="btn btn-success">Crear</router-link>
    </div>
<div class="col-12">
	<div class ="table-responsive">
		<table class="table table-bordered">
			<thead class="bg-primary text-white">
			
			 <tr>
			 	<th> ID </th>
			 	<th> codigo </th>
			 	<th> prioridad </th>
			 	<th> estado </th>
			 	<th> fecha_ingreso </th>
			 	<th> hora_ingreso </th>
			 	<th> fecha_salida </th>
			 	<th> hora_salida </th>
			 	<th> num_folios </th>
			 	<th> dni_solicitante </th>
			 	<th> ruc_solicitante </th>
			 	<th> observacion </th>
			 	<th> doc_adjunto </th>
			 	<th> coordinador </th>
			 	<th> acciones </th>
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
			      <td>{{documents.hora_ingreso}}</td>
			      <td>{{documents.num_folios}}</td>
			      <td>{{documents.dni_solicitante}}</td>
			      <td>{{documents.ruc_solicitante}}</td>
			      <td>{{documents.observacion}}</td>
			      <td>{{documents.doc_adjunto}}</td>
			      <td>{{documents.coordinador_id}}</td>

			      <td> 
			      	<router-link :to='{name:"editDocuments", params:{id:documents.id}}' class="btn btn-info"><i class="far fa-edit"></i></router-link>
			      	<a type="button" @click="borrarDocumento(documents.id)" class="btn btn-danger "><i class="far fa-trash-alt"></i></a>


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
		 documentos:[]
	}
},
mounted(){
	this.showDocuments()
},
methods:{
	async showDocuments(){
		await this.axios.get('/api/documentos')
		.then(response=>{
			this.documentos=response.data
		})
		.catch(error=>{
			console.log(error)
		})
	},
	borrarDocumento(id){
		if(confirm("¿confirma eliminar el registro")){
			this.axios.delete('/api/documentos/' + id)
			.then(response=>{
			this.showDocuments()
			})
			.catch(error=>{
			console.log(error)
			})			
		}
	}
}
	
}
</script>