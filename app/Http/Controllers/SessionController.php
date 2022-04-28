<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SessionController extends Controller
{
    public function create()
    {
        return view('login');
    }

    public function store(Request $request){
        
        if(auth()->attempt(request(['email','password'])) == false){
            return back()->withErrors([
                'mensaje' =>'email o password son incorrectos, intenta otra vez'
            ]);
            //return 'Credenciales Incorrectas';

        }  else {

            return redirect()->route('dashboard');
        }
    
    }
    public function destroy(){
        auth()->logout();
        return redirect()->to('/Login');
    }
}
