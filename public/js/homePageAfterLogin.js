$.ajax({
    url: "/api/services",
        method:"GET"
  })
    .done(function( data ) {
var container = document.getElementById("carousel")
        data.forEach(obj => {

            var createDiv = document.createElement("div") 
            createDiv.setAttribute("class","col-md-4")
            var html = `
              <div class="card" href="">
                  <div class="card-img-top card-img-top-250">
                      <img class="img-fluid" src="`+obj.img+`" alt="Carousel 1">
                  </div>
                  <div class="card-block p-t-2">
                      <h3 class=" text-wide p-b-2">`+obj.title+`</h3>
                      <h6 class="small">
                          <a>`+obj.desc+`</a>
                          <hr>
                          <div>
                          <a>(350) Reviews</a>
                        </div>
                      </h6>
                      <hr>
                  </div>
              </div>`
              createDiv.innerHTML=html
              container.append(createDiv)

        })
    });


    