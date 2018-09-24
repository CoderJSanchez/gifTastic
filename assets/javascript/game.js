//rUGDSJQ6ygNJgDewflUlFnfEcjceivwp


///////////////////////////////////////////////////////////////

const catagoryArray = ['cats', 'dogs', 'birds'];
const dropDownArray = ['one', 'two', 'three'];
console.log(catagoryArray);

function newNavItem(item) {
   var mainDropDown = $('<li>');
   mainDropDown.addClass("nav-item dropdown");
   var catagDropDown = $('<a>');
   catagDropDown.addClass("nav-link dropdown-toggle");
   catagDropDown.attr('id', 'navbarDropdown');
   catagDropDown.attr('role', 'button');
   catagDropDown.attr('data-toggle', 'dropdown');
   catagDropDown.attr('aria-haspopup', 'true');
   catagDropDown.attr('aria-expanded', 'false');
   catagDropDown.text(item);
   mainDropDown.append(catagDropDown);
   $('#theDropDown').append(mainDropDown);


   // add a for loop to a new array
   for(let i = 0; i < dropDownArray.length; i++){
    var dropwDownDiv = $('<div>');
   dropwDownDiv.addClass('dropdown-menu');
   dropwDownDiv.attr('aria-labelledby', 'navbarDropdown');
   var dropDownDivButton = $('<button>');
   dropDownDivButton.addClass('dropdown-item');
   dropDownDivButton.text(dropDownArray);
   dropwDownDiv.append(dropDownDivButton);
   catagDropDown.append(dropwDownDiv);
   
   }
   console.log(dropDownArray);
   

}

newNavItem('lizards');



function makeNewButtons() {
    $('#buttonsArea').empty();
    for (let i = 0; i < catagoryArray.length; i++) {
        var newButton = $('<button>');
        newButton.attr('data-name', catagoryArray[i]);
        newButton.addClass('btn btn-outline-info catagoryButton')
        newButton.text(catagoryArray[i]).val();
        $('#buttonsArea').append(newButton);
    }
    goGetGif();
}

makeNewButtons();

$('#newGifValue').on('click', function (event) {
    event.preventDefault();
    var newGif = $('#gifInput').val();
    console.log(newGif);
    catagoryArray.push(newGif);
    makeNewButtons();
    console.log(catagoryArray);
})

function goGetGif() {

    $('.catagoryButton').on('click', function () {
        var searchItem = $(this).attr('data-name');

        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=rUGDSJQ6ygNJgDewflUlFnfEcjceivwp&q='
            + searchItem
            + '&limit=10&offset=0&rating=G&lang=en'

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            var returnData = response.data;
            console.log(response);

            for (var i = 0; i < returnData.length; i++) {
                var dropGifs = $('<div>');
                dropGifs.addClass('col-md-3');
                var showImage = $('<img>');
                showImage.addClass('mb-4');
                showImage.attr('src', returnData[i].images.fixed_height_still.url);
                showImage.attr('data-still', returnData[i].images.fixed_height_still.url);
                showImage.attr('data-animate', returnData[i].images.fixed_height.url);
                showImage.attr('data-state', 'still');
                showImage.addClass('gif');
                dropGifs.append(showImage);

                var rating = $('<p>');
                rating.text('Rating: ' + returnData[i].rating.toUpperCase());
                rating.addClass('mb-0');
                dropGifs.prepend(rating);
                $('#gifArea').append(dropGifs);

            }
            $('.gif').on('click', function () {
                var state = $(this).attr('data-state');

                if (state === 'still') {
                    $(this).attr('src', $(this).attr('data-animate'));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            })
        });
    });
}












