<template>
	<div class="container" style="padding: 0 50px;">
		<div class="row">
		   	<div class="col-lg-12 mb-4">
		      	<router-link :to='{name:"crearRutas"}' class="btn btn-success">Crear</router-link>
		   	</div>
			<div class="col-12">
				<div class ="table-responsive">
					<table class="table table-bordered">
						<thead class="bg-primary text-white">				
							<tr>
							 	<th> ID</th>
							 	<th> ID Documento</th>
							 	<th> ID Oficina</th>
							 	<th> Fecha Ingreso </th>
							 	<th> Hora Ingreso</th>
							 	<th> Fecha Salida</th>
							 	<th> Hora Salida</th>
							 	<th> Acciones </th>
							</tr>
						 </thead>
						 <tbody>
							   <tr v-for="ruta in rutas" :key="ruta.id">
							      <td>{{ruta.id}}</td>
							      <td>{{ruta.documento_id}}</td>
							      <td>{{ruta.oficina_id}}</td>
							      <td>{{ruta.fecha_ingreso}}</td>
							      <td>{{ruta.hora_ingreso}}</td>
							      <td>{{ruta.fecha_salida}}</td>
							      <td>{{ruta.hora_salida}}</td>
							      <td align="center"> 
							      	<router-link :to='{name:"editarRutas", params:{id:ruta.id}}'> <font-awesome-icon icon="user-edit" /></router-link>
							      	<a type="button" @click="borrarRutas(ruta.id)"> <font-awesome-icon icon="trash-alt" /></a>
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