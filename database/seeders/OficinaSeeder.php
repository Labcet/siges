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
    }
}
