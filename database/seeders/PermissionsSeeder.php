<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;
use App\Models\User;

/* SPATIE PACKAGE*/
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        /* ROLES */

        $administradorRole = Role::create(['name' => 'administrador']);
        $coordinadorRole = Role::create(['name' => 'coordinador']);

        /* PERMISOS PARA OFICINA */

        $crear_oficina = Permission::create(['name' => 'crear oficina']);
        $editar_oficina = Permission::create(['name' => 'editar oficina']);
        $eliminar_oficina = Permission::create(['name' => 'eliminar oficina']);
        $ver_oficina = Permission::create(['name' => 'ver oficina']);

        /* PERMISOS PARA COORDINADOR */

        $crear_coordinador = Permission::create(['name' => 'crear coordinador']);
        $editar_coordinador = Permission::create(['name' => 'editar coordinador']);
        $eliminar_coordinador = Permission::create(['name' => 'eliminar coordinador']);
        $ver_coordinador = Permission::create(['name' => 'ver coordinador']);

        /* PERMISOS PARA DOCUMENTO */

        $crear_documento = Permission::create(['name' => 'crear documento']);
        $editar_documento = Permission::create(['name' => 'editar documento']);
        $eliminar_documento = Permission::create(['name' => 'eliminar documento']);
        $ver_documento = Permission::create(['name' => 'ver documento']);

        /* PERMISOS PARA RUTA */

        $crear_ruta = Permission::create(['name' => 'crear ruta']);
        $editar_ruta = Permission::create(['name' => 'editar ruta']);
        $eliminar_ruta = Permission::create(['name' => 'eliminar ruta']);
        $ver_ruta = Permission::create(['name' => 'ver ruta']);

        /* ASIGNANDO LOS PERMISOS A CADA ROL */

        $permisosAdministrador = collect([$crear_oficina,$editar_oficina,$eliminar_oficina,$ver_oficina,
                                    $crear_coordinador,$editar_coordinador,$eliminar_coordinador,$ver_coordinador,
                                    $crear_documento,$editar_documento,$eliminar_documento,$ver_documento,
                                    $crear_ruta,$editar_ruta,$eliminar_ruta,$ver_ruta]);

        $permisosCoordinador = collect([$ver_oficina,
                                $editar_coordinador,$ver_coordinador,
                                $crear_documento,$editar_documento,$eliminar_documento,$ver_documento,
                                $ver_ruta]);

        $administradorRole->syncPermissions($permisosAdministrador);
        $coordinadorRole->syncPermissions($permisosCoordinador);

        /* ASIGNANDO UN ROL */

        $admin = User::where('id',1)->first();

        $admin->assignRole($administradorRole);
    }
}
