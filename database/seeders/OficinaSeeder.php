<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class OficinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oficinas')->insert([
            'nombre_oficina' => 'General',
            'nombre_jefe' => 'General Admin',
            'descripcion' => 'Oficina Principal',
            'estado' => 'A',
        ]);
        
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Gerencia Municipal',
            'nombre_jefe' => 'CPC. Wilson Clemente Maldonado',
            'descripcion' => 'Visar o autorizar el requerimiento de bienes o servicios',
            'estado' => 'A',
        ]);

         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Logistica y Patrimonio',
            'nombre_jefe' => 'CPC. Juan Hermogenes Yucra Yanqui',
            'descripcion' => 'Realiza indagación del  mercado, solicita CCP, genera O/C y O/S, notifica al proveedor y genera fase de compromiso',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Oficina de Planificación y Presupuesto',
            'nombre_jefe' => 'CPC. Royer Jesus Rosas Colca',
            'descripcion' => 'Emitir certificación de crédito presupuestario',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Contabilidad',
            'nombre_jefe' => 'CPC. Paulo Cesar Marca Muñiz',
            'descripcion' => 'Generar fase devengado y contabilizar expediente de pago',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Tesoreria',
            'nombre_jefe' => 'Sr. Heber Leque Mamani',
            'descripcion' => 'Generar fase girado y pagado, genera comprobantes de pago',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Almacen Central',
            'nombre_jefe' => 'Sr. Bernardino Carcahusto Chipana',
            'descripcion' => 'Recibe y entrega los bienes a diferentes áreas de la entidad',
            'estado' => 'A',
        ]);

         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Oficina de Secretaria General y Asesoria Legal',
            'nombre_jefe' => 'Abg. Rudy Jhermain ',
            'descripcion' => 'Realizar contratos, emitir opinion legal, formular los proyectos de contratos',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Sub Gerencia de Infraestructura, Desarrollo Urbano y Rural',
            'nombre_jefe' => 'Arq. Raul Rojas Machaca',
            'descripcion' => 'Conduce el proceso de desarrollo en aspectos de ejecución y control de obras públicas y privadas, tambien de proyectos de inversión pública y supervisión',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Sub Gerencia de Desarrollo Social, Económico y Medio Ambiente',
            'nombre_jefe' => 'CPC. Rafael Achahuando Gallardo',
            'descripcion' => 'Promueve el desarrollo económico de los sectores productivos, fomenta la mejora la competitividad de los emprendedores',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Recursos Humanos',
            'nombre_jefe' => 'CPC. Wilson Clemente Maldonado',
            'descripcion' => 'Administrar y ejecutar procesos renumeraciones de acuerdo a los lineamientos y politicas del personal de la Municipalidad',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Oficina de Gestión de Riesgo y Desastres',
            'nombre_jefe' => 'Sr. Rody Baylon Quispe Pinto ',
            'descripcion' => 'Integrar y brindar soporte al centro de operaciones de emergencia',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Comunicaciones e Imagen Institucional',
            'nombre_jefe' => 'Lic. Dina Nilda Aguilar Soncco',
            'descripcion' => 'Organiza, coordina ceremonias, actos oficiales y protocolares de la Municipalidad',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Administración Tributaria y Rentas',
            'nombre_jefe' => 'Sr. Heber Leque Mamani',
            'descripcion' => 'Evalua y ejecuta los procesos del sistema Tributario Municipal',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Maquinaria y Equipo',
            'nombre_jefe' => 'Sr. Yuri Calsina Mamani',
            'descripcion' => 'Programa el uso de maquinarias, equipos, combustibles y otras actividades de intervenciones',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Estudios y Proyectos, Unidad Formuladora',
            'nombre_jefe' => 'Ing. Ubaldo Puño Quispe',
            'descripcion' => 'Planifica, elabora, supervisa estudios de pre inversión y proyectos de inversión',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Programas Sociales',
            'nombre_jefe' => 'Lic. Mili Noemí Sacaca Céspedes ',
            'descripcion' => 'Gestiona y controla el programa vaso de leche e impulsa el tramite para el empadronamiento de clasificación socio económica',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Área Tecnica Municipal',
            'nombre_jefe' => 'Ing. Humberto Jara Zabaleta',
            'descripcion' => 'Ejecuta y Supervisa las acciones de capacitación a usuarios y operadores del servicio de agua y saneamiento rural',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Registro Civil',
            'nombre_jefe' => 'Sr. Artemio Quispe',
            'descripcion' => 'Realiza actividades de registro del estado civil y respectivas estadisticas y otros actividades',
            'estado' => 'A',
        ]);
         DB::table('oficinas')->insert([
            'nombre_oficina' => 'Unidad de Serenazgo Y Seguridad Ciudadana',
            'nombre_jefe' => 'Sr. Nazario Mamani Quispe',
            'descripcion' => 'Planifica y Garantiza la seguridad de la ciudadania',
            'estado' => 'A',
        ]);
    }
}
