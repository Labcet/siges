<!DOCTYPE html>
<html lang="{{ str_replace('_', '_', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>SIGES</title>

        <!-- Fonts -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
         
         <link reel="stylescheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

        <link href="{{mix('css/app.css')}} type="text/css reel="stylescheet"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
    </head>
    <body>

    	<nav class="flex py-5 bg-indigo-500 text-white">
            <div class="w-1/2 px-12 mr-auto">
                <p class="text 2x1 font-bold"> SISTEMA DE GESTION </p>
            </div>

            <ul class="w-1/2 px-16 ml-auto flex justify-end pt-1">
                @if(auth()->check())
                <li class="mx-6">
                    <p class="text-xl"> bienvenido <b>{{auth()->user()->name}}</b></p>
                </li>
                <li>
                    <a href="{{ route('Logn.destroy')}}" class="font-bold py-3 px-4 rounded-md bg-red-500 hover:bg-red-600">Log Out</a>
                </li>
                @endif
            </ul>
        </nav>
        
		<div class="block mx-auto my-5 p-5 bg-white w-1/3 border-gray-200 rounded-lg shadow-lg">

			<h1 class="text-5x1 text center pt-24">Login</h1>

			<form class="mt-4" method="POST" action="{{ route('Logn.store') }}">
                @csrf
				<input type="email" class="border border-gray-200 rounded-md border-gray-200 w-full text-lg placeholder-gray-900 p-2 my-2 focus:bg-white" placeholder="Email" id="email" name="email">
			
				<input type="password" class="border border-gray-200 rounded-md border-gray-200 w-full text-lg placeholder-gray-900 p-2 my-2 focus:bg-white" placeholder="Password" id="password" name="password">

				@error('message')
				<p class="border border-red-500 rounded-md bg-red-100 w-full text-red-600 p-2 my-2">* {{ $message}} </p>
				@enderror

				<button type="submit" class="rounded-md bg-indigo-500 w-full text-lg text-white font-semibold p-2 my-3 houver:bg-indigo-600">Enviar</button>

			</form>

		</div>
	</body>