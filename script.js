var pokemon = angular.module("pokemon",[]¨);
pokemon.controller("pokecontrol",function($scope,$rootScope,$http) {

	$scope.PokeData = [];

	for(var i=1;i<=800;i++){
		$http({
			method: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/"+i
		}).then(function Datos(p) {
			console.log(p);
			$scope.PokeData.Push(p)
		})
	}
})
