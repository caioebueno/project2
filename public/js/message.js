document.getElementById("airSym").addEventListener("click", function(){ 
        // Gets value from user input
        var test = document.getElementById("text").value

        // Gets the parent container for our input message container
        var container = document.getElementById("ourMessage")

        // create a new div for the required input message
        var div = document.createElement("div")

        // Place the new input to the div it belongs to
        var html = `<div class="outgoing-chats-msg">
        <p>`+ test + `</p>
        <span class="time">11:13 PM | May 16 </span>
        </div>
        <div class="outgoing-chats-img">
        <img src="../img/user1.jpg">
        </div>`

        // Placed the new variable into the PARENT div
        div.innerHTML = html

        // Gave classes to the divs we put the messages in
        div.setAttribute("class","outgoing-chats")

       // Appended the new div to the (Parent) Container that holds all the messages  
        container.append(div);
})
