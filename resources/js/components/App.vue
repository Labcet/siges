<template>
	<main>
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">MDAI</a>
				<!--<p>{{user()}}</p>-->

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  		<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
						  <!--<router-link exact-active-class="active" to="/"class="nav-link active" aria-current="page">Inicio </router-link>-->
						  <!--<a href="{{ route('dashboard')}}" class="font-bold py-3 px-4 rounded-md bg-red-500 hover:bg-red-600">Inicio</a>-->
						</li>
						<li class="nav-item">
						  	<router-link exact-active-class="active" to="/Dashboard/mostrarOficinas" class="nav-link">Oficinas </router-link>
						</li>

						<li class="nav-item">
						  	<router-link exact-active-class="active" to="/Dashboard/mostrarCoordinadores" class="nav-link">Coordinadores </router-link>
						</li>

						<li class="nav-item">
						  	<router-link exact-active-class="active" to="/Dashboard/mostrarDocumentos" class="nav-link">Documentos </router-link>
						</li>
						<div v-if="is('administrador')">
							<li class="nav-item">
								<router-link exact-active-class="active" to="/Dashboard/mostrarRutas" class="nav-link">Rutas </router-link>
							</li>
						</div>
					</ul>
					<form class="d-flex">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
		<div>
		  	<router-view></router-view>
		</div>
	</main>
</template>

<script>

    export default{
    }
</script>