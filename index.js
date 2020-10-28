document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  let container = document.getElementById("moves-container")

  document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
      let right = document.createElement("li")
      right.append(container)
      right.textContent = "Right"
      console.log("right works as li")
    }else if(e.key === "ArrowLeft"){
      
    }else if(e.key === "ArrowUp"){
      
    }else if(e.key === "ArrowDown"){
      
    }
  })

  document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
      moveRight()
    }else if(e.key === "ArrowLeft"){
      moveLeft()
    }else if(e.key === "ArrowUp"){
      moveUp()
    }else if(e.key === "ArrowDown"){
      moveDown()
    }
  })

  function moveRight(){
    move("right")
    console.log("moved right")
  }
  function moveLeft(){
    move("left")
    console.log("moved left")
  }
  function moveUp(){
    move("up")
    console.log("moved up")
  }
  function moveDown(){
    move("down")
    console.log("moved down")
  }
  
  // Add an event listener for moves

  // Add an event listener for button clicked

  // Add an event listener for moves clicked on (delete)

  // BONUS: Robot moves every half second, 
  // directions should disappear once robot moves
  // setInterval, setTimeout
});


// var dodger = document.getElementById('dodger');
// function moveDodgerLeft() { 
//   var leftNumbers = dodger.style.left.replace('px', ''); 
//   var left = parseInt(leftNumbers, 10)  
//   if (left > 0) {   
//     dodger.style.left = `${left - 1}px`
//       }}
//       function moveDodgerRight() {  
//         var leftNumbers = dodger.style.left.replace('px', '');
//         var left = parseInt(leftNumbers, 10)
//         if (left > 0) {dodger.style.left = `${left + 1}px`  }}
//         document.addEventListener('keydown', function(e) {
//           if (e.key === "ArrowLeft") {    moveDodgerLeft()  }})
//           document.addEventListener('keydown', function(e) {  
//             if (e.key === "ArrowRight") {   
//               moveDodgerRight()  }}) 