<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRutasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rutas', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('documento_id')->references('id') ->on('documentos');
            $table->foreignId('oficina_id')->references('id') ->on('oficinas');
            $table->foreignId('coordinadores_id')->references('id') ->on('cooridnadores');
            $table->text('descripción');
            $table->date('created_at');
            $table->time('sunrise', $precision = 0);
            $table->id_oficina_origen();
            $table->id_oficina_destino();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rutas');
    }
}
