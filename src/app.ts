var symbol:string = '#';
var length:number = 7; //We are using type annotation syntax

function genrateRandonID(){
    return symbol + Math.random().toString(36).substr(2,length);
}

function main(){
    var appComponent = document.getElementById('app');
    setInterval(function(){
        appComponent.innerHTML = genrateRandonID()
    }, 1000)
}