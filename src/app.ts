type ValidSymbol = '#' | '$';

function genrateRandomID(symbol:ValidSymbol, length:number): string {
    return symbol + Math.random().toString(36).substr(2, length);
}

//Void doesnt return a value
//Never does not progress. Never returns
function userAlert(): never{
    throw new Error('Fail');    
}

function main(){
    var appComponent = document.getElementById('app');

    setInterval(function(){
        appComponent.innerHTML = genrateRandomID('#', 7)
    }, 1000);
}