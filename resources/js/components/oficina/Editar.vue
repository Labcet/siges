<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header">
						<h4>Editar Oficinas</h4>
					</div>

				<div class="card-body">
					< form @submit.prevent="actualizar" >
						<div class="row">
							<div class="col-12 mb-2">
								<div class="form-group">
									<label>Nombre Oficina </label>
										<input type="text" class="form-control" v-model="office.nombre_oficina">
								</div>
							</div>

							<div class=col-12 mb-2">
								<div class="form-group">
									<label>Nombre Jefe </label>
										<input type="text" class="form-control" v-model="office.nombre_jefe">
								</div>
							</div>
							<div class=col-12 mb-2">
								<div class="form-group">
									<label>Descripción </label>
										<input type="text" class="form-control" v-model="office.descripcion">
								</div>
							</div>
							<div class=col-12 mb-2">
								<div class="form-group">
									<label>Estado </label>
										<input type="text" class="form-control" v-model="office.estado">
								</div>
							</div>

							<div class="col-12">
								<button type="submit" class="btn btn-primary"> Guardar</button>
							</div>
						</div>
					< /form>
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
			office:{
				nombre_oficina:"",
				nombre_jefe:"",
				descripcion:"",
				estado:""
			}
		}
	},
	mounted(){
		this.mostrarOficinas()
	},
	methods:{
		async mostrarOficinas(){
			this.axios.get('/api/office/${this.$route.params.ed}')
				.then(response=>{
					const{nombre_oficina, nombre_jefe, descripcion, estado} = response.data
					this.office.nombre_oficina = nombre_oficina,
					this.office.nombre_jefe = nombre_jefe,
					this.office.descripcion = descripcion,
					this.office.estado = estado
				})
				. catch(error=>{
					console.log(error)
				})
		},
		async actualizar(){
			this.axios.put('/api/office/${this.$route.params.id}', this.office)
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