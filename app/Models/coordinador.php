<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class coordinador extends Model
{
    use HasFactory;
    protected $fillable = ['nombre','paterno', 'materno', 'direccion', 'dni', 'telefono','email','password','estado','oficina_id'];
    public $table = "coordinadores";
}
