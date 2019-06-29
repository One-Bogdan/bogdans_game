const histor = {
  'Братья, которые изобрели славянскую азбуку': ['Кирилл и Мефодий ', 'Михаил и Братислав', 'Борис и Всеволод'],
  'Князь, который крестил Русь': ['Иван', 'Владимир ', 'Тихомир'],
  'Как звали главного бога славян? ': ['Перун ', 'Семаргл', 'Велес'],
  'В каком городе Древней Руси проходили народные собрания, которые назывались «вече»?': ['Москва', 'Новгород ', 'Смоленск'],
  'На каком континенте появились первые люди': ['Евразия', 'Африка ', 'Австралия'],
  'Какая пирамида Древнего Египта самая высокая?': ['Пирамида Хеопса ', 'Пирамида Хефрена', 'Пирамида Джосера'],
  'В каком году начался первый крестовый поход?': ['1062 г.', '1096 г. ', '1087 г.'],
  'В какие годы шла Первая мировая война?': ['1914-1918 г. ', '1915-1919 г.', '1917-1922 г.'],
  'Сколько было жён у короля Англии Генриха VIII': ['3', '6 ', '8'],
  'Что появилось раньше?': ['Охота ', 'Скотоводство', 'Земледелие'],
  'В каком году крестили Русь?': ['988 г. ', '998 г.', '899 г.'],
  'В каком году была Русско-Польская война': ['1661-1674г.', '1654-1667г. ', '1600-1613г.'],
  'Какая самая большая пирамида?': ['Хефрена', 'Джосера', 'Хеопса '],
  'В каком году была Куликовская битва?': ['1379г.', '1380г. ', '1382г.'],
  'В каком году была основана Москва': ['1147г. ', '1145г.', '1139г.'],
  'Что послужило причиной начала крестовых походов?': ['Религиозные чувства ', 'Недовольство властью', 'Расширение границ'],
  'Каким было основное занятие финикийцев в древности?': ['Керамика', 'Морская торговля ', 'Изготовление ковров'],
  'Где находились Висячие сады Семирамиды?': ['Вавилон ', 'Иерусалим', 'Константинополь '],
  'В каком году церковь раскололась на православную и католическую?': ['980 г.', '1012 г.', '1054 г. '],
  'Что из перечисленного было орудием труда первобытного человека?': ['Лук', 'Меч', 'Рубило '],
  'В каком году была создана Организация Объединённых Наций?': ['1936 г.', '1940 г.', '1945 г. '],
  'В какие годы шла Вторая мировая война?': ['1939 – 1945 г. ', '1940 – 1945 г.', '1941 – 1946 г.'],
  'Против кого совершались крестовые походы?': ['Крестьян', 'Христиан', 'Мусульман '],
  'Какая религия создана с целью объединения и сплочения арабских племён?': ['Буддизм', 'Ислам ', 'Христианство'],
  'Когда происходило Великое переселение народов?': ['II - III вв.', 'IV - VII вв. ', 'VI - VIII вв.'],
  'На территории какого современного государства  находился древний город Троя?': ['Греция', 'Иран', 'Турция '],
  'Кто побывал в Америке да Колумба?': ['Папуасы', 'Австралийцы', 'Викинги '],
  'Какое чудовище обитало в лабиринтах критского царя': ['Кентавр', 'Минотавр ', 'Циклоп'],
  'В какой стране зародился протестантизм?': ['Голландия', 'Англия', 'Германия '],
  'Как называлась часть Европы, заселённая кельтскими племенами?': ['Галлия ', 'Скифия', 'Персия'],
  'В каком году Рим был захвачен вестготами? ': ['410 г. ', '434 г.', '451 г.'],
  'Как звали великого повелителя гуннов?': ['Юлий', 'Один', 'Аттила '],
  'В каком веке было начато строительство Великой Китайской стены': ['II век до н.э.', 'III век до н.э. ', 'V век до н.э.'],
  'В какие годы в Англии шла война Алой и Белой Розы?': ['1450 - 1475 г.', '1455 - 1485 г. ', '1470 - 1489 г.'],
  'Какое событие является точкой отсчёта христианского календаря?': ['Строительство Великой Китайской стены', 'Великое переселение народов', 'Рождество Христово ']
 }

