const homepage = ()=> import('./components/welcome.vue');

//componentes para oficina
const mostrarOficinasComponent = ()=> import('./components/oficina/Mostrar.vue');
const crearOficinasComponent = ()=> import('./components/oficina/Crear.vue');
const editarOficinasComponent = ()=> import('./components/oficina/Editar.vue');

//componentes para coordinadores
const mostrarCoordinadoresComponent = ()=> import('./components/coordinador/Muestra.vue');
const crearCoordinadoresComponent = ()=> import('./components/coordinador/Crea.vue');
const editarCoordinadoresComponent = ()=> import('./components/coordinador/Edita.vue');

//componentes para documento
const mostrarDocumentosComponent = ()=> import('./components/documents/Show.vue');
const crearDocumentosComponent = ()=> import('./components/documents/Create.vue');
const editarDocumentosComponent = ()=> import('./components/documents/Edit.vue');

//componentes para ruta
const mostrarRutasComponent = ()=> import('./components/ruta/MostrarRuta.vue');
const crearRutasComponent = ()=> import('./components/ruta/CrearRuta.vue');
const editarRutasComponent = ()=> import('./components/ruta/EditarRuta.vue');

//componete para dashboard
const MostrarCuadroComponent = ()=> import('./components/cuadro/mostrar_cuadro.vue');



export const routes = [
{
	name: 'Dashboard',
	path: '/Dashboard',
	component: homepage
},
{
	name:'mostrarOficinas',
	path: '/Dashboard/mostrarOficinas',
	component:mostrarOficinasComponent
},
{
	name:'crearOficinas',
	path: '/Dashboard/crearOficinas',
	component:crearOficinasComponent
},
{
	name:'editarOficinas',
	path: '/Dashboard/editarOficinas/:id',
	component:editarOficinasComponent
},


{
	name:'mostrarCoordinadores',
	path: '/Dashboard/mostrarCoordinadores',
	component:mostrarCoordinadoresComponent
},
{
	name:'crearCoordinadores',
	path: '/Dashboard/crearCoordinadores',
	component:crearCoordinadoresComponent
},
{
	name:'editarCoordinadores',
	path: '/Dashboard/editarCoordinadores/:id',
	component:editarCoordinadoresComponent
},


{
	name:'mostrarDocumentos',
	path: '/Dashboard/mostrarDocumentos',
	component:mostrarDocumentosComponent
},
{
	name:'crearDocumentos',
	path: '/Dashboard/crearDocumentos',
	component:crearDocumentosComponent
},
{
	name:'editarDocumentos',
	path: '/Dashboard/editarDocumentos/:id',
	component:editarDocumentosComponent
},

{
	name:'mostrarRutas',
	path: '/Dashboard/mostrarRutas',
	component:mostrarRutasComponent
},
{
	name:'crearRutas',
	path: '/Dashboard/crearRutas',
	component:crearRutasComponent
},
{
	name:'editarRutas',
	path: '/Dashboard/editarRutas/:id',
	component:editarRutasComponent
},
{
	name:'MostrarCuadro',
	path: '/Dashboard/MostrarCuadro/',
	component:MostrarCuadroComponent
},

];