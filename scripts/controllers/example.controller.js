angular.module('MusicExplorer')
  .controller('MusicController', MusicController);

MusicController.$inject=['$http'];
function MusicController($http) {
  console.log("MusicController!");

  var vm = this;


  ////
vm.find = function() {
  console.log(vm.search);
  var myUrl = 'https://api.spotify.com/v1/search?q=' +vm.search+ "&type=artist";
  console.log(myUrl);
  $http({
    method: 'GET',
    url: myUrl
  }).then(function successCallback(response) {
    console.log(response.data);
    vm.artists = response.data.artists.items;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
};


}
