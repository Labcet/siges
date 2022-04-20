<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'nombre' => 'Admin',
            'paterno' => 'Admin',
            'materno' => 'Admin',
            'direccion' => 'Admin',
            'dni' => '00000000',
            'telefono' => '000000000',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin1234'),
            'role' => 'admin',
            'estado' => 'A',
            'oficina_id' => 1,
        ]);
    }
}
