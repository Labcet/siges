<?php

namespace App\Http\Controllers;

use App\Models\documents;
use App\Models\User;
use App\Models\oficina;
use App\Models\ruta;
use Illuminate\Http\Request;
use Carbon\Carbon;

class documentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $documentos = documents::all();
       return response()->json($documentos); 
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
        $Documentos=documents::create($request->post());

        $idLastdocuments=documents::select('id')->orderBy('id','desc')->first();
        
       // $user = auth('api')->user();  

        $idLastoficina=oficina::select('id')->orderBy('id','desc')->first();
        
        $date = Carbon::now();
        ruta::create([
            'documento_id'=> $idLastdocuments->id,
            'oficina_id' => $idLastoficina->id,
        //  'oficina_id'=>$user->oficina_id,
            'descripcion' => 'hola',
            'fecha_ingreso' => $date->format('y-m-d'),
            'hora_ingreso' => $date->toTimeString(),
            'fecha_salida' => $date->format('y-m-d'),
            'hora_salida' => $date->toTimeString()
         ]);

        return response()->json(['Documentos'=>$Documentos]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $documents = documents::find($id);
        return response()->json($documents);
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
       /* $Documentos->fill($request->post())->save();
        return response()->json([
        'Documentos'=>$Documentos
        ]);
        */
            documents::where('Id',$id)
            ->update([
                'codigo' => $request->codigo,
                'prioridad' => $request->prioridad,
                'estado' => $request->estado,
                'fecha_ingreso' => $request->fecha_ingreso,
                'hora_ingreso' => $request->hora_ingreso,
                'fecha_salida' => $request->fecha_salida,
                'hora_salida' => $request->hora_salida,
                'num_folios' => $request->num_folios,
                'dni_solicitante' => $request->dni_solicitante,
                'ruc_solicitante' => $request->ruc_solicitante,
                'observacion' => $request->observacion,
                'doc_adjunto' => $request->doc_adjunto
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
        $documents = documents::find($id);
        $documents->delete();
        return response()->json([
            'mensaje' => 'eliminado'
        ]);
    }
}
