var cast = {
    "characters": [
        {
            "name": "Jon Snow",
            "shortCode": "jon-snow",
            "actor": "Kit Harrington",
            "house": "Stark",
            "location": "The Wall"
        },

        {
            "name": "Jon Snow",
            "shortCode": "jon-snow",
            "actor": "Kit Harrington",
            "house": "Stark",
            "location": "The Wall"
        }

    ]
}

$(document).ready(function(){
    var characterTemplate = $("#character-template").html();

    var compileCharacterTemplate = Handlebars.complile(characterTemplate);
    $(".character-list-container").html(compiledCharacterTemplate(cast.characters[1]));

});