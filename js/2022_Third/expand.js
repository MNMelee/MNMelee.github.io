// Expanding of player boxes

let currentlyActive = "r0";
const uBoxes = document.querySelectorAll(".u-player");

playerBoxes.forEach(element => {
    let rName = 'r' + element.id;
    element.addEventListener('mouseover', function () {
        if (currentMode) {
            element.style.backgroundColor = "#323232";
        }
        else {
            element.style.backgroundColor = "#BDBDBD";
        }
    });

    element.addEventListener('mouseout', function () {
        if (currentMode) {
            element.style.backgroundColor = "#212121";
        }
        else {
            element.style.backgroundColor = "#E0E0E0";
        }
    });

    element.addEventListener('click', function () {
        if (currentlyActive != rName) {
            resetBox(currentlyActive);
            currentlyActive = rName;
            document.getElementById(rName).innerHTML = insanelyLongArray[element.id];
            if (!currentMode) {
                element.style.backgroundColor = "#E0E0E0";
                let resultTables = document.querySelectorAll(".result-table tr");
                resultTables.forEach(element => {
                    element.style.backgroundColor = "#F5F5F5";
                    element.style.outlineWidth = "2px";
                })
            }
            else {
                element.style.backgroundColor = "#212121";
            }
        }
        else {
            resetBox(rName);
            currentlyActive = "r0";
        }
    });
});

function resetBox (id) {
    document.getElementById(id).innerHTML = "";
    return;
}

// DO NOT LOOK BELOW HERE IT'S A MESS

// IM SERIOUS WHAT ARE YOU DOING

// THIS IS ONLY HERE BECAUSE I DON'T HAVE A BACKEND LOL 

// GITHUB PAGES MAKES IT SO I DON'T HAVE TO PAY ANYTHING THO SOOOOOOOOOOOOOOOOOOOOO









// I WARNED YOU

let ben = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">10</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">Preeminent</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Prescott, WI</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Phob</span></td>
    </tr>
</table>`

let preeminent = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">23</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">Ben</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Prescott, WI</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Goomwave</span></td>
    </tr>
</table>`

let joeydonuts = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">Ben</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">St. Louis Park</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Phob</span></td>
    </tr>
</table>`

let lexor = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">16</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">Preeminent</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Brooklyn Park</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Phob</span></td>
    </tr>
</table>`

let nakamaman = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">5</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">lexor</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Blaine</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Phob</span></td>
    </tr>
</table>`

let dendy = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">13</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">Royal</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Minneapolis</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">OEM</span></td>
    </tr>
</table>`

let royal = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">lexor</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Prescott, WI</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Phob</span></td>
    </tr>
</table>`

let thom = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">14</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">Royal</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Eau Claire, WI</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Phob</span></td>
    </tr>
</table>`

let jim = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">19</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">lexor</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Eden Prarie, MN</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">OEM</span></td>
    </tr>
</table>`

let lamonster = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">DendyPretendy</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Prescott, WI</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Phob</span></td>
    </tr>
</table>`

let rand = `
<table class="result-table">
    <tr>
        <td>&#9733;</td>
        <td>Tournaments Entered: <span class="place">8</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Best Win: <span class="place">Randall Clintsman</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Home Town: <span class="place">Maplewood</span></td>
    </tr>
    <tr>
        <td>&#9733;</td>
        <td>Controller Type: <span class="place">Phob</span></td>
    </tr>
</table>`

let insanelyLongArray = ["", ben, preeminent, joeydonuts, lexor, nakamaman,
dendy, royal, thom, jim, lamonster, rand];