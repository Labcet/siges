<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title') -Laravel App</title>

        <!-- Fonts -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
         
         <link reel="stylescheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

         <link href="{{mix('css/app.css')}} type="text/css reel="stylescheet"/>

         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
    </head>
    <body>

        <nav class="flex py-5 bg-indigo-500 text-white">
            <div class="w-1/2 px-12 mr-auto">
                <p class="text 2x1 font-bold"> mi aplicacion </p>
            </div>

            <ul class="w-1/2 px-16 ml-auto flex justify-end pt-1">
              @if(auth()->check())
              <li class="mx-6">
                    <p class="text-xl"> bienvenido <b>{{auth()->user()->name}}</b></p>
              </li>
              <li>
                <a href="{{ route('Logn.destroy')}}" class="font-bold py-3 px-4 rounded-md bg-red-500 hover:bg-red-600">Log Out</a>
              </li>
            @else
              <li class="mx-5">
                <a href="{{ route('Logn.index')}}" class="font-semibold hover:bg-indigo-700 px-4 rounded-md">Login</a>
              </li>
              <li>
                <a href="{{ route('register.index')}}" class="font-semibold  border-2 border-white py-2 px-4 rounded-md hover:bg-white hover:text-indigo-700">Register</a>
              </li>
            @endif
            </ul>

        </nav>

       @yield('content')

    </body>
   
    <!--<script src="{{mix('js/app.js')}}" type="text/javascript"> </script>-->
</html>

