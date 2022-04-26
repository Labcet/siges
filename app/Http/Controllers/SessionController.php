<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class SessionController extends Controller
{
     public function create()
    {
        return view('Logn');
    }
    public function store(Request $request){
        
        if(auth()->attempt(request(['email','password'])) == false){
            //return back()->withErrors([
            //    'mensaje' =>'email o password son incorrectos, intenta otra vez'
            //]);
            return 'Error';

        }  else {

            if(auth()->user()->role == 'admin'){
                
                return redirect()->route('admin.index');
            }

             else if (auth()->user()->role == 'coordinador'){

                //return 'no admin';
                return redirect()->route('coordinador.index');
            }
        }

        /*$credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect()->route('admin.index');
        }*/
    
    }
    public function destroy(){
        auth()->logout();
        return redirect()->to('/');
    }
}
