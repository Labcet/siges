<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class coordinador extends Model
{
    use HasFactory;
    protected $fillable = ['nombre','parteno', 'materno', 'direccion', 'dni', 'telefono','email','password','estado';
}
