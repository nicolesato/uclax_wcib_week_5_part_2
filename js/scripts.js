console.log('Hello from js/scripts.js!');

var customWeapon = document.getElementById('customweapon');
var customNinjutsu = document.getElementById('customninjutsu');
var customAnimal = document.getElementById('customanimal');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var versus = document.querySelector('.versus');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var vs = 'vs.';
var storyText = 'Naruto throws a shuriken at Orochimaru. It misses his face but slices a falling apple in half. Even in spring, the temperature in New York is a chilly 17 fahrenheit, still, not as cold as Orochimaru\'s empty heart. Orochimaru swiftly presses his palms together and sequences mysterious hand signs...what could he be up to? The ground begins to tremble and a ghostly figure begins to emerge. Naruto suddenly realizes - Orochimaru has cast the forbidden reanimation jutsu! And it\'s no other than :insertY: rising from the dead. Naruto thinks quickly and uses his rasengan ninjutsu to counter his foe. :insertY: is defeated, but there\'s still Orochimaru...Naruto recalls the wise words from :insertZ:, a fallen comrade. He builds up his super rasen-shuriken in preparation to throw it at Orochimaru but before he realizes it, Orochimaru has transformed into a menacing snake! The snake lashes out, and Naruto barely dodges. Just when all hope seems to be lost, the snake towering over Naruto, :insertX: appears at Naruto\'s side. Together, they defeat the evil Orochimaru and return home to the Leaf Village. Teamwork truly does make the dream work.';
var insertX = ['Sakura','Rock Lee','Kakashi Sensei'];
var insertY = ['Hashirama','Minato Sensei','Granny Chiyo'];
var insertZ = ['Neji','Jiraiya Sensei','Itachi'];

randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertX:/g,xItem);
  newStory = newStory.replace(/:insertY:/g,yItem);
  newStory = newStory.replace(/:insertZ:/g,zItem);

  if(customWeapon.value !== '') {
    var weapon = customWeapon.value;
    newStory = newStory.replace('shuriken',weapon);
  }
   if(customNinjutsu.value !== '') {
   var ninjutsu = customNinjutsu.value;
    newStory = newStory.replace('rasengan',ninjutsu);
  }
  if(customAnimal.value !== '') {
   var animal = customAnimal.value;
    newStory = newStory.replace(/snake/g,animal);
    }

  if(document.getElementById("sasuke").checked) {
    newStory = newStory.replace(/Naruto/g,'Sasuke');
    newStory = newStory.replace('rasengan ninjutsu','sharingan');
    newStory = newStory.replace('super rasen-shuriken','amaterasu');
    document.getElementById('herophoto').src='images/sasuke.jpg';
  }
  else if (document.getElementById("naruto").checked) {
    document.getElementById('herophoto').src='images/naruto.jpg';
  }
  if(document.getElementById("madara").checked) {
    newStory = newStory.replace(/Orochimaru/g,'Madara');
    document.getElementById('villainphoto').src='images/madara.jpg';
  }
  else if (document.getElementById("orochimaru").checked) {
    document.getElementById('villainphoto').src='images/orochimaru.jpg';
  }
  if(document.getElementById("tokyo").checked) {
    var temperature = Math.round((17-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('17 fahrenheit',temperature);
    newStory = newStory.replace('New York','Tokyo');
    newStory = newStory.replace('apple','sakura blossom')
  }

  versus.textContent = vs;
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
