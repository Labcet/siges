<template>

<div class="container">

<div class="row">
   <div class="col-lg-12 mb-4">
       <router-link :to='{name:"creaCoordinador"}'class="btn btn-success"><i class="fa-solid fa-circle-plus"></i></router-link>
    </div>
<div class="col-12">
	<div class ="table-responsive">
		<table class="table table-bordered">
			<thead class="bg-primary text-white">
			
			 <tr>
			 	<th> ID </th>
			 	<th> nombre </th>
			 	<th> paterno </th>
			 	<th> materno </th>
			 	<th> direccion </th>
			 	<th> dni </th>
			 	<th> telefono </th>
			 	<th> email </th>
			 	<th> password </th>
			 	<th> estado </th>
			 	<th> acciones </th>
			 </tr>
			  </thead>
			<tbody>
			      <tr v-for="Coordinador in coordinadores" :key="Coordinador.id">
			      <td>{{Coordinador.id}}</td>
			      <td>{{Coordinador.nombre}}</td>
			      <td>{{Coordinador.paterno}}</td>
			      <td>{{Coordinador.materno}}</td>
			      <td>{{Coordinador.direccion}}</td>
			      <td>{{Coordinador.dni}}</td>
			      <td>{{Coordinador.telefono}}</td>
			      <td>{{Coordinador.email}}</td>
			      <td>{{Coordinador.password}}</td>
			      <td>{{Coordinador.estado}}</td>

			      <td> 
			      	<router-link :to='{name:"editaCoordinador", params:{id:Coordinador.id}}' class="btn btn-info"><i class="far fa-edit"></i></router-link>
			      	<a type="button" @click="borrarCoordinador(Coordinador.id)" class="btn btn-danger "><i class="far fa-trash-alt"></i></a>


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
name:"coordinadores",
data(){
	return{
		 coordinadores:[]
	}
},
mounted(){
	this.muestraCoordinador()
},
methods:{
	async muestraCoordinador(){
		await this.axios.get('/api/Coordindor')
		.then(response=>{
			this.coordinadores =response.data
		})
		.catch(error=>{
			this.Coordinador = []
		})
	},
	borrarCoordinador(id){
		if(confirm("¿confirma eliminar el registro")){
			this.axios.delete('/api/Coordinador/${id}')
			.then(response=>{
			this.muestraCoordinador()
			})
			.catch(error=>{
			console
			})			
		}
	}
}
	
}
</script>