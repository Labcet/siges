<template>

<div class="container">

<div class="row">
   <div class="col-lg-12 mb-4">
      <router-link :to='{name:"crearOficinas"}'class="btn btn-success">Crear</router-link>
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
			   <tr v-for="oficina in oficinas" :key="oficina.id">
			      <td>{{oficina.id}}</td>
			      <td>{{oficina.nombre_oficina}}</td>
			      <td>{{oficina.nombre_jefe}}</td>
			      <td>{{oficina.descripcion}}</td>
			      <td>{{oficina.estado}}</td>
			      <td> 
			      	<router-link :to='{name:"editarOficinas", params:{id:oficina.id}}' class="btn btn-info"><i class="bi bi-pencil-square"></i></router-link>
			      	<a type="button" @click="borrarOficina(oficina.id)" class="btn btn-danger "><i class="bi bi-trash"></i></a>
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
			await this.axios.get('/api/oficinas')
			.then(response=>{
				this.oficinas=response.data
			})
			.catch(error=>{
				console.log(error)
			})
		},

		borrarOficina(id){
			if(confirm("¿confirma eliminar el registro")){
				this.axios.delete('/api/oficinas/' + id)
				.then(response=>{
					this.mostrarOficinas()
				})
				.catch(error=>{
					console.log(error)
				})			
			}
		}
	}
}
</script>