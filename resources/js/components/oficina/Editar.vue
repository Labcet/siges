<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header">
						<h4>Editar Oficinas</h4>
					</div>
					<div class="card-body">
						<form @submit.prevent="actualizarOficina">
							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Nombre Oficina </label>
											<input type="text" class="form-control" v-model="oficina.nombre_oficina">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Nombre Jefe </label>
											<input type="text" class="form-control" v-model="oficina.nombre_jefe">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Descripción </label>
											<input type="text" class="form-control" v-model="oficina.descripcion">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Estado </label>
										   <select name="estado_id" id="inputEstado_id" class="form-control" v-model="oficina.estado">
										   <option value=""> seleccione </option>
										   		<option value = "A"> A </option> 
										   		<option value = "I"> I </option> 
										   </select>
									</div>
								</div>

								<div class="col-12">
									<button type="submit" class="btn btn-primary"> Guardar</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
export default {
	name:"editar-office",
	data(){
		return{
			oficina:{
				nombre_oficina:"",
				nombre_jefe:"",
				descripcion:"",
				estado:""
			}
		}
	},
	mounted(){
		this.buscarOficina()
	},
	methods:{

		buscarOficina(){
			
			axios.get('/api/oficinas/' + this.$route.params.id)
			.then(response=>{
				const{nombre_oficina, nombre_jefe, descripcion, estado} = response.data
				this.oficina.nombre_oficina = nombre_oficina,
				this.oficina.nombre_jefe = nombre_jefe,
				this.oficina.descripcion = descripcion,
				this.oficina.estado = estado
			})
			.catch(error=>{
				console.log(error)
			})
		},

		actualizarOficina(){

			const data = {
				id: this.$route.params.id,
				oficina: this.oficina 
			};

			axios.put('/api/oficinas/' + this.$route.params.id, this.oficina)
			.then(response=>{
				this.$router.push({
					name:"mostrarOficinas"
				})
			})
			.catch(error=>{
				console.log(error)
			})
		}
	}
}
</script>