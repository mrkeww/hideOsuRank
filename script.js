
let state = true

//hides the rank section in osu user profiles
function hideRank (){
  if (state == true) {
    let arrHtml = document.getElementsByClassName("profile-detail__stats")
    arrHtml[0].parentNode.removeChild(arrHtml[0])
  }
  
}

setInterval (hideRank, 100)