function genrateRandonID(){
    return '#' + Math.random().toString(36).substr(2,7);
}

function main(){
    var appComponent = document.getElementById('app');
    setInterval(function(){
        appComponent.innerHTML = genrateRandonID()
    }, 1000)
}