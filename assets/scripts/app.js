
function getElem(id) {
    return document.getElementById(id);
}


function submitPlayer(){
    var currentPlayer = {
        name: getElem("playerName").value,
        position: getElem("position").value,
        number: getElem("playerNumber").value
    }
    // push to current player
    drawPlayerOnScreen(currentPlayer)
}
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
    <button>Remove</button>
    </div>`
    rosterElem.append(playerElem);    
}