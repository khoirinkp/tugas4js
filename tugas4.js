var adit = 160;
var joko = 170;
var rahmat = 180;

function sortir(adit, joko, rahmat) {
    if (adit > joko && adit > rahmat){
        return "adit yang paling tinggi";
    } else if (joko > adit && joko > rahmat){
        return "joko yang paling tinggi";
    } else if (rahmat > adit && rahmat > joko){
        return "rahmat yang paling tinggi";
    }
    
}

var tinggi = [adit, joko, rahmat];
tinggi.sort(function(a, b){
    return a-b;
});

console.log(sortir(adit, joko, rahmat));
console.log(tinggi);
