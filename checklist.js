'use strict';

var app = angular.module('checklist',['ui.bootstrap','ngAnimate','LocalStorageModule']);

/*utilisation de fastclick mais pour l'instant, cela ne semble pas faire de difference */

app.run(function() {  
FastClick.attach(document.body);
});


/* Préfix pour les objets mis dans localstorage pour éviter d'empiéter sur des objets stockées par d'autres applications. */
app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('vb');
}]);


app.controller('ckController', ['$scope', '$window','localStorageService', function ($scope,$window,localStorageService) {
    
// Définition des valeurs initiales des checklists du bagage à main
    var handMandatoryInit = [
        {name:"Doudou", checked:false},
        {name:"Tétines", checked:false},
        {name:"Biberons", checked:false},
        {name:"Eau (en bouteille et/ou dans les biberons)", checked:false},
        {name:"Dosette de lait en poudre (+ céréales)", checked:false},
        {name:"Nourriture", checked:false},
        {name:"Lange de coton (ou lingette de débarbouillage)", checked:false},
        {name:"Paquet de mouchoir", checked:false},
        {name:"Bavoirs", checked:false},
        {name:"Couches", checked:false},
        {name:"Lingettes", checked:false},
        {name:"Tenue de rechange", checked:false},
        {name:"Tapis à langer", checked:false}
    ];
    
    var handOthersInit = [
        {name:"Petite trousse de pharmacie", checked:false},
        {name:"Vêtements chaud supplémentaires", checked:false},
        {name:"Couverture, grand foulard ou paréo", checked:false},
        {name:"Brumisateur d'eau", checked:false},
        {name:"Musique (comptines et berceuses)", checked:false},
        {name:"Jouets", checked:false},
        {name:"Bonne humeur en barre ;-)", checked:false}
    ]; 
    
    
 /*Création des objets checklists bagage à main dans le scope. On commence par regarder si l'objet existe déjà en local storage. Sinon on l'initialise avec les valeurs par défaut plus haut. Puis avec $watch on s'assure que local Storage reste synchro avec la valeur du scope qui peut varier en fonction des modifications de l'utilisateur.  */  
    
 // handMandatory Init and Sync   
    var handMandatoryInStore = localStorageService.get('handMandatory');
    
   $scope.handMandatory = handMandatoryInStore || angular.copy(handMandatoryInit);

    
     $scope.$watch('handMandatory', function () {
  localStorageService.set('handMandatory', $scope.handMandatory);
}, true);
    

// handOthers Init and Sync
    
    var handOthersInStore = localStorageService.get('handOthers');
    
    $scope.handOthers = handOthersInStore || angular.copy(handOthersInit);
    
    $scope.$watch('handOthers', function () {
  localStorageService.set('handOthers', $scope.handOthers);
}, true);



// Définition des valeurs par défaut des checklists du bagage principal
    
    var luggageClothesInit = [
        {name:"Bob, casquette, chapeau ou bonnet ", checked:false},
        {name:"Lunettes de soleil", checked:false},
        {name:"Hauts (tee-shirt, chemise...)", checked:false},
        {name:"Manteau", checked:false},
        {name:"Bodies, culottes ou caleçons", checked:false},
        {name:"Maillots de bain", checked:false},
        {name:"Bas (pantalon, ceinture, robe...)", checked:false},
        {name:"Chaussettes", checked:false},
        {name:"Chaussures", checked:false},
        {name:"Gigoteuse", checked:false},
        {name:"Pyjama", checked:false},
        {name:"Combinaison de ski", checked:false},
    ];
    
    var luggageHealthInit = [
        {name:"Trousse de toilette", checked:false},
        {name:"Shampoing et savon", checked:false},
        {name:"Brosse à dent et dentifrice", checked:false},
        {name:"Crème visage et corps", checked:false},
        {name:"Crème pour les fesses rouges", checked:false},
        {name:"Crème solaire", checked:false},
        {name:"Antimoustique", checked:false}
    ]; 
    
    var luggageFoodInit = [
        {name:"Lait en poudre", checked:false},
        {name:"Biberons", checked:false},
        {name:"Goupillon", checked:false},
        {name:"Pots ou plats préparés", checked:false},
        {name:"Lange de coton ou lingettes débarbouillantes", checked:false},
        {name:"Bavoirs", checked:false}

    ];
    
    var luggagePlayInit = [
        {name:"Doudous et tétines supplémentaires", checked:false},
        {name:"Lectures", checked:false},
        {name:"Mobile de voyage", checked:false},
        {name:"Peluches", checked:false},
        {name:"Jeux pour le bain", checked:false},
        {name:"Souffleur de bulles de savon", checked:false},
        {name:"Ballon", checked:false}
    ];
    
     var luggageStuffInit = [
        {name:"Poussette hamac, cosy ou nacelle", checked:false},
        {name:"Porte-bébé", checked:false},
        {name:"Siège-auto", checked:false},
        {name:"Pare-soleil voiture", checked:false},
        {name:"Lit pliant (+ drap house et couverture)", checked:false},
        {name:"Veilleuse", checked:false},
        {name:"Baby phone", checked:false},
        {name:"Moustiquaire", checked:false},
        {name:"BabyCook", checked:false},
        {name:"Siège d'appoint pour manger", checked:false},
        {name:"Baignoire gonflable", checked:false},
        {name:"Transat de bain pliant", checked:false},
        {name:"Serviette de bain", checked:false},
        {name:"Brassards ou gilets de sauvetage", checked:false},
         {name:"Couches piscine", checked:false},
        {name:"Equipements et affaires de plage", checked:false},
        {name:"Equipements pour sécuriser votre logement de vacances", checked:false},
        {name:"Equipements à roues pour bébé (trotinnette, draisienne...)", checked:false}
    ];

    
 // luggageClothes Init and Sync   
    var luggageClothesInStore = localStorageService.get('luggageClothes');
    
   $scope.luggageClothes = luggageClothesInStore || angular.copy(luggageClothesInit);

    
     $scope.$watch('luggageClothes', function () {
  localStorageService.set('luggageClothes', $scope.luggageClothes);
}, true);
    
// luggageHealth
    
    var luggageHealthInStore = localStorageService.get('luggageHealth');
    
   $scope.luggageHealth = luggageHealthInStore || angular.copy(luggageHealthInit);

    
     $scope.$watch('luggageHealth', function () {
  localStorageService.set('luggageHealth', $scope.luggageHealth);
}, true);

//luggageFood
 
     var luggageFoodInStore = localStorageService.get('luggageFood');
    
   $scope.luggageFood = luggageFoodInStore || angular.copy(luggageFoodInit);

    
     $scope.$watch('luggageFood', function () {
  localStorageService.set('luggageFood', $scope.luggageFood);
}, true);

// luggagePlay

    var luggagePlayInStore = localStorageService.get('luggagePlay');
    
   $scope.luggagePlay = luggagePlayInStore || angular.copy(luggagePlayInit);

    
     $scope.$watch('luggagePlay', function () {
  localStorageService.set('luggagePlay', $scope.luggagePlay);
}, true);

//lugageStuff
   
 var luggageStuffInStore = localStorageService.get('luggageStuff');
    
   $scope.luggageStuff = luggageStuffInStore || angular.copy(luggageStuffInit);

    
     $scope.$watch('luggageStuff', function () {
  localStorageService.set('luggageStuff', $scope.luggageStuff);
}, true);   
    
 // Réinitialiser
    
    $scope.formReset = function(){
        
        $scope.handMandatory = angular.copy(handMandatoryInit);
        $scope.handOthers = angular.copy(handOthersInit);

        
        $scope.luggageClothes = angular.copy(luggageClothesInit);
        $scope.luggageHealth = angular.copy(luggageHealthInit);
        $scope.luggageFood = angular.copy(luggageFoodInit);
        $scope.luggagePlay = angular.copy(luggagePlayInit);
        $scope.luggageStuff = angular.copy(luggageStuffInit);
       
        
    if ($window.innerWidth <=780){
    $scope.status.open1 = false;
    $scope.status.open2 = false;
    $scope.status.open3 = false;
    $scope.status.open4 = false;
    $scope.status.open5 = false;
    $scope.status.open6 = false;
    $scope.status.open7 = false;
    $window.scrollTo(0,0);
    }
    else {
    $scope.status.open1 = true;
    $scope.status.open2 = true;
    $scope.status.open3 = true;
    $scope.status.open4 = true;
    $scope.status.open5 = true;
    $scope.status.open6 = true;
    $scope.status.open7 = true;
    $window.scrollTo(0,0);
    }
        
    };
  
// countChecked function
    $scope.countChecked = function(ckList){
        var count = 0;
    angular.forEach($scope[ckList], function(item) {
        count += item.checked ? 1 : 0;
      });
      return count;    
        
    };
    
    
  // uncheck function 
    $scope.uncheck = function(){
        var tab = ["handMandatory","handOthers","luggageClothes","luggageHealth","luggageFood","luggagePlay","luggageStuff"];
    
        tab.forEach(function(entry){
          angular.forEach($scope[entry], function(item) {
            item.checked = false;
            });   
      })
    };

// paramétrage initiale de l'accordéon : option un seul pane ouvert en même temps est désactivé + l'accordéon est fermé sur smartphone (valeur par défault) et ouvert sur des écrans de tablette ou plus grands (plus de 780px de largeur)
$scope.oneAtATime = false;

if ($window.innerWidth <=780){
        $scope.status = {
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            open6: false,
            open7: false
        };
    }
else  {
    $scope.status = {
        open1: true,
        open2: true,
        open3: true,
        open4: true,
        open5: true,
        open6: true,
        open7: true
    };
}
 
    
/* La Fonction removeItem prend $index de ng-repeat et le nom d'une checklist en paramètre  */
$scope.removeItem = function (x, ckList) {
        $scope.errortext = "";
        $scope[ckList].splice(x, 1); 
   
    };
    
/* Print Function */
$scope.printPage = function(){
    $window.print();
    
    };
    
}]);



/*On a besoin d'un nouveau scope de controller ici pour la function addItem car les accordéons créent des scopes sous le scope de ckController et la variable inputText ne se retrouve donc pas disponible au niveau du scope du ckController. Par contre, par "prototypical inheritence, le scope de ce nouveau controller a bien accès aux objets définis dans les scopes au dessus-de lui et jusqu'au rootscope. */

app.controller('addItem', ['$scope', function ($scope) {    
  
  $scope.inputText = '';
    
  $scope.addItem = function(ckList){
     $scope[ckList].push({name:$scope.inputText, checked:false});
     $scope.inputText = '';
    };
    
    }
]);