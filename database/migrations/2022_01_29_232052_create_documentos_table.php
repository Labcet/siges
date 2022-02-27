<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documentos', function (Blueprint $table) {
            $table->id();
            $table->char('codigo', 8);
            $table->char('prioridad', 1);
            $table->char('estado', 1);
            $table->date('fecha_ingreso');
            $table->time('hora_ingreso');
            $table->date('fecha_salida');
            $table->time('hora_salida');
            $table->double('num_folios');
            $table->char('dni_solicitante', 8);
            $table->char('ruc_solicitante', 11)->nullable();
            $table->text('observacion');
            $table->string('doc_adjunto');
            $table->unsignedBigInteger('coordinador_id');
            $table->foreign('coordinador_id')->references('id') ->on('coordinadores');
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('created_at')->nullable();
          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documentos');
    }
}
