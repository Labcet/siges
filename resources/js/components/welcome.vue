<template>
	<main>
		<div class="card mt-4" style="width: 50rem; margin: 0 auto; box-shadow: 10px 10px 30px">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <h1 style="font-size: 30px;">Bienvenido al Sistema de Gestión de Documentos (SIGES)</h1><br>
                        <p style="">Este sistema de gestión de documentos permite organizar los documentos en una estructura jerárquica de carpetas y subcarpetas, lo que facilita la navegación y el acceso rápido a los archivos requeridos.</p><br>
                        <hr><br>
                        <p style="font-weight: bold">Municipalidad Distrital de Alto Inambari</p>
                        <p>Ing. Melania Yanapa Soncco</p>
                        <p>Unidad de Logística y Patrimonio</p>
                    </div>
                    <div class="col">
                        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_w99tucml.json"  background="transparent"  speed="1"  style="width: 400px; height: 400px;"  loop autoplay></lottie-player>
                    </div>
                </div>  
            </div>
        </div>
        <footer align="center" style="position: fixed; width: 100%; bottom: 0px; margin: 20px 0px;">
            <div class="row justify-content-center" style="bottom: 0px">
                <div>
                    <p class="copyright-text" style="color:black;">Copyright &copy; <span id="year"></span> Todos los derechos Reservados.
                    <a href="#">MDAI</a>
                    </p>
                </div>
            </div>
        </footer>
	</main>
</template>

<script>

    export default{
    }
</script>