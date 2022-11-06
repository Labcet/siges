<?php

namespace App\Http\Controllers;

use App\Models\User;
Use App\Models\oficina;
use App\Models\Permission;
use App\Models\documents;
use App\Models\ruta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use Carbon\Carbon;

class UserController extends Controller
{
    
    public function barchart(){
       
        /*$rutas=ruta::select(DB::raw("COUNT(*) as count"))
        ->whereYear('created_at', date('Y'))
        ->groupBy(DB::raw("Month(created_at)"))
        ->pluck('count');*/

        $septiembre = documents::whereMonth('fecha_salida', 9)
                        ->where([['oficina_actual', '=', 6], ['ciclo', '=', 3]])
                        ->count();

        
        $data =[
            'labels'  => ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'],
            'datasets' => [
                [
                  'backgroundColor' => ['#013461', '#FF287A','#019500', '#FE9A2E','#298A08','#FA58D0','#FF0000','#2EFEF7','#610B21','#FFFF00','#01DF01','#FF0040'],
                  'data' => [10,48,68,27,48,96,57,84, $septiembre,58,69,47]
                ],
            ]
        ];
        return response()->json($data);
       // return view ('MostrarCuadro', compact('datas'));
    }


    public function dashboard(){
    return view('dashboard');

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth('api')->user();

        if($user->hasRole('administrador')){
            $usuarios = User::all();
            
        } else {
            $usuarios = User::where('id',$user->id)->get();
        }

        return response()->json($usuarios);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
   
    public function create()
    {

       
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
       
        $idLastUser = User::select('id')->orderBy('id','desc')->first();

        $assignPermission = Permission::create([
            'role_id' => 2,
            'model_type' => 'App\Models\User',
            'model_id' => $idLastUser->id

        ]);
        
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
        User::where('Id',$id)
         ->update([
            'nombre' => $request->nombre,
            'paterno' => $request->paterno,
            'materno' => $request->materno,
            'direccion' => $request->direccion,
            'dni' => $request->dni,
            'telefono' => $request->telefono,
            'estado' => $request->estado,
            'oficina_id'=>$request->oficina_id
        ]);
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

    public function consultaOficina(){

        /*$offic = oficina::all();
        return response()->json(['offic'=>$offic]);*/
        return 'hola';
    }
}
