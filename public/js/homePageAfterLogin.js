
$.ajax({
    url: "/api/services",
    method: "GET"
  }).then(result => {
    var container = document.getElementById("containerService");
    container.innerHTML = "";
    result.forEach(obj => {
      console.log(obj);
      var createDiv = document.createElement("a");
      createDiv.setAttribute("class", "card");
      createDiv.setAttribute("style", "width: 18rem;");
      createDiv.setAttribute("onclick", "vendorRedirect(this)");
      createDiv.setAttribute("data-id", obj.id);

      var html =
        `<div class="serviceItem col-md-12">
              <div class="card" href="">
                  <div class="card-img-top card-img-top-250">
                      <img class="img-fluid" src="` +
                      obj.img +
        `" alt="Carousel 1">
                  </div>
                  <div class="card-block p-t-2">
                      <h3 class=" text-wide p-b-2">` +
                      obj.title +
        `</h3>
                      <h6 class="small">
                          <a>` +
                          obj.desc +
        `</a>
                          <hr>
                          <div>
                          <a>(350) Reviews ⭐️⭐️⭐️⭐️</a>
                        </div>
                      </h6>
                      <hr>
                  </div>
              </div>
          </div>`;
      createDiv.innerHTML = html;
      container.append(createDiv);
    });
  });


function searchService() {
  var searchStr = document.getElementById("searchInput").value;

  $.ajax({
    url: "/api/search/" + searchStr,
    method: "GET"
  }).then(result => {
    var container = document.getElementById("containerService");
    container.innerHTML = "";
 
    result.forEach(obj => {
      console.log(obj);
      var createDiv = document.createElement("div");
      createDiv.setAttribute("class", "card");
      createDiv.setAttribute("style", "width: 18rem;");
      var html =
        `<a onclick="redirectVendor(this)data-id="` + obj.vendor_id + `""><div class="serviceItem col-md-12">
              <div class="card" href="">
                  <div class="card-img-top card-img-top-250">
                      <img class="img-fluid" src="` +
                      obj.img +
        `" alt="Carousel 1">
                  </div>
                  <div class="card-block p-t-2">
                      <h3 class=" text-wide p-b-2">` +
                      obj.title +
        `</h3>
                      <h6 class="small">
                          <a>` +
                          obj.desc +
        `</a>
                          <hr>
                          <div>
                          <a>(350) Reviews ⭐️⭐️⭐️⭐️</a>
                        </div>
                      </h6>
                      <hr>
                  </div>
              </div>
          </div><a>`;
      createDiv.innerHTML = html;
      container.append(createDiv);
    });
  });
}

function vendorRedirect(elem){

 var id = elem.getAttribute("data-id")
 console.log(id)
  
  location.replace("/api/services/" + id);

}