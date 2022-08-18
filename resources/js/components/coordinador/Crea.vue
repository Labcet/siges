<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header"><h4>Crear Coordinador</h4></div>
					
					<div class="card-body">
						<form @submit.prevent="crea">

							<div class="row">
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Nombre </label>
										<input type="text" class="form-control" v-model="coordinador.nombre">
									</div>
								</div>

								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Apellido Paterno </label>
										<input type="text" class="form-control" v-model="coordinador.paterno">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Apellido Materno</label>
										<input type="text" class="form-control" v-model="coordinador.materno">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Direccion </label>
										<input type="text" class="form-control" v-model="coordinador.direccion">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>DNI </label>
										<input type="text" class="form-control" v-model="coordinador.dni">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Telefono</label>
										<input type="text" class="form-control" v-model="coordinador.telefono">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>email </label>
										<input type="email" class="form-control" v-model="coordinador.email">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Password</label>
										<input type="password" class="form-control" v-model="coordinador.password">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Rol </label>
										<input type="text" class="form-control" v-model="coordinador.role">
									</div>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>Estado </label>
										   <select name="estado_id" id="inputEstado_id" class="form-control">
										   <option value=""> seleccione </option>
										   		<option value = ""> A </option> 
										   		<option value = ""> I </option> 
										   </select>

									</div>
								</div>

								<!--<div class="col-12 mb-2">
									<div class="form-group">
									    <label>Oficina </label>
									      <select name="oficina_id" id="inputOficina_id" class="form-control">
										  	 <option value=""> seleccione </option>
										   @foreach ( $offic as $ofi)
										   		<option v-bind= "{{ $ofi['id'] }}">{{ $ofi ['nombre_oficina'] }}</option> 
										   @endforeach
										   </select>
									</div>
								</div>-->
								
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
export default{
	name:"crea-Coordinador",
	data(){
	return{
		coordinador:{
			nombre:"",
			paterno:"",
			materno:"",
			direccion:"",
			dni:"",
			telefono:"",
			email:"",
			password:"",
			role:"",
			estado:"",
			oficina_id:"",
		}

	 }
},

	methods:{
		crea(){

			axios.post('/api/coordinadores', this.coordinador)
			.then(response=>{
				this.$router.push({name:"mostrarCoordinadores"})
			})
			.catch(error=>{
				alert(error);
				console.log(error)
			})
		},
	}
}
</script>