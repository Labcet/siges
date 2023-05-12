<template>
	<main>
		<nav class="navbar navbar-expand-lg navbar-dark bg-success" style="padding: 10px 40px;">
			<div class="container-fluid">
				<a class="navbar-brand" href="#"> MDAI </a>

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  		<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
						  	<router-link exact-active-class="active" to="/Dashboard/mostrarOficinas" class="nav-link"> OFICINAS </router-link>
						</li>

						<li class="nav-item">
						  	<router-link exact-active-class="active" to="/Dashboard/mostrarCoordinadores" class="nav-link">COORDINADORES </router-link>
						</li>

						<li class="nav-item">
						  	<router-link exact-active-class="active" to="/Dashboard/mostrarDocumentos" class="nav-link"> DOCUMENTOS </router-link>
						</li>

						
						<div v-if="is('administrador')">
							<li class="nav-item">
								<router-link exact-active-class="active" to="/Dashboard/mostrarRutas" class="nav-link"> RUTAS </router-link>
							</li>
						</div>
						
						<li class="nav-item">
						  	<router-link exact-active-class="active" to="/Dashboard/MostrarCuadro" class="nav-link"> DASHBOARD </router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<br>
		<div>
		  	<router-view></router-view>
		</div>
	</main>
</template>

<script>

    export default{
    }
</script>