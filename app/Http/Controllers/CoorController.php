<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CoorController extends Controller
{
    
        public function index()
    {
        
      return redirect()->to('/documentos');
    }

}
