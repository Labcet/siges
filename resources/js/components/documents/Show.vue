<template>

<div class="container">

<div class="row">
   <div class="col-lg-12 mb-4">
       <router-link :to='{name:"createDocuments"}'class="btn btn-success"><i class="fa-solid fa-circle-plus"></i></router-link>
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
			 	<th> acciones </th>
			 </tr>
			  </thead>
			<tbody>
			      <tr v-for="Documentos in documentos" :key="Documentos.id">
			      <td>{{Documentos.id}}</td>
			      <td>{{Documentos.codigo}}</td>
			      <td>{{Documentos.prioridad}}</td>
			      <td>{{Documentos.estado}}</td>
			      <td>{{Documentos.fecha_ingreso}}</td>
			      <td>{{Documentos.hora_ingreso}}</td>
			      <td>{{Documentos.fecha_salida}}</td>
			      <td>{{Documentos.hora_ingreso}}</td>
			      <td>{{Documentos.num_folios}}</td>
			      <td>{{Documentos.dni_solicitante}}</td>
			      <td>{{Documentos.ruc_solicitante}}</td>
			      <td>{{Documentos.observacion}}</td>
			      <td>{{Documentos.doc_adjunto}}</td>

			      <td> 
			      	<router-link :to='{name:"editDocuments", params:{id:Documentos.id}}' class="btn btn-info"><i class="far fa-edit"></i></router-link>
			      	<a type="button" @click="borrarDocumento(Documentos.id)" class="btn btn-danger "><i class="far fa-trash-alt"></i></a>


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
		await this.axios.get('/api/Documentos')
		.then(response=>{
			this.documentos=response.data
		})
		.catch(error=>{
			this.Documentos = []
		})
	},
	borrarDocumento(id){
		if(confirm("¿confirma eliminar el registro")){
			this.axios.delete('/api/Documentos/${id}')
			.then(response=>{
			this.showDocuments()
			})
			.catch(error=>{
			console
			})			
		}
	}
}
	
}
</script>