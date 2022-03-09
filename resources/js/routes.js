
const Home = ()=> import('./components/Home.vue');

//componentes para oficina
const Mostrar = ()=> import('./components/oficina/Mostrar.vue');
const Crear = ()=> import('./components/oficina/Crear.vue');
const Editar = ()=> import('./components/oficina/Editar.vue');

//componentes para coordinadores
const Muestra = ()=> import('./components/coordinador/Muestra.vue');
const Crea = ()=> import('./components/coordinador/Crea.vue');
const Edita = ()=> import('./components/coordinador/Edita.vue');

//componentes para documento
const Show = ()=> import('./components/documents/Show.vue');
const Create = ()=> import('./components/documents/Create.vue');
const Edit = ()=> import('./components/documents/Edit.vue');


export const routes = [
{
	name:'home',
	path: '/',
	component:Home
},
{
	name:'mostrarOficinas',
	path: '/oficinas',
	component:Mostrar
},
{
	name:'crearOficinas',
	path: '/crear',
	component:Crear
},
{
	name:'editarOficinas',
	path: '/editar/:id',
	component:Editar
},


{
	name:'muestraCoordinador',
	path: '/coordinadores',
	component:Muestra
},
{
	name:'creaCoordinador',
	path: '/crea',
	component:Crea
},
{
	name:'editaCoordinador',
	path: '/edita/:id',
	component:Edita
},


{
	name:'showDocuments',
	path: '/documentos',
	component:Show
},
{
	name:'createDocuments',
	path: '/create',
	component:Create
},
{
	name:'editDocuments',
	path: '/edit/:id',
	component:Edit
},


];