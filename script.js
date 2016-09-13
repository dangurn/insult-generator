//Insult Generator Javascript

var getInsult = (function(){

    var wordBankA = [
        ["Skanky", "Dappy", "Raging", "Dirty", "Filthy", "Greasy", "Grimy", "Sloppy", "Shabby", "Lazy"],
        ["Scatty", "Blathering", "Gobby", "Feeble", "Moronic", "Dreggy", "Cruddy", "Dingy", "Grubby", "Smutty"],
        ["Lobotomised", "Imbecilic", "Incontinent", "Infantile", "Slovenly", "Squalid", "Unsightly", "Delipidated", "Apathetic"]
    ];
    var wordBankB = [
        ["scum", "twit", "crud", "scud", "smudge", "scuz", "sludge", "dust", "lard"],
        ["jizz", "tit", "dick", ],
        ["fuck", "shit", "twat", "wank", "piss"]
    ];
    var wordBankC = ["tard", "lark", "wit", "mite", "lick", "biscuit", "fig", "marshal", "wig", "squidge", "monkey", "gibbon", "whippet", "rabbit", "bucket"];

    function pickRandom(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }
    function intInRange(val, min, max){
        return Math.min(Math.max(Math.round(val),min), max);
    }

    // return a function that generates insults from the words above:
    return function (smart, dirty) {

        smart = intInRange(smart, 0, 2);
        dirty = intInRange(dirty, 0, 2);

        var first  = pickRandom( wordBankA[smart] );
        var second = pickRandom( wordBankB[dirty] );
        var third  = pickRandom( wordBankC );

        return first + " " + second + third;

    };

}());

// wait for the DOM to load before attaching any events:
document.addEventListener("DOMContentLoaded", function(){

    //icon transition class adding:
    document.getElementById("share-button").addEventListener("click", function() {
        var iconContainer = document.getElementById('social-media-icon-container');

        if (iconContainer.className == "container-closed") {
            iconContainer.className = "container-open";
        } else {
            iconContainer.className = "container-closed"
        };
    });

    // attach handler to get an insult and work with the DOM:
    document.getElementById("insult-button").addEventListener("click", function(){

        //Get the smartness and dirtiness values:
        var smartVal = document.getElementById('smart-input').value;
        var dirtyVal = document.getElementById('dirty-input').value;

        //Post insult to the text box:
        document.getElementById('text').textContent = getInsult(smartVal, dirtyVal);

    });

});