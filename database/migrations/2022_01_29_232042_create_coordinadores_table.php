<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoordinadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('coordinadores', function (Blueprint $table) {
            $table->id();
            $table->foreignId('oficina_id')->references('id') ->on('oficinas');
            $table->string('nombre');
            $table->string('apellidos');
            $table->string('direccion');
            $table->double('DNI', 8, 2);
            $table->double('telefono', 9,2);
            $table->string('email')->unique();
            $table->timestamp('email_verified_ad')->nullable();
            $table->string('password');
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
        Schema::dropIfExists('coordinadores');
    }
}
