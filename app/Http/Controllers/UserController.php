<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $usuarios = User::all();
       return response()->json($usuarios); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Usuario = User::create($request->post());
        return response()->json(['Usuario'=>$Usuario]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $usuario = User::find($id);
        return response()->json($usuario);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       /* $Coordinador->fill($request->post())->save();
        return response()->json([
        'Coordinador'=>Coordinador
        ]);
        */
            User::where('Id',$id)
             ->update([
                'nombre' => $request->nombre,
                'paterno' => $request->paterno,
                'materno' => $request->materno,
                'direccion' => $request->direccion,
                'dni' => $request->dni,
                'telefono' => $request->telefono,
                'role' => $request->role,
                'estado' => $request->estado,
                'oficina_id'=>$request->oficina_id
            ]);
        //return $request->nombre_oficina;
        return response()->json([
            'mensaje' => 'actualizado'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usuario = User::find($id);
        $usuario->delete();
        return response()->json([
            
            'mensaje' => 'eliminado'
       ]);
    }
}
