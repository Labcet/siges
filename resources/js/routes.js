
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


export const routes = [

{
	name:'mostrarOficinas',
	path: '/oficinas',
	component:mostrarOficinasComponent
},
{
	name:'crearOficinas',
	path: '/crear',
	component:crearOficinasComponent
},
{
	name:'editarOficinas',
	path: '/editar/:id',
	component:editarOficinasComponent
},


{
	name:'mostrarCoordinadores',
	path: '/coordinadores',
	component:mostrarCoordinadoresComponent
},
{
	name:'crearCoordinadores',
	path: '/crear',
	component:crearCoordinadoresComponent
},
{
	name:'editarCoordinadores',
	path: '/editar/:id',
	component:editarCoordinadoresComponent
},


{
	name:'mostrarDocumentos',
	path: '/documentos',
	component:mostrarDocumentosComponent
},
{
	name:'crearDocumentos',
	path: '/crear',
	component:crearDocumentosComponent
},
{
	name:'editarDocumentos',
	path: '/editar/:id',
	component:editarDocumentosComponent
},

{
	name:'mostrarRutas',
	path: '/rutas',
	component:mostrarRutasComponent
},
{
	name:'crearRutas',
	path: '/crear',
	component:crearRutasComponent
},
{
	name:'editarRutas',
	path: '/editar/:id',
	component:editarRutasComponent
},


];