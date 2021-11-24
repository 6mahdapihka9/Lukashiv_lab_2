let questionBlock = document.getElementById('question'),
    answersBlock = document.getElementById('answers'),
    messageElement = document.getElementById('message'),
    currentQuestionID = 1;

let directedNetwork = [
  {
    id: 1,
    question: 'У Вас є тема або ідея програми?',
    answers: [{
      type: 'Так',
      questionID: 2
    }, {
      type: 'Ні',
      message: 'Знайдіть або вигадайте цікаву тему.'
    }]
  }, {
    id: 2,
    question: 'Ви обрали підходящу мову програмування?',
    answers: [{
      type: 'Так',
      questionID: 3
    }, {
      type: 'Не впевнений',
      message: 'Проконсультуйтесь з експертом.'
    }]
  }, {
    id: 3,
    question: 'Ви вмієте на ній програмувати?',
    answers: [{
      type: 'Так',
      questionID: 4
    }, {
      type: 'Так, але є труднощі з реалізацією',
      message: 'Почитайте форуми на цю тему або пошукайте відповіді в інтернеті.'
    }, {
      type: 'Ні',
      message: 'Пройдіть курси з неї або прочитайте сучасну книжку з розробки на ній.'
    }]
  }, {
    id: 4,
    question: 'Ви шукали робочі прототипи?',
    answers: [{
      type: 'Так',
      questionID: 5
    }, {
      type: 'Ні',
      message: 'Загугліть Вашу тему - хтось вже точно намагався створити щось подібне!)'
    }]
  }, {
    id: 5,
    question: 'Знайшли?',
    answers: [{
      type: 'Так',
      questionID: 6
    }, {
      type: 'Ні',
      message: 'Шукайте ще! :)'
    }]
  }, {
    id: 6,
    question: 'Вам вдалося його модуфікувати під свою тему?',
    answers: [{
      type: 'Так',
      message: 'Успіх! Ви молодець. Поздоровляю, Ви змогли створити власний програмний продукт!'
    }, {
      type: 'Ні',
      message: 'Почитайте форуми на цю тему або пошукайте відповіді в інтернеті.'
    }]
  }];

function showMessage(message) {
  messageElement.innerText = message;

  messageElement.style.visibility = 'visible';
  messageElement.style.opacity = '1';

  setTimeout(() => {
    messageElement.style.opacity = '0';
    setTimeout(() => {
      messageElement.style.visibility = 'hidden';
    }, 500)
  }, 4000)
}

function getQ() {
  return directedNetwork.filter(q => q.id === currentQuestionID)[0]
}

function setQuestion(id) {
  currentQuestionID = id;
  let question = getQ();

  questionBlock.innerText = question.question

  answersBlock.innerHTML = ``
  question.answers.forEach(answer => {

    answersBlock.innerHTML += `
      <div>
        <input id="${answer.type}" 
          name="${question.id}" 
          type="radio" 
          value="${(answer.questionID) ? answer.questionID : answer.message}">
        <label for="${answer.type}">${answer.type}</label>
      </div>
    `;
  })
}

function reset() {
  setQuestion(1);
}

function submitHandler() {
  let checkedInputs = Array.from(document.getElementsByTagName('input'))
      .filter(input => input.checked)

  if (checkedInputs.length) {
    if (isNaN(+checkedInputs[0].value))
      showMessage(checkedInputs[0].value)
    else
      setQuestion(+checkedInputs[0].value)
  }
}


setQuestion(1);



















