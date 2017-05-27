//Insult Generator Javascript

//Generate insult:

function getInsult () {

    //Get the words:
     var wordBankA = [
        ["Skanky", "Dappy", "Raging", "Dirty", "Filthy", "Greasy", "Grimy", "Sloppy", "Shabby", "Lazy"],
        ["Scatty", "Blathering", "Gobby", "Feeble", "Moronic", "Dreggy", "Dingy", "Grubby", "Smutty", "Inbred", "Knuckle-dragging", "Perverted", "Callous", "Delusional"],
        ["Lobotomised", "Imbecilic", "Incontinent", "Infantile", "Slovenly", "Squalid", "Unsightly", "Delipidated", "Apathetic", "Platitudinous", "Languorous", "Lackadaisical", "Irredeemable"]
    ];
    var wordBankB = [
        ["scum", "twit", "scud", "smudge", "scuz", "sludge", "dust", "lard", "swamp", "fish", "waste", "grime", "muck", "smut", "slush", "glop", "sleaze"],
        ["jizz", "tit", "dick", "spunk", "turd", "arse", "knob", "cock"],
        ["fuck", "shit", "twat", "wank", "piss", "shite", "prick"]
    ];
    var wordBankC = ["tard", "lark", "wit", "mite", "hawk", "biscuit", "fig", "marshal", "wig", "squidge", "monkey", "gibbon", "whippet", "rabbit", "bucket", "thistle"];

    //Get the smartness and rudeness values:
    var smartVal = document.getElementById('smart-input').value;
    var rudeVal = document.getElementById('rude-input').value;

    //Generate word arrays based on these:
    var insultArrays = [wordBankA[smartVal], wordBankB[rudeVal], wordBankC];

    //Generate random words from arrays:
    var finalPhrase = [];
    for (i = 0; i < insultArrays.length; i++) {
        var currentArray = insultArrays[i];
        var word = currentArray[Math.floor(Math.random() * currentArray.length)];
        finalPhrase.push(word);
    };
    
    //Post them to the text box:
    document.getElementById('text').textContent = finalPhrase[0] + " " + finalPhrase[1] + finalPhrase[2];

};


//Control social media buttons:

function toggleIcons() {
    var iconContainer = document.getElementById('social-media-icon-container');

    if (iconContainer.className == "container-closed") {
        iconContainer.className = "container-open";
    } else {
        iconContainer.className = "container-closed"
    };
};


//Copy to clipboard function:

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
    console.error('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

//And the actual copy bit:
function copyToClipboard() {
    var text = document.getElementById("text");
    copyTextToClipboard(text.textContent);
}
