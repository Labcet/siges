<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\documents;
use App\Models\ruta;
use App\Models\User;
use App\Models\oficina;
use Illuminate\Support\Facades\DB;

class ChartController extends Controller
{
    
 public function barChart(){
       
        $rutas=ruta::select(DB::raw("COUNT(*) as count"))
        ->whereYear('created_at', '>=', '2022')
        ->groupBy(DB::raw("Month(created_at)"))
        ->pluck('count');

        $months=ruta::select(DB::raw("Month(created_at) as month"))
        ->whereYear('created_at', '>=', '2022')
        ->groupBy(DB::raw("Month(created_at)"))
        ->pluck('month');

        $datas = array(0,0,0,0,0,0,0,0,0,0,0,0);
        foreach ($months as $index => $month)
        {
            $datas[$month] = $rutas[$index];
        }
        return view ('Home', compact('datas'));
 }


}
