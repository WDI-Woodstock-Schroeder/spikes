// jQuery Ajax Call
var app = app || {};

// get fighter data
app.getFighter = function getFighter(){
  $.ajax({
    method: 'get',
    url: 'http://gateway.marvel.com:80/v1/public/characters?name=thor&orderBy=name&apikey=195de66a5cefd39b309c2eb0ca7463f1',
    dataType: 'json',
    // success: function(data){
      // var fighter = new app.FighterModel(data);
      // var fighterView = new app.FighterView( {model: fighter} );
      // view.render();
    }
  });
};

// // create fighter model with data
// app.FighterModel = function FighterModel(options) {
//   this.options = options || {};
//   this.id = options.results.id;
//   this.name = options.results.name;
//   this.thumbnail = options.results.thumbnail;
// };
//
//
// // render fighter data
// app.FighterView = function FighterView(options) {
//   this.options = options || {};
//   this.model = options.model;
//   this.$el = $("<div>");
//   this.$et.attr('class', 'fighter');
// };
