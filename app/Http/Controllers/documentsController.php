<?php

namespace App\Http\Controllers;

use App\Models\documents;
use App\Models\User;
use App\Models\oficina;
use App\Models\ruta;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Auth;      
//use Illuminate\Support\Facades\Auth;

class documentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       /*$documentos = documents::all();
       return response()->json($documentos);*/

        /*$user = auth('api')->user();

        if($user->hasRole('administrador')){
            $documentos = documents::all();
            
        } else {
            $documentos = documents::where('user_id',$user->id)->get();
        }

        return response()->json($documentos);*/
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
        
        $user_data = User::where('id',$request->user_id)->get();
        
        $date = Carbon::now();

        ruta::create([
            'documento_id'=> $idLastdocuments->id,
            'oficina_id' => $user_data[0]->oficina_id,
            'descripcion' => 'descripcion',
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
                'doc_adjunto' => $request->doc_adjunto,
                'oficina_actual' => $request->oficina_actual 
        ]);
        return response()->json([
            'mensaje' => 'actualizado'
        ]);
    
    }

    public function destroy($id)
    {
        $ruta = ruta::find($id);
        $ruta->delete();
        $documents = documents::find($id);
        $documents->delete();
        return response()->json([
            'mensaje' => 'eliminado'
        ]);
    }

    public function showDocuments($id)
    {

        //$userData = User::where('id', $id)->get();

        if($id == 1){

            $documentos = documents::all();
            
        } else {

            $documentos = documents::where('user_id',$id)->orwhere('user_id_destino',$id)->get();
        }

        return response()->json($documentos);
    }


    public function derivarDoc($id)
    {
  
        //$idLastdocuments=documents::select('id')->orderBy('id','desc')->first();
        $documentData = documents::where('id', $id)->get();
        
        $userData = User::where('id',$documentData[0]->user_id)->get();
        
        $date = Carbon::now();

        //$cicloUpdate = 1;

        if($documentData[0]->oficina_actual == $userData[0]->oficina_id)
        {

            $idOficinaFlujo = 2;
        } else if($documentData[0]->oficina_actual == 2){


            $idOficinaFlujo = 3;
        } else if($documentData[0]->oficina_actual == 3){

            if($documentData[0]->ciclo == 1){

                $idOficinaFlujo = 4;
            } else if($documentData[0]->ciclo == 2){

                $idOficinaFlujo = $userData[0]->oficina_id;
                //$cicloUpdate = 3;
                documents::where('id',$id)
                    ->update([
                        'ciclo' => 3
                    ]);
            } else{

                $idOficinaFlujo = 5;
            }
            
        } else if($documentData[0]->oficina_actual == 4){

            $idOficinaFlujo = 2;
            if($documentData[0]->ciclo == 1){
                documents::where('id',$id)
                    ->update([
                        'ciclo' => 2
                    ]);
                //$cicloUpdate = 2;
            }
        } else if($documentData[0]->oficina_actual == 5){

            $idOficinaFlujo = 6;
        }

        ruta::create([

            'documento_id'=> $id,
            'oficina_id' => $idOficinaFlujo,
            'descripcion' => 'Descripcion',
            'fecha_ingreso' => $date->format('y-m-d'),
            'hora_ingreso' => $date->toTimeString(),
            'fecha_salida' => $date->format('y-m-d'),
            'hora_salida' => $date->toTimeString()
        ]);
        
        $userDataDestino = User::where('oficina_id',$idOficinaFlujo)->get();

        documents::where('id',$id)
        ->update([
            //'codigo' => $request->codigo,
            //'prioridad' => $request->prioridad,
            //'estado' => $request->estado,
            //'fecha_ingreso' => $request->fecha_ingreso,
            //'hora_ingreso' => $request->hora_ingreso,
            'fecha_salida' => $date->format('y-m-d'),
            'hora_salida' => $date->toTimeString(),
            //'num_folios' => $request->num_folios,
            //'dni_solicitante' => $request->dni_solicitante,
            //'ruc_solicitante' => $request->ruc_solicitante,
            //'observacion' => $request->observacion,
            //'doc_adjunto' => $request->doc_adjunto,
            'user_id_destino' => $userDataDestino[0]->id,
            'oficina_actual' => $idOficinaFlujo
        ]); 

        return response()->json([
            'mensaje' => 'exito'
        ]);
    }

    public function getUserOficina($id)
    {

        $userData = User::where('id',$id)->get();

        return $userData[0]->oficina_id;
    }
}
