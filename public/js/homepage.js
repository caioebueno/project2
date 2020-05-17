$(document).ready(function() {
  $.ajax({
    url: "/api/allreview",
    method: "GET"
  }).done(function(data) {
    console.log(data);
    var appendDiv = $("#reviewDiv");
    var container1 = document.createElement("div");
    container1.setAttribute("class", "row");
    appendDiv.append(container1);
    data.forEach(obj => {
      var div1 = document.createElement("div");
      div1.setAttribute("class", "story");

      var html1 =
        `
        <figure class="story__shape">
<img
    src="/public/img/ballons.png"
    alt="Person"
    class="story__img"
  />
  <figcaption class="story__caption"></figcaption>
</figure>
<div class="story__text">
  <h3 class="heading-tertiary u-margin-bottom-small">
    ` +
        obj.stars +
        `
  </h3>
  <p>
    ` +
        obj.review +
        `
  </p>
</div>
`;
 
      div1.innerHTML = html1;

    
      console.log(div1);

      

      container1.append(div1);
   
    });
  });
});


