// initialized variables that stores shipping price
var free = document.getElementById('free');
var twenty = document.getElementById('twenty');
var dashHolder = document.getElementById('dashHolder');

// functions that shows the price of whichever shipping option user picks
function showFree()
{
  free.className = 'sub-price ' + 'show';
  twenty.setAttribute('class', 'hidden');
  dashHolder.setAttribute('class', 'hidden');
}
function showTwenty()
{
  twenty.className = 'sub-price ' + 'show';
  free.setAttribute('class', 'hidden');
  dashHolder.setAttribute('class', 'hidden');
}

// initialize variables that store the shipping buttons
var freeButton = document.getElementById('freeRadio');
var twentyButton = document.getElementById('twentyRadio');

// event listeners that show the price of the shipping option they picked
freeButton.addEventListener('click', showFree, false);
twentyButton.addEventListener('click', showTwenty, false);

// initialized variables that stores the order images and their labels
var orion = document.getElementById('orionOrder');
var orionName = document.getElementById('orionName');
var normandy = document.getElementById('normandyOrder');
var normandyName = document.getElementById('normandyName');
var oneill = document.getElementById('oneillOrder');
var oneillName = document.getElementById('oneillName');

// functions that shows the image and label of the spacecraft the user chooses
function showOrion()
{
  orion.setAttribute('class', 'show');
  orionName.setAttribute('class', 'show');
  normandy.setAttribute('class', 'hidden');
  normandyName.setAttribute('class', 'hidden');
  oneill.setAttribute('class', 'hidden');
  oneillName.setAttribute('class', 'hidden');
}
function showNormandy()
{
  normandy.setAttribute('class', 'show');
  normandyName.setAttribute('class', 'show');
  orion.setAttribute('class', 'hidden');
  orionName.setAttribute('class', 'hidden');
  oneill.setAttribute('class', 'hidden');
  oneillName.setAttribute('class', 'hidden');
}
function showOneill()
{
  oneill.setAttribute('class', 'show');
  oneillName.setAttribute('class', 'show');
  orion.setAttribute('class', 'hidden');
  orionName.setAttribute('class', 'hidden');
  normandy.setAttribute('class', 'hidden');
  normandyName.setAttribute('class', 'hidden');
}

// initialized variables that store the radio buttons for spacecrafts
var orionButton = document.getElementById('orionRadio');
var normandyButton = document.getElementById('normandyRadio');
var oneillButton = document.getElementById('oneillRadio');

// event listeners that show order images and their labels when radio button is clicked
orionButton.addEventListener('click', showOrion, false);
normandyButton.addEventListener('click', showNormandy, false);
oneillButton.addEventListener('click', showOneill, false);
