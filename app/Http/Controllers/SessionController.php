<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SessionController extends Controller
{
     public function create()
    {
        return view('Logn');
    }
    public function store(){
        if(auth()->attempt(request(['email','password']))== false){
            return back()->withErrors([
                'mensaje' =>'email o password son incorrectos, intenta otra vez'
            ]);

        }  else {

            if(auth()->user()->role == 'admin'){
                return redirect()->route('admin.index');
            } else{
                return redirect()->to('/');
            }
        }
    
    }
    public function destroy(){
        auth()->logout();
        return redirect()->to('/');
    }
}
