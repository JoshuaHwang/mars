/* ---- USER SHIPPING INPUT ---- */
var free       = document.getElementById('free');
var twenty     = document.getElementById('twenty');
var dashHolder = document.getElementById('dashHolder');

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

var freeButton   = document.getElementById('freeRadio');
var twentyButton = document.getElementById('twentyRadio');

freeButton.addEventListener('click', showFree, false);
twentyButton.addEventListener('click', showTwenty, false);

/* ---- USER PASSENGER INPUT ---- */
var passengers;
var update = document.getElementById('commit');

function passengerData()
{
  passengers = document.getElementById('userPassengers').value;
  var passengerNumber = parseInt(passengers);
  console.log(passengers);
}

update.addEventListener('click', passengerData, false);


/* ---- USER SPACECRAFT INPUT ---- */
var orion        = document.getElementById('orionOrder');
var orionName    = document.getElementById('orionName');
var normandy     = document.getElementById('normandyOrder');
var normandyName = document.getElementById('normandyName');
var oneill       = document.getElementById('oneillOrder');
var oneillName   = document.getElementById('oneillName');

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

var orionButton    = document.getElementById('orionRadio');
var normandyButton = document.getElementById('normandyRadio');
var oneillButton   = document.getElementById('oneillRadio');

orionButton.addEventListener('click', showOrion, false);
normandyButton.addEventListener('click', showNormandy, false);
oneillButton.addEventListener('click', showOneill, false);
