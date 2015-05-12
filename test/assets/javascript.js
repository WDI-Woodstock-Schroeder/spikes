//  OG AJAX CALL:
// $("#black-widow").on("click")(function(e){
//
//   function getFighter(id) {
//     $.ajax({
//       method: 'get',
//       url: 'http://gateway.marvel.com:80/v1/public/characters/" + id + "?apikey=195de66a5cefd39b309c2eb0ca7463f1',
//       dataType: 'json',
//       success: function(data){
//         console.log(data);
//         id = data.data.results[0].id;
//         name = data.data.results[0].name;
//         description = data.data.results[0].description;
//         // path = data.data.results[0].thumbnail.path;
//         // extension = data.data.results[0].thumbnail.extension;
//         // thumbnail = path + "." + extension;
//       }
//     })
//   };
// )};
$(document).ready(function() {

  $(".hero-thumb").on('click', function() {

    var char = $(this).data("character");
    console.log(char)

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/" + char + "?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){
        console.log(data);
        name = data.data.results[0].name;
        description = data.data.results[0].description;
      }
    })

  });


  $(".nemesis-thumb").on('click', function() {

    var char = $(this).data("character");
    console.log(char)

    $.ajax({
      method: 'get',
      url: 'http://gateway.marvel.com:80/v1/public/characters/" + char + "?apikey=195de66a5cefd39b309c2eb0ca7463f1',
      dataType: 'json',
      success: function(data){
        console.log(data);
        name = data.data.results[0].name;
        description = data.data.results[0].description;
      }
    })

    // hide all the heroes
    /*if (heroes and villians are hidden) {
      //move on
    }*/

  });
})
