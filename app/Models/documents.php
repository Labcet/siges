<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class documents extends Model
{
    use HasFactory;

    protected $fillable = ['codigo','prioridad', 'estado', 'fecha_ingreso','hora_ingreso','fecha_salida','hora_salida','num_folios','dni_solicitante','ruc_solicitante','observacion','doc_adjunto','user_id','user_id_destino', 'oficina_actual','ciclo'];

    public $table = "documentos";
}
