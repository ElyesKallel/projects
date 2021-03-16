var Feld = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 0]
];
var LochR = 4;
var LochS = 4;
var zaeler = 0;



function schowfeld() {
    for (l = 0; l < 5; l++) {
        for (c = 0; c < 5; c++) {
            stein = Feld[l][c];
            if (stein == 0) continue;
            divSTein = document.getElementById(stein);
            divSTein.style.top = l * 50 + "px";
            divSTein.style.left = c * 50 + "px";
        }
    }
}

function schieben(stein) {
    for (l = 0; l < 5; l++) {
        for (c = 0; c < 5; c++) {
            if (Feld[l][c] == stein) {
                ll = (l - LochR);
                cc = (c - LochS);
            }
        }
    }
    console.log(ll);
    console.log(cc);
    console.log(zaeler);

    if ((ll * cc == 0) && (Math.abs(ll + cc) == 1)) {
        Feld[LochR][LochS] = stein;
        Feld[ll + LochR][cc + LochS] = 0;
        LochR = ll + LochR;
        LochS = cc + LochS;
        zaeler++;
        schowfeld();
    }
    document.getElementById('za').innerHTML = zaeler;
}
/*Drag n Drop */
/*function drag(ev)                                                     
{
    id = ev.target.id;
    ev.dataTransfer.setData("text", id);
}

function allowDrop(ev)
{
    ev.preventDefault();
}

function drop(ev)
{
    ev.preventDefault();
    id = ev.dataTransfer.getData("text");
    schieben(id);
}*/