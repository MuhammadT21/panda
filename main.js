// KF Panda Search
document.getElementById("theme-btn").addEventListener("click", theme);

function theme() {
  let theme = document.getElementById("theme-in").value.toLowerCase();
  if (theme === "dark" || theme === "black") {
    document.getElementById("theme1").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
  } else if (theme === "light" || theme === "white") {
    document.getElementById("theme1").style.backgroundColor =
      "rgba(255,255,255, 0.7)";
    document.getElementById("char-name").style.color = "rgba(255, 255, 255)";
  }
}

let charNameEl = document.getElementById("char-name");
let charQuoteE1 = document.getElementById("char-quote");
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //input
  let name = document.getElementById("char-in").value.toLowerCase();
  console.log(name);

  // if statement - test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteE1.innerHTML = "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteE1.innerHTML =
      "I used to punch the iron-wood trees by the palace to train. Now, I feel nothin";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteE1.innerHTML =
      "He's not gonna quit bouncing, I'll tell you that. [chuckles]";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteE1.innerHTML =
      "At the first sign of trouble, I'll give you a signal. Ka-ka! Kee-kee!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "boss wolf" || name === "wolf") {
    charNameEl.innerHTML = "Wolf";
    charQuoteE1.innerHTML =
      "I'll tell you what's gonna be yours: my fist in your plush, cuddly, super-soft face!";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteE1.innerHTML = "So that was 'stealth mode', huh?";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteE1.innerHTML =
      "I'm going to take your chi then the chi of every panda in the...";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteE1.innerHTML = "I get the top bunk.";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "mr ping" || name === "po's dad") {
    charNameEl.innerHTML = "Mr Ping";
    charQuoteE1.innerHTML = "You're my son! ... Right?";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "oogway" || name === "master oogway") {
    charNameEl.innerHTML = "Master Oogway";
    charQuoteE1.innerHTML =
      "Yesterday is history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present.";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteE1.innerHTML = "What is rightfully mine: Gongmen City!";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteE1.innerHTML =
      "If you only do what you can do, you'll never be better than what you are. ...";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteE1.innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. ...";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "storming ox" || name === "ox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteE1.innerHTML = "What's in the box, Shen?";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai" || name === "tai lung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteE1.innerHTML =
      "Finally, a worthy opponent! Our battle will be legendary!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteE1.innerHTML = "Oh my gosh! Where are my legs?!";
    document.getElementById("char-img").src = "img/viper.png";
  } else {
    document.getElementById("char-name").innerHTML = "?????";
    document.getElementById("char-quote").innerHTML = "----------";
    document.getElementById("char-img").src = "img/question-mark.png";
    console.log("?");
  }
}
