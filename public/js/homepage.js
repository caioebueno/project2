$(document).ready(function(){
    $.get("/api/homepage", function(data){
        console.log(data);    
    })
})
