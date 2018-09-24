//rUGDSJQ6ygNJgDewflUlFnfEcjceivwp

const catagoryArray = ['cats', 'dogs', 'birds'];
console.log(catagoryArray);

for(let i = 0; i < catagoryArray.length; i++){
    var newButton = $('<button>');
    newButton.attr('data-name', catagoryArray[i]);
    //newButton.attr('type', button);
    newButton.addClass('btn btn-outline-info')
    newButton.text(catagoryArray[i]).val();
    $('#buttonsArea').append(newButton);
}


function makeButtons(){
    
}