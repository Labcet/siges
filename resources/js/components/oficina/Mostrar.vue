<template>

<div class="container">

	<div class="row">
			<div v-if="is('administrador')">
			   <div class="col-lg-12 mb-4">
			      <router-link :to='{name:"crearOficinas"}'class="btn btn-success">Crear</router-link>
			   </div>
			</div>
		<div class="col-12">
			<div class ="table-responsive">
				<table class="table table-bordered">
						<thead class="bg-primary text-white">
							 <tr>
							 	<th> ID </th>
							 	<th> Nombre Oficina </th>
							 	<th> Jefe de la Oficina</th>
							 	<th> Descripción </th>
							 	<th> Estado </th>
							 	<div v-if="is('administrador')">
							 	<th> Acciones </th>
							 	</div>
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
							   	<div v-if="is('administrador')">
										<router-link :to='{name:"editarOficinas", params:{id:oficina.id}}'><font-awesome-icon icon="user-edit" /></router-link>
								      <a type="button" @click="borrarOficina(oficina.id)"><font-awesome-icon icon="trash-alt" /></a>
							   	</div>
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

			mostrarOficinas(){
				axios.get('/api/oficinas')
				.then(response=>{
					this.oficinas = response.data
				})
				.catch(error=>{
					console.log(error)
				})
			},

			borrarOficina(id){
				if(confirm("¿confirma eliminar el registro?")){
					axios.delete('/api/oficinas/' + id)
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