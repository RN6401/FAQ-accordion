// Select all plus/minus icons from class img_plus (the dot before img_plus means class)
//querySelectorAll return an array
const icons = document.querySelectorAll(".img_plus");

// Go through each icon one by one
icons.forEach((icon)=>{

    // Add a click event listener to each icon
    icon.addEventListener("click", ()=>{

        // When the icon is clicked, Find the answer paragraph that belongs to this icon
        const answer = icon.parentElement.nextElementSibling;

        // If the answer is already visible
        if (answer.style.display === "block") {
            answer.style.display = "none"; //Hide the answer
            icon.src = "assets/images/icon-plus.svg"; //Change to plus icon
        }
        
        // If the answer is not visible
        else{
            answer.style.display = "block"; // Show the answer
            icon.src = "assets/images/icon-minus.svg"; //Change to minus icon
        }

    });
});



