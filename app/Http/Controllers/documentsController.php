<?php

namespace App\Http\Controllers;

use App\Models\documents;
use Illuminate\Http\Request;

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
        return response()->json(['Documentos'=>$Documentos]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(documents $Documentos)
    {
             return response()->json($Documentos);
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
    public function update(Request $request, documents $Documentos)
    {
        $Documentos->fill($request->post())->save();
        return response()->json([
        'Documentos'=>$Documentos
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(documents $Documentos)
    {
       $Documentos->delete();
       return response()->json([
            'mensaje'=>'eliminado'
       ]);
    }
}
