//rUGDSJQ6ygNJgDewflUlFnfEcjceivwp


///////////////////////////////////////////////////////////////

const catagoryArray = ['cats', 'dogs', 'birds'];
console.log(catagoryArray);

function makeNewButtons(){
    $('#buttonsArea').empty();
    for(let i = 0; i < catagoryArray.length; i++){
        var newButton = $('<button>');
        newButton.attr('data-name', catagoryArray[i]);
        newButton.addClass('btn btn-outline-info catagoryButton')
        newButton.text(catagoryArray[i]).val();
        $('#buttonsArea').append(newButton);
    }
}

makeNewButtons();


$('button').on('click', function() {
    var searchItem = $(this).attr('data-name');
    
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=rUGDSJQ6ygNJgDewflUlFnfEcjceivwp&q=' + searchItem +'&limit=10&offset=0&rating=G&lang=en'

    $.ajax({
        url : queryURL,
        method : 'GET'
    }).then(function(response) {
        var returnData = response.data;
        console.log(response);

        for (var i = 0; i < returnData.length; i++) {
            var showImage = $('<img>');
            showImage.addClass('mb-4');
            showImage.attr('src', returnData[i].images.fixed_height_still.url);
            showImage.attr('data-animate', returnData[i].images.fixed_height.url);
            showImage.addClass('gif');

            var rating = $('<p>');
            rating.addClass('col-md-3');
            rating.text(returnData[i].rating);
            //showImage.prepend(rating);
            $('#gifArea').append(showImage, rating);
        }
    });
});


$('#newGifValue').on('click', function(event){
    event.preventDefault();
    var newGif = $('#gifInput').val();
    console.log(newGif);
    catagoryArray.push(newGif);
    makeNewButtons();
})
    







