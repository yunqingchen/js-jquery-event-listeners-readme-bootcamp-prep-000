//define functions here

$(document).ready(function(){

function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
});
}
    
function frameIt(){
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $(document).on('keydown', function(key){
    if(key.which == 71){
      alert('G was pressed');
    }
  })
}

function submitIt() {
  
}
