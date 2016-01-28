
function getElem(id) {
    return document.getElementById(id);
}
var roster = [{
        name: 'placeholder',
    },]
// creates player object from input fields
function submitPlayer() {
    for (var i = 0; i < roster.length; i++) {
        if (roster[i].name !== getElem("playerName").value) {
            var currentPlayer = {
                name: getElem("playerName").value,
                position: getElem("position").value,
                number: getElem("playerNumber").value
            }

        } else {
            alert('player already exist please check roster and try again')
            clearFields()
            return
        }
    }
    // push to current player
    roster.push(currentPlayer)
    drawPlayerOnScreen(currentPlayer)
}
// draws the player card to the screen
function drawPlayerOnScreen(currentPlayer){
    var rosterElem = $('.playerRoster')
    var playerElem = document.createElement('div');
    playerElem.className = 'playerCard';
    playerElem.id = currentPlayer.name;
    
    playerElem.innerHTML = `
    <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="Player Photo here"> \
    <h3>${currentPlayer.name}</h3> 
    <h4>${currentPlayer.position}</h4> 
    <h4>${currentPlayer.number}</h4> 
    <div class="btn-group"> 
    <button onclick="removePlayer(event)">Remove</button>
    </div>`
    rosterElem.append(playerElem);  
    clearFields()  
}
// clears the input fields after creating the player
function clearFields(){
    getElem("playerName").value = ""
    getElem("position").value = ""
    getElem("playerNumber").value = ""
}

function removePlayer (e){
    var elem= $(e.target)
    var currentId = elem.closest('[id]').attr('id')
  
    elem.closest(".playerCard").remove()
    roster.splice($.inArray(currentId, roster),1);
  debugger
   console.log(currentId)
   console.log(roster)
}