<template>

<div class="container">

<div class="row">
   <div class="col-lg-12 mb-4">
      <router-link :to='{name:"crearRutas"}'class="btn btn-success">Crear</router-link>
   </div>
<div class="col-12">
	<div class ="table-responsive">
		<table class="table table-bordered">
			<thead class="bg-primary text-white">
			
			 <tr>
			 	<th> ID</th>
			 	<th> documento_id </th>
			 	<th> oficina_id </th>
			 	<th> descripción </th>
			 	<th> fecha_ingreso </th>
			 	<th> hora_ingreso </th>
			 	<th> fecha_salida </th>
			 	<th> hora_salida </th>
			 	<th> acciones </th>
			 </tr>
			  </thead>
			<tbody>
			   <tr v-for="ruta in rutas" :key="ruta.id">
			      <td>{{ruta.id}}</td>
			      <td>{{ruta.documento_id}}</td>
			      <td>{{ruta.oficina_id}}</td>
			      <td>{{ruta.descripción}}</td>
			      <td>{{ruta.fecha_ingreso}}</td>
			      <td>{{ruta.hora_ingreso}}</td>
			      <td>{{ruta.fecha_salida}}</td>
			      <td>{{ruta.hora_salida}}</td>
			      <td> 
			      	<router-link :to='{name:"editarRutas", params:{id:ruta.id}}' class="btn btn-info"><i class="bi bi-pencil-square"></i></router-link>
			      	<a type="button" @click="borrarRutas(ruta.id)" class="btn btn-danger "><i class="bi bi-trash"></i></a>
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
	name:"rutas",
	data(){
		return{
			 rutas:[]
		}
	},
	mounted(){
		this.mostrarRutas()
	},
	methods:{

		mostrarRutas(){
			axios.get('/api/rutas')
			.then(response=>{
				this.rutas = response.data
			})
			.catch(error=>{
				console.log(error)
			})
		},

		borrarRutas(id){
			if(confirm("¿confirma eliminar el registro?")){
				axios.delete('/api/rutas/' + id)
				.then(response=>{
					this.mostrarRutas()
				})
				.catch(error=>{
					console.log(error)
				})
			}
		}
	}
}
</script>