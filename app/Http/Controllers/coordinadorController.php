<?php

namespace App\Http\Controllers;

use App\Models\coordinador;
use Illuminate\Http\Request;

class coordinadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $coordinadores = coordinador::all();
       return response()->json($coordinadores); 
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
        $Coordinador=coordinador::create($request->post());
        return response()->json(['Coordinador'=>$Coordinador]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
            $coordinador = coordinador::find($id);
             return response()->json($coordinador);
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
    public function update(Request $request,$id)
    {
       /* $Coordinador->fill($request->post())->save();
        return response()->json([
        'Coordinador'=>Coordinador
        ]);
        */
            coordinador::where('Id',$id)
             ->update([
                'nombre' => $request->nombre,
                'paterno' => $request->paterno,
                'materno' => $request->materno,
                'direccion' => $request->direccion,
                'dni' => $request->dni,
                'telefono' => $request->telefono,
                'email' => $request->email,
                'password' => $request->password,
                'estado' => $request->estado
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
        $coordinador = coordinador::find($id);
        $coordinador->delete();
        return response()->json([
            'mensaje' => 'eliminado'
        
       ]);
    }
}
