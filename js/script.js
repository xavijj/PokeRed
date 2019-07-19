// Write your code here
var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
	$scope.Pokebola = [];
	for(var M=1; M<=500;M++)
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/" + M
	}).then(function succes(x){
		$scope.Pokebola.push(x);
	})
})
// 01000001 01101110 01100100 01110010 01100101 00100000 01001111 01110011 01101111 01110010 01101001 01101111