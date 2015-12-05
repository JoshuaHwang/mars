/* ---- USER SHIPPING INPUT ---- */
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

/* ---- USER PASSENGER INPUT ---- */
// initialized variables that stores the user input of passengers 
var passengers;
var update = document.getElementById('commit');

// function that takes the user input and turns it into a number
function passengerData()
{
  passengers = document.getElementById('userPassengers').value;
  var passengerNumber = parseInt(passengers);
  console.log(passengers);
}

// event listener that passes the function passengerData to store user input
update.addEventListener('click', passengerData, false);


/* ---- USER SPACECRAFT INPUT ---- */
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

/* ---- SET PRICE BASED ON USER CHOICE OF SPACECRAFT ---- */
// initialized variables of each spacecraft price 
var prices = [
  orionPrice, // $3,000 a ticket
  normandyPrice, // $7,000 a ticket
  oneillPrice, // $10,000 a ticket
];

for (var i = 0; i < 2; ++i)
{
  prices[i].createElement('p');
  var pricesText = document.createTextNode('$3,000');
  prices[i].appendChild(pricesText);
  console.log(prices[i]);
  // prices[i].className = 'hidden';
}


/* ---- SET TOTAL PRICES ---- */
// initialized variables of the total prices
var subtotal;
var tax; // 8%
var totalPrice;





























