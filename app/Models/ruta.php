<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ruta extends Model
{
    use HasFactory;
        protected $fillable = ['documento_id','oficina_id', 'descripcion','fecha_ingreso', 'hora_ingreso','fecha_salida','hora_salida'];
        public $table = "rutas";
}
