
document.addEventListener("DOMContentLoaded", function() {
    
})

function fetchRamens() {
    fetch(`http://localhost:3000/ramens`)
    then()
}

// - See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,
//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.
look at `http://localhost:3000`



// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.



// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.
























































// document.addEventListener("DOMContentLoaded", function() {
//     function fetchRamens() {
//         fetch ("http://localhost.3000/ramens")
//         .then ( response => response.json() )
//         .then( data => renderRamens(data))
//     }
//     function renderRamens(ramens) {
//         const ramenMenu = document.getElementById(ramen-menu)

//         ramens.forEach(ramen => {
//             const ramenImage = document.createElement(img)
//             console.log("ramenImage :", ramenImage)
//             console.log()
//         }
//     }
//     fetchRamens()
// })