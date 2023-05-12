module.exports = function reverse(n) {
    if(n<0){
        n*=-1;
    }
    return Number(String(n).split("").reverse().join(""));
};

function a(n) {
    if(n<0){
        n*=-1;
    }
    return Number(String(n).split("").reverse().join(""));

}

console.log(a(-256));
