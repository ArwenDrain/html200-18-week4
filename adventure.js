// define the size of the game play area
var maxX = 4
var maxY = 4

// User starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// hide the treasure, also with x y values

var treasureX = 3
var treasureY = 2

// flag that controls loop
var treasureFound = false

//get user's name
var name = prompt("Ahoy brave adventurer! Wha' are ye called?")

while(!treasureFound){
  var direction = prompt("Which bearing would ye like t' head? (north, south, east, west)")
  console.log(direction)
  //temp vars only used for checking validity of new user location after move
  var newX
  var newY
  
  // see what new user location should be
  
  // check if new user location is valid
  
  // check if new user location is treasure
  
  if(direction == "north"){
    newX = userX
    newY = userY + 1
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
            
    }else{
      console.log("Beyond these seas be th' edge o' th' world, ye cannot go thar.")
    }
    
  }else if(direction == "east"){
    newX = userX + 1
    newY = userY
    
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
      
    }else{
      console.log("Beyond these seas be th' edge o' th' world, ye cannot go thar.")
    }
    
  }else if(direction == "south"){
    newX = userX
    newY = userY - 1
    
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
      
    }else{
      console.log("Beyond these seas be th' edge o' th' world, ye cannot go thar.")
    }
  }else if(direction == "west"){
    newX = userX - 1
    newY = userY
    
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX
      userY = newY
            
    }else{
      console.log("Beyond these seas be th' edge o' th' world, ye cannot go thar.")
    }
    
  }else {
    console.log("Avast ye, set a real course!")
  }
  // see if user location matches treasure.
  if(userX == treasureX && userY == treasureY){
    treasureFound = true
    console.log("Good work, ye found th' loot!")
  }
}