'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngMessages'
]).
config(function($stateProvider) {

    $stateProvider
        .state({
            name: 'list',
            url: '/list',
            templateUrl: 'PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl as vm'
        })
        .state({
            name: 'createNewPokemon',
            url: '/new',
            templateUrl: 'CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl as vm'
        })
        .state({
            name: 'detail',
            url: '/pokemons/:pokemonId',
            templateUrl: 'PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl as vm'
        })
        .state({
            name: 'detail.edit',
            url: '/edit',
            parent: 'detail',
            templateUrl: 'PokemonDetail/PokemonDetailEdit.html',
            controller: function() {}
        })
        .state({
            name: 'myaccount',
            url: '/myaccount',
            templateUrl: 'MyAccount/MyAccount.html',
            controller: 'MyAccountCtrl as vm'
        });
})
.controller('menuCtrl', function ($scope) {
    $scope.menu = [{
        text: "Список",
        sref: "list"
    }, {
        text: "Добавить нового",
        sref: "createNewPokemon"
    }, {
        text: "Мой кабинет",
        sref: "myaccount"
    }];
});