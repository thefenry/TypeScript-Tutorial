function genrateRandomID(symbol, length) {
    return symbol + Math.random().toString(36).substr(2, length);
}
//Void doesnt return a value
//Never does not progress. Never returns
function userAlert() {
    throw new Error('Fail');
}
function main() {
    var appComponent = document.getElementById('app');
    setInterval(function () {
        appComponent.innerHTML = genrateRandomID('#', 7);
    }, 1000);
}