const space = {
  'Как звали человека, который первым ступил на Луну?': ['Юрий Гагарин', 'Нил Армстронг ', 'Джон Гленн'],
  'Где находится Море Москвы?': ['В Москве', 'В Азии', 'На Луне '],
  'Как зовут первую женщину, полетевшую в космос?': ['Ирина Соловьёва', 'Валентина Терешкова ', 'Жюли Пайетт'],
  'В какой стране впервые запустили спутник на орбиту?': ['СССР ', 'Япония', 'США'],
  'Во сколько раз масса Земли больше, чем масса Луны?': ['42', '56', '81 '],
  'Сколько всего планет в Солнечной системе?': ['7', '8 ', '9'],
  'Как называется ближайшая к Солнцу планета?': ['Меркурий ', 'Юпитер', 'Марс'],
  'Как называется участок звёздного неба?': ['Созвездие ', 'Орбита', 'Гравитация'],
  'Что представляет из себя Солнце?': ['Планета', 'Звезда ', 'Метеорит'],
  'Что такое Плутон?': ['Спутник ', 'Планета', 'Звезда'],
  'Какая звезда в созвездии Большой Медведицы самая яркая?': ['Алиот ', 'Дубхе', 'Мерак'],
  'Как называется самая яркая звезда в созвездии Малой Медведицы?': ['Кохаб', 'Полярная звезда ', 'Гамма Малой Медведицы'],
  'У какой из перечисленных планет есть спутники?': ['Меркурий', 'Марс ', 'Венера'],
  'Как называются самые распространённые малые тела Солнечной системы?': ['Метеориты', 'Кометы', 'Астероиды '],
  'Как называется естественный спутник Земли?': ['Луна ', 'Солнце', 'Юпитер'],
  'Какая планета Солнечной системы является самой большой?': ['Венера', 'Сатурн', 'Юпитер '],
  'Как называется самая тусклая звезда в созвездии Большой Медведицы?': ['Алиот', 'Мерак', 'Мегрец '],
  'Как называется небесное тело, имеющее вид туманного светящегося пятна и светововой полосы в форме хвоста?': ['Комета ', 'Звезда', 'Астероид'],
  'Как называется гравитационно-связанная система из звёзд?': ['Галлактика ', 'Вселенная', 'Созвездие'],
  'Как называются обломки планет, упавшие на землю?': ['Астероиды', 'Метеориты ', 'Кометы'],
  'В каком году состоялся первый полёт человека в космос?': ['В 1961 г.', 'В 1967 г.', 'В 1973 г.'],
  'Как называется крупнейшее море расположенное в западной части видимой стороны луны?': ['Море Холода', 'Море Дождей', 'Океан Бурь '],
  'На какой планете Солнечной системы самая высокая температура?': ['Марс', 'Венера ', 'Меркурий'],
  'Как называется самая удалённая планета солнечной системы?': ['Уран', 'Нептун ', 'Плутон'],
  'Как называется первая планета, открытая благодаря математическим расчётам?': ['Нептун ', 'Сатурн', 'Марс'],
  'В результате падения каких космических тел образуются кратеры на Луне?': ['Кометы', 'Астероиды', 'Метеориты '],
  'Как назывался корабль, на котором Юрий Гагарин впервые совершил полёт в космос?': ['"Прогресс"', '"Земля"', '"Восток" '],
  'Какой астронавт первый вышел в открытый космос?': ['Алексей Леонов ', 'Майкл Адамс', 'Сэмюел Торнтон'],
  'Как называется самая близкая к Земле карликовая планета?': ['Макемаке', 'Церера ', 'Эрида'],
}

const art = {
  'Какой храм сжёг Герострат, чтобы прославиться?': ['Храм Зевса', 'Храм Артемиды Эфесской ', 'Парфенон'],
  'Кто из перечисленных художников был вегетарианцем?': ['Эдгар Дега', 'Рафаэль Санти', 'Леонардо да Винчи '],
  'Где находится Собор Парижской Богоматери?': ['Франция ', 'Италия', 'Германия'],
  'Какой архитектурный стиль считается самым роскошным?': ['Барокко ', 'Ренессанс', 'Классицизм'],
  'Как называется главный храмв Древних Афифнах?': ['Акрополь', 'Парфенон ', 'Храм Зевса'],
  'Кто был обвинён в Великом пожаре Рима?': ['Крестьяне', 'Христиане ', 'Варвары'],
  'Сколько лет длилось строительство Колизея?': ['8 лет ', '11 лет', '15 лет'],
  'Какой художник отрезал себе ухо?': ['Винсент Ван Гог ', 'Сальвадор Дали', 'Пабло Пикассо'],
  'Какая краска появилась раньше всех?': ['Синяя', 'Красная', 'Охра '],
  'Где находится Запретный город?': ['Токио', 'Пекин ', 'Шанхай'],
}

