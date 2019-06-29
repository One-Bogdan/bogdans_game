var margo = {
  'Margo is evil?': ['Yes ', 'No', 'Maybe'],
  'Margo eats fish?': ['Yes ', 'No', 'Maybe'],
  'Margo is goodness?': ['Yes', 'No ', 'Maybe'],
  'Margo sleep on the sofa?': ['Yes ', 'No', 'Maybe']
};

var bogdan = {
  'Bogdan is evil?': ['Yes ', 'No', 'Maybe'],
  'Bogdan eats fish?': ['Yes ', 'No', 'Maybe'],
  'Bogdan is goodness?': ['Yes', 'No ', 'Maybe'],
  'Bogdan sleep on the sofa?': ['Yes ', 'No', 'Maybe']
};

function counter() {
  var counter = 1;

  function add() {
    return counter++;
  }

  add.reset = function() {
    counter = 1;
  }

  return add;
}

var player = counter();

function CreatePlayer() {
  this.play = player();
  this.addPoints = counter();
  this.points = 0;
  this.rand;
  this.corrAnswers = [];
  this.incorrAnswers = [];
  this.showThemes = ['Margo', 'Bogdan'];
  this.themes = [margo, bogdan];
  this.themesArr = this.themes.slice(0);
  this.theme = this.themesArr[0];
  this.initialKeys = Object.keys(this.theme);
  this.questKeys = this.initialKeys.slice(0);

  this.name = 'name' + this.play;
  this.cardId = 'card' + this.play;
  this.playerId = 'player' + this.play;
  this.questionId = 'question' + this.play;
  this.input1Id = 'input1' + this.play;
  this.input2Id = 'input2' + this.play;
  this.input3Id = 'input3' + this.play;
  this.answer1Id = 'answer1' + this.play;
  this.answer2Id = 'answer2' + this.play;
  this.answer3Id = 'answer3' + this.play;
  this.checkAnswerId = 'checkAnswer' + this.play;
  this.winId = 'win' + this.play;
  this.replyId = 'reply' + this.play;
  this.nextCardId = 'next' + this.play;
  this.nextThemeId = 'nextTheme' + this.play;
  this.newGameId = 'newGame' + this.play;
  this.pointId = 'count' + this.play;

  this.addNode = function(elem, text, id, attrs, values) {
    node = document.createElement(elem);
    node.innerHTML = text;

    for (var i = 0; i < attrs.length; i++) {
      node.setAttribute(attrs[i], values[i]);
    }

    document.getElementById(id).appendChild(node);
  }

  this.getRandNum = function() {
    this.rand = Math.floor(Math.random() * this.questKeys.length);
    return this.rand;
  }

  this.getPoint = function() {
    var pointsArr = [0, 2, 1, 5, 3, 1, 4];
    var rand = Math.floor(1 + Math.random() * 6);
    var point = this.addPoints(rand);

    if (point > 6) {
      point = point - 6;
      this.addPoints(-6);
    }
    return pointsArr[point];
  }

  this.getChildrens = function(id) {
    var div = document.getElementById(id);
    return {
      div: div,
      childrens: div.children,
      style: div.style
    }
  }

  this.showHideElems = function(nodeId, elemId, state1, state2) {
    var data = this.getChildrens(nodeId);

    for (var i = 0; i < data.childrens.length; i++) {
      data.childrens[i].disabled = state1;
      if (elemId == '') {
        continue;
      }
      else {
        document.getElementById(elemId).disabled = state2;
      }
    }
  }

  this.blankCard = function() {
    var data = this.getChildrens(this.cardId);
    while (data.div.hasChildNodes()) {
      data.div.removeChild(data.div.firstChild);
    }
  }

  this.resetChecked = function() {
    var data = this.getChildrens(this.questionId);
    for (var i = 0; i < data.childrens.length; i++) {
      data.childrens[i].checked = false;
    }
  }

  this.addNode('div', '', 'cards', ['id'], [this.cardId]);

  this.createCard = function() {

    if (this.play == 4) {
      document.getElementById('menu').style.display = 'none'
    }

    this.getRandNum();

    var divStyle = document.getElementById(this.cardId);
    switch (this.showThemes[0]) {
      case 'Margo':
        divStyle.style.background = 'yellow';
        break;
      case 'Bogdan':
        divStyle.style.background = 'lightblue';
        break;
    }

    this.addNode('p', 'Player ' + this.play, this.cardId, ['id'], [this.playerId]);
    this.addNode('hr', '', this.cardId, [], []);
    this.addNode('p', this.questKeys[this.rand], this.cardId, ['id'], [this.questionId]);
    this.addNode('br', '', this.questionId, [], []);
    this.addNode('input', '', this.questionId, ['id', 'type', 'name'], [this.input1Id, 'radio', this.name]);
    this.addNode('span', this.theme[this.questKeys[this.rand]][0], this.questionId, ['id'], [this.answer1Id]);
    this.addNode('br', '', this.questionId, [], []);
    this.addNode('input', '', this.questionId, ['id', 'type', 'name'], [this.input2Id, 'radio', this.name]);
    this.addNode('span', this.theme[this.questKeys[this.rand]][1], this.questionId, ['id'], [this.answer2Id]);
    this.addNode('br', '', this.questionId, [], []);
    this.addNode('input', '', this.questionId, ['id', 'type', 'name'], [this.input3Id, 'radio', this.name]);
    this.addNode('span', this.theme[this.questKeys[this.rand]][2], this.questionId, ['id'], [this.answer3Id]);
    this.addNode('p', '', this.cardId, ['id'], [this.checkAnswerId]);
    this.addNode('p', '', this.cardId, ['id'], [this.winId]);
    this.addNode('button', 'Reply', this.cardId, ['id', 'class'], [this.replyId, 'reply']);
    document.getElementById(this.replyId).addEventListener('click', this.setAnswer);
    this.addNode('button', 'Next question >>', this.cardId, ['id'], [this.nextCardId]);
    document.getElementById(this.nextCardId).addEventListener('click', this.showNextCard);
    this.addNode('button', 'Next theme >>>', this.cardId, ['id'], [this.nextThemeId]);
    document.getElementById(this.nextThemeId).addEventListener('click', this.showNextTheme);
    this.addNode('button', 'NEW GAME', this.cardId, ['id'], [this.newGameId]);
    document.getElementById(this.newGameId).addEventListener('click', newGame);
    this.addNode('hr', '', this.cardId, [], []);
    this.addNode('p', 'Count: ' + this.points + '&nbsp;&nbsp' + ' Theme: ' + this.showThemes[0], this.cardId, ['id'], [this.countId]);
  }

  this.setAnswer = function() {
    var arr = [];
    var spanArr = [];
    var data = this.getChildrens(this.questionId);
    for (var i = 0; i < data.childrens.length; i++) {
      if (data.childrens[i].tagName == 'INPUT') {
        arr.push(data.childrens[i].checked);
      }
      else if (data.childrens[i].tagName == 'SPAN') {
        spanArr.push(data.childrens[i]);
      }
    }

    function checkChoice(elem) {
      return elem === false;
    }

    if (arr.every(checkChoice)) {
      document.getElementById(this.checkAnswerId).innerHTML = 'Please, make a choice!';
      document.getElementById(this.cardId).style.backgroundColor = 'coral';
    }
    else {
      for (var i = 0; i < spanArr.length; i++) {
        if (arr[i] === true && spanArr[i].innerHTML.endsWith(' ')) {
          document.getElementById(this.checkAnswerId).innerHTML = 'Correct answer!';
          document.getElementById(this.cardId).style.backgroundColor = 'yellowgreen';
          this.corrAnswers.push(this.questKeys[this.rand]);
          this.questKeys.splice(this.rand, 1);
          // console.log('Corr: ' + this.corrAnswers, 'Incorr: ' + this.incorrAnswers, 'Keys: ' + this.questKeys);
          this.points += (this.getPoint() + 5);
          document.getElementById(this.countId).innerHTML = 'Count: ' + this.points + "&nbsp;&nbsp;" + " Theme: " + this.showThemes[0];

          if (this.points >= 10 && this.themesArr.length > 0) {
            this.resetChecked();
            this.showHideElems(this.questionId, '', true, false);
            this.showHideElems(this.cardId, this.newGameId, true, false);
            this.themesArr.splice(0, 1);
            this.showThemes.splice(0, 1);
            this.theme = this.themesArr[0];

            if (this.theme === undefined) {
              var inputsList = document.getElementsByTagName('input');
              var replayBtnList = document.getElementsByClassName('reply');
              for (var i = 0; i < inputsList.length; i++) {
                inputsList[i].disabled = true;
                if (replayBtnList[i] === undefined) {
                  continue;
                }
                replayBtnList[i].disabled = true;
              }
              document.getElementById(this.countId).innerHTML = 'Count: ' + this.points;
              document.getElementById(this.winId).innerHTML = "You win!!!";
              document.getElementById(this.newGameId).style.display = "block";
              document.getElementById('menu').style.display = "none";
              this.resetChecked();
              this.showHideElems(this.questionId, '', true, false);
              this.showHideElems(this.cardId, this.newGameId, true, false);
              // console.log('Corr: ' + this.corrAnswers, 'Incorr: ' + this.incorrAnswers, 'Keys: ' + this.questKeys, 'Initial keys: ' + this.initialKeys);
              break;
            }

            this.initialKeys = Object.keys(this.theme);
            this.questKeys = this.initialKeys.slice(0);
            document.getElementById(this.nextThemeId).style.display = "block";
            this.showHideElems(this.cardId, this.nextThemeId, true, false);
            this.points = 0;
            this.incorrAnswers.length = 0;
            this.corrAnswers.length = 0;
            break;
          }

          this.resetChecked();
          this.showHideElems(this.cardId, this.nextCardId, true, false);
          this.showHideElems(this.questionId, '', true, false);
          this.nextQuestionBtn();
          break;
        }
        else if (arr[i] === false && i < arr.length) {
          continue;
        }
        else {
          document.getElementById(this.checkAnswerId).innerHTML = 'Incorrect answer!';
          document.getElementById(this.cardId).style.backgroundColor = 'red';
          // console.log('Corr: ' + this.corrAnswers, 'Incorr: ' + this.incorrAnswers, 'Keys: ' + this.questKeys);
          this.incorrAnswers.push(this.questKeys[this.rand]);
          this.questKeys.splice(this.rand, 1);
          this.resetChecked();
          this.showHideElems(this.cardId, this.nextCardId, true, false);
          this.showHideElems(this.questionId, '', true, false);
          this.nextQuestionBtn();
          break;
        }
      }
    }
  }

  this.nextQuestionBtn = function() {
    this.showHideElems(this.cardId, this.nextCardId, true, false);
    document.getElementById(this.nextCardId).style.display = "block";
  }

  this.showNextCard = function() {
    var data = this.getChildrens(this.cardId);
    document.getElementById(this.nextCardId).style.display = "none";
    document.getElementById(this.checkAnswerId).innerHTML = "";
    for (var i = 0; i < data.childrens.length; i++) {
      data.childrens[i].disabled = false;
      if (data.childrens[i].tagName = 'INPUT') {
        data.childrens[i].checked = false;
      }
    }

    if (this.questKeys.length == 0) {
      this.questKeys = this.incorrAnswers.splice(0);
    }

    if (this.incorrAnswers.length == 0 && this.questKeys.length == 0) {
      this.questKeys = this.corrAnswers.splice(0);
    }

    this.resetChecked();
    this.blankCard();
    this.createCard();
  }

  this.showNextTheme = function() {
    this.showHideElems(this.cardId, this.nextThemeId, true, false);
    document.getElementById(this.nextThemeId).style.display = 'none';
    this.resetChecked();
    this.blankCard();
    this.createCard();
  }


}

function newGame() {
  document.getElementById('menu').style.display = 'flex';
  var data = document.getElementById('cards');
  while (data.hasChildNodes()) {
    data.removeChild(data.firstChild);
  }
  player.reset();
  this.count = 0;
}

addPlayer = function() {
  var plr = new CreatePlayer();

  for (var prop in plr) {
    if (typeof plr[prop] == 'function') {
      plr[prop] = plr[prop].bind(plr);
    }
  }
  plr.createCard();

  document.getElementById('newPlayer').removeAttribute('onclick');
  document.getElementById('newPlayer').setAttribute('onclick', 'plr.createCard()');
}

document.getElementById('newGame').addEventListener('click', newGame);
document.getElementById('newPlayer').addEventListener('click', addPlayer);
