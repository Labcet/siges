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
            $table->increments('id');
            $table->foreignId('coordinadores_id')->references('id') ->on('coordinadores');
            $table->string('prioridad');
            $table->string('estado');
            $table->date('created_at');
            $table->time('sunrise', $precision = 0);
            $table->double('num_folios');
            $table->strig('nombre_solicitante');
            $table->text('observacion');
            $table->string('doc_adjunto');
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
        Schema::dropIfExists('documentos');
    }
}
