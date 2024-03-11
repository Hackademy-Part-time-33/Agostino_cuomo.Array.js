let Serie = [2, 4, 8, 20, 10, 5];

function Calcolo(array) {
    let calcolo = array.reduce((a, b)=> a+b,0)/array.length;
    console.log(calcolo);
    let minori = array.filter( a => a< calcolo);
    let maggiori = array.filter( a => a> calcolo);
    console.log(minori);
     console.log(minori.length);
     console.log(maggiori.length);
     return calcolo;
}

Calcolo(Serie);