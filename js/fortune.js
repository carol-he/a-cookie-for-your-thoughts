let fortunes = [
  {"cn": "", "eng": "Be so completely yourself that everyone else feels safe to be themselves too."},
  {"cn": "你永远不会后悔善良", "eng": "You never regret being kind."},
  {"cn": "", "eng": "Sometimes, you're the mess. Sometimes, you're the broom. On the hardest days, you'll have to be both.", "long": true},
  {"cn": "", "eng": "Don’t trip over people who don’t value you."},
  {"cn": "", "eng": "Stop being tormented by everyone else’s reaction of you."},
  {"cn": "", "eng": "Sometimes self care is cracking open a cold one without the boys."},
  {"cn": "", "eng": "Be with somebody who boosts your confidence, not makes you question it."},
  {"cn": "你怀念过去的你", "eng": "You miss yourself."},
  {"cn": "", "eng": "No one warns you about the mourning in growth."},
  {"cn": "你赢或你成长", "eng": "You win or you learn."},
  {"cn": "", "eng": "It is lovely to talk to a person and hear their voice smile."},
  {"cn": "", "eng": "Choose people who choose you."},
  {"cn": "", "eng": "We never know which lives we influence, when, or why."},
  {"cn": "", "eng": "Not all who mcfreakin wander are mcfreakin lost"},
  {"cn": "", "eng": "It's okay that you're not who you thought you would be."}
];
document.querySelector('#cookie').addEventListener('click', openCookie);
function openCookie(){
  let fortune = document.createElement('div');
  fortune.className = 'fortune';
  fortune.textContent = fortunes[fortunes.length * Math.random() << 0].eng;
  let topright = document.createElement('div');
  topright.className = 'topright';
  fortune.appendChild(topright);
  let paper = document.querySelector('#paper');
  paper.style.visibility = "hidden";
  document.body.appendChild(fortune);
  document.querySelector('#cookie').removeEventListener('click', openCookie);

}

var randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};
