//===================== ANSWERS ==============================

const question1 = document.querySelector('#q1');
const question2 = document.querySelector('#q2');
const question3 = document.querySelector('#q3');
const question4 = document.querySelector('#q4'); 

const genderButtons = question1.querySelectorAll('.survey_button');
const ageButtons = question2.querySelectorAll('.survey_button');
const familyButtons = question3.querySelectorAll('.survey_button');
const isBoughtIphone = question4.querySelectorAll('.survey_button');
const showAnswersButton = document.querySelector('#p_modal_button3');

const answers = {};


genderButtons.forEach(button => {
  button.addEventListener('click', () => buttonHandler('gender', button.textContent.trim()));
});

ageButtons.forEach(button => {
  button.addEventListener('click', () => buttonHandler('age', button.textContent.trim()));
});

familyButtons.forEach(button => {
  button.addEventListener('click', () => buttonHandler('family', button.textContent.trim()));
});

isBoughtIphone.forEach(button => {
    button.addEventListener('click', () => buttonHandler('isBoughtIphone', button.textContent.trim()));
  });



function buttonHandler(btnName, answerValue) {
    answers[btnName] = answerValue;    
  };

showAnswersButton.addEventListener("click", function() {
    console.log(answers);
    });


    
// ===================== COMMENTS ========================
const initComment = document.querySelector('#showMore');
const commentForm = document.querySelector('#comment-form');
const submitBtn = document.querySelector('.submitButton');
const feedbackInput = document.querySelector("[name='feedback']");
const commentHtml = function (message){return `<div class="comments" id="comment0" style="display:block">
              <div class="profile">
                <img src="./assets/img/defaultUser.jpg"></div>
              <div class="comment-content">
                <p class="name">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">anonymous</font>
                  </font>
                </p>
                <p>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">${message}</font>
                  </font>
                </p>
              </div>
              <div class="clr"></div>
              <div class="comment-status">
                <span>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Curte·comente</font>
                  </font>
                 
                  <font style="vertical-align: inherit;">
                    
                  </font>
                </span>
                <font style="vertical-align: inherit;">
                  <small>
                    <font style="vertical-align: inherit;">·</font>
                  </small>


                  <small>
                    <u>
                      <font style="vertical-align: inherit;">few seconds ago</font>
                    </u>
                  </small>
                </font>
                <small>
                  <font style="vertical-align: inherit;"></font>
                  <u>
                    <font style="vertical-align: inherit;"></font>
                  </u>
                </small>
              </div>
            </div>`};

commentForm.addEventListener('submit', submitHandler);
feedbackInput.addEventListener("input", () => checkComment());

function checkComment() {
  if (feedbackInput.value.length === 0) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

function submitHandler(event) {
    event.preventDefault();
    const feedback = commentForm.elements.feedback.value;       
    createComment (feedback)
    commentForm.elements.feedback.value = '';
    submitBtn.disabled = true;
  }

  function createComment (comment) {
    const commentItem = document.createElement('div');
    commentItem.innerHTML = commentHtml(comment);
    initComment.after(commentItem.firstChild);    
  }

  
            