const geography = {
  'ку': ['геогр', 'ре ', 'ы'],
  '': ['', '', ''],
  '': ['', '', ''],
  '': ['', '', ''],
  '': ['', '', ''],
  '': ['', '', ''],
  '': ['', '', ''],
  '': ['', '', ''],
  '': ['', '', ''],
  '': ['', '', ''],
}

const science = {
  'Из какого сплава не изготавливаются банки для прохладительных напитков?': ['Латунь', 'Алюминий', 'Бронза '],
  'Как называются организмы, живущие только при помощи кислорода?': ['Хемолитоавтотрофные', 'Автотрофы', 'Аэробные '],
  'Как называется основная масса атома?': ['Изотоп', 'Оболочка', 'Ядро '],
  'Какого вещества в воздухе содержится больше всего?': ['Кислород', 'Азот ', 'Водород'],
  'Какой первый элемент переодической системф Менделеева обозначается символом "Н"?': ['Кислород', 'Углерод', 'Водород '],
  'Сколько атомов содержится в молекуле водорода?': ['Один', 'Два ', 'Четыре'],
  'Какую элементарную частицу открыл Джозеф Джон Томсон?': ['Электрон ', 'Протон', 'Нейтрон'],
  'Как называется еденица измерения электрического напряжения?': ['Вольт ', 'Ом', 'Ватт'],
  'Как называется еденица измерения электрической мощности?': ['Ватт ', 'Вольт', 'Ом'],
  'Что называют мельчайшей и функциональной еденицей живого?': ['Клетка ', 'Частица', 'Атом'],
  'Что называют совокупностью  живых организмов одного вида, обитающих на одной территории?': ['Род', 'Вид', 'Популяция '],
  'Как называется процесс распада электролита на ионы?': ['Деионизация', 'Ионизация', 'Диссоциация '],
  'Какой древнегреческий врач вошел в историю как "отец медецины"': ['Гераклит', 'Гиппократ ', 'Авиценна'],
  'Что является самым твердым минералом в природе?': ['Алмаз ', 'Стекло', 'Мрамор'],
  'Какой медецинский препарат создал Александр Флеминг?': ['Анальгетик', 'Антибиотик ', 'Антисептик'],
  'Какой металл является самым твёрдым?': ['Медь', 'Алюминий', 'Хром '],
  'Как называется процесс превращения газа в жидкость?': ['Трансформация', 'Переработка', 'Конденсация '],
  'Как называют служителя науки, посвятившего себя излучению звёзд?': ['Астронавт', 'Астроном ', 'Астролог'],
  'Какая элементарная частица имеет положительный заряд?': ['Электрон', 'Протон ', 'Нейтрон'],
  'Какова молекулярная масса воды?': ['12 г/моль', '18 г/моль ', '22 г/моль'],
  'Как называется наименьшая частица химического элемента?': ['Атом ', 'Молекула', 'Ион'],
  'В каком веке изобрели конвейерное производство?': ['В XVII ', 'В XX ', 'В XII'],
  'Как называется сплав двух металлов - меди и цинка?': ['Латунь ', 'Алюминий', 'Сталь'],
  'В каком городе была основана Российская академия наук?': ['Тверь', 'Москва', 'Санкт-Петербург '],
  'Какая энергия проявляется в движении?': ['Кинетическая ', 'Потенциальная', 'Электромагнитная'],
  'Чему равна скорость света?': ['100000 км/с', '200000 км/с', '300000 км/с'],
  'Как называется процесс перехода твёрдого кристаллического тела из твёрдого состояние в жидкое?': ['Разложение', 'Плавление ', 'Затвердевание'],
  'В каком году была опробована первая в истории инъекция инсулина?': ['В 1869 г', 'В 1896 г', 'В 1922 г '],
  'Из чего состоят облака?': ['Газ', 'Сера', 'Водяной пар '],
}

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
var winPoints = prompt('Input next theme points:');

function CreatePlayer() {
  this.play = player();
  this.addPoints = counter();
  this.points = 0;
  this.rand;
  this.corrAnswers = [];
  this.incorrAnswers = [];
  this.showThemes = ['История', 'Космос', 'Искусство', 'География', 'Наука'];
  this.themes = [histor, space, art, geography, science];
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
      case 'История':
        divStyle.style.background = 'yellow';
        break;
      case 'Космос':
        divStyle.style.background = 'lightblue';
        break;
      case 'Искусство':
        divStyle.style.background = 'rgb(183, 22, 249)';
        break;
      case 'География':
        divStyle.style.background = 'rgb(125, 244, 6)';
        break;
      case 'Наука':
        divStyle.style.background = 'rgb(228, 95, 9)';
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

          if (this.points >= winPoints && this.themesArr.length > 0) {
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
