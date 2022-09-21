<?php

namespace App\Http\Controllers;

use App\Models\ruta;
use App\Models\User;
use Appm\Models\oficina;
use App\Models\documents;
use Illuminate\Http\Request;

class rutacontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rutas= ruta::all();
       return response()->json($rutas);

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
        $Ruta=ruta::create($request->post());
        
        return response()->json(['Ruta'=>$Ruta]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ruta = ruta::find($id);
        return response()->json($ruta);
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
            ruta::where('Id',$id)
            ->update([
                'documento_id' => $request->documento_id,
                'oficina_id' => $request->oficina_id,
                'descripcion' => $request->descripcion,
                'fecha_ingreso' => $request->fecha_ingreso,
                'hora_ingreso' => $request->hora_ingreso,
                'fecha_salida' => $request->fecha_salida,
                'hora_salida' => $request->hora_salida
            ]);
        //return $request->nombre_oficina;
        return response()->json([
            'mensaje' => 'actualizado'
        ]);
       
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
     }
    public function destroy($id)
    {
        $ruta = ruta::find($id);
        $ruta->delete();
        return response()->json([
            'mensaje' => 'eliminado'
        ]);
    }

    /**
     * public function derive(Request $oficina_id)
    {
  
        if ($oficina_id==1) {
            $oficina_id= oficina::all();
            
        }
        elseif () {
            $oficina_id =>'2';
        }
         return response()->json($rutas);
    }
    **/
       
}
