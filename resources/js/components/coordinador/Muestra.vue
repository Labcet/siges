<template>

<div class="container">

<div class="row">
   <div class="col-lg-12 mb-4">
       <router-link :to='{name:"crearCoordinadores"}'class="btn btn-success">Crear</router-link>
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
			 	<th> estado </th>
			 	<th> oficina </th>
			 	<th> acciones </th>
			 </tr>
			  </thead>
			<tbody>
			   <tr v-for="coordinador in coordinadores" :key="coordinador.id">
			      <td>{{coordinador.id}}</td>
			      <td>{{coordinador.nombre}}</td>
			      <td>{{coordinador.paterno}}</td>
			      <td>{{coordinador.materno}}</td>
			      <td>{{coordinador.direccion}}</td>
			      <td>{{coordinador.dni}}</td>
			      <td>{{coordinador.telefono}}</td>
			      <td>{{coordinador.email}}</td>
			      <td>{{coordinador.estado}}</td>
			      <td>{{coordinador.oficina_id}}</td>
			      <td> 
			      	<router-link :to='{name:"editarCoordinadores", params:{id:coordinador.id}}' class="btn btn-info"><i class="far fa-edit"></i></router-link>
			      	<a type="button" @click="borrarCoordinador(coordinador.id)" class="btn btn-danger "><i class="far fa-trash-alt"></i></a>
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
		muestraCoordinador(){

			axios.get('/api/coordinadores')
			.then(response=>{
				this.coordinadores = response.data
			})
			.catch(error=>{
				console.log(error)
			})
		},

		borrarCoordinador(id){

			if(confirm("¿confirma eliminar el registro")){
				axios.delete('/api/coordinadores/' + id)
				.then(response=>{
					this.muestraCoordinador()
				})
				.catch(error=>{
					alert(error);
					console.log(error)
				})			
			}
		}
	}
}
</script>