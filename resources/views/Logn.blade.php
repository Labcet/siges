@extends('app')

@section('title','Logn')

@section('content')

<div class="block mx-auto my-5 p-5 bg-white w-1/3 border-gray-200 rounded-lg shadow-lg">

	<h1 class="text-5x1 text center pt-24">Login</h1>
	<form class="mt-4" method="POST" action="">

		@csrf
		
		<input type="email" class="border border-gray-200 rounded-md border-gray-200 w-full text-lg placeholder-gray-900 p-2 my-2 focus:bg-white" placeholder="Email" id="email" name="email">
	
		<input type="password" class="border border-gray-200 rounded-md border-gray-200 w-full text-lg placeholder-gray-900 p-2 my-2 focus:bg-white" placeholder="Password" id="password" name="password">

		@error('message')
		<p class="border border-red-500 rounded-md bg-red-100 w-full text-red-600 p-2 my-2">* {{ $message}} </p>
		@enderror

		<button type="submit" class="rounded-md bg-indigo-500 w-full text-lg text-white font-semibold p-2 my-3 houver:bg-indigo-600">Enviar</button>

	</form>

</div>



@endsection