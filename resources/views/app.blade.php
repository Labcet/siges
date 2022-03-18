<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
         
         <link reel="stylescheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

         <link href="{{mix('css/app.css')}} type="text/css reel="stylescheet"/>


    </head>
    <body>

        <div class="container">
            <div class="col-md-4 offset-md-4 mt-5">
                <h1 class="my-3 text center">Iniciar sesion</h1>
                <div class="card-body">
                    <form @submit.prevent="enviar">
                        <div class="form-group">
                            <label for="usuario "> Email</label>
                            <input v-model = "form.email" type="text" name="email" class="form-control" id="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="pass">Contraseña</label>
                            <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Password"> 
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>

    </body>
   
    <!--<script src="{{mix('js/app.js')}}" type="text/javascript"> </script>-->
</html>

