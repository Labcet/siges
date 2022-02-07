const Home = ()=> import('./components/Home.vue');

//componentes para oficina
const Mostrar = ()=> import('./components/oficina/Mostrar.vue');
const Crear = ()=> import('./components/oficina/Crear.vue');
const Editar = ()=> import('./components/oficina/Editar.vue');

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

];