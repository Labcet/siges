<template>

<div class="container">

<div class="row">
   <div class="col-lg-12 mb-4">
       <router-link :to='{name:"crearOficinas"}'class="btn btn-success"><i class="fa-solid fa-circle-plus"></i></router-link>
    </div>
<div class="col-12">
	<div class ="table-responsive">
		<table class="table table-bordered">
			<thead class="bg-primary text-white">
			
			 <tr>
			 	<th> ID </th>
			 	<th> nombre_oficina </th>
			 	<th> nombre_jefe </th>
			 	<th> descripcion </th>
			 	<th> estado </th>
			 	<th> acciones </th>
			 </tr>
			  </thead>
			<tbody>
			      <tr v-for="office in oficinas" :key="office.id">
			      <td>{{office.id}}</td>
			      <td>{{office.nombre_oficina}}</td>
			      <td>{{office.nombre_jefe}}</td>
			      <td>{{office.descripcion}}</td>
			      <td>{{office.estado}}</td>

			      <td> 
			      	<router-link :to='{name:"editarOficinas", params:{id:office.id}}' class="btn btn-info"><i class="far fa-edit"></i></router-link>
			      	<a type="button" @click="borrarOficina(office.id)" class="btn btn-danger "><i class="far fa-trash-alt"></i></a>


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
name:"oficinas",
data(){
	return{
		 oficinas:[]
	}
},
mounted(){
	this.mostrarOficinas()
},
methods:{
	async mostrarOficinas(){
		await this.axios.get('/api/office')
		.then(response=>{
			this.oficinas=response.data
		})
		.catch(error=>{
			this.office = []
		})
	},
	borrarOficina(id){
		if(confirm("¿confirma eliminar el registro")){
			this.axios.delete('/api/office/${id}')
			.then(response=>{
			this.mostrarOficinas()
			})
			.catch(error=>{
			console
			})			
		}
	}
}
	
}
</script>