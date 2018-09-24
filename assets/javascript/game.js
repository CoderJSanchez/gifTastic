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
    goGetGif();
}

makeNewButtons();

$('#newGifValue').on('click', function(event){
    event.preventDefault();
    var newGif = $('#gifInput').val();
    console.log(newGif);
    catagoryArray.push(newGif);
    makeNewButtons();
    console.log(catagoryArray);
})

function goGetGif(){


$('.catagoryButton').on('click', function() {
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
            showImage.attr('data-still', returnData[i].images.fixed_height_still.url);
            showImage.attr('data-animate', returnData[i].images.fixed_height.url);
            showImage.attr('data-state', 'still');
            showImage.addClass('gif');

            var rating = $('<p>');
            rating.addClass('col-md-3');
            rating.text(returnData[i].rating);
            //showImage.prepend(rating);
            $('#gifArea').append(showImage, rating);
        }
        $('.gif').on('click', function(){
            var state = $(this).attr('data-state');
        
            if(state === 'still'){
                $(this).attr('src', $(this).attr('data-animate'));
                $(this).attr("data-state", "animate");
            }else{
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
            
        })
    });
});
}



    








