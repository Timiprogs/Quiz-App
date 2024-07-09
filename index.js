const questions=[
{
    question:" Which country was the last to win independence from colonial rule?",
    answers:[
        {text:"Cameroun", correct:"false"},
        {text:"Angola", correct:"true"},
        {text:"Tanzania", correct:"false"},
        {text:"Ivory Coast", correct:"false"}

    ]
},

   { question:"When was the United Nations Organisation formed?",
    answers:[
        {text:"24th May 1933", correct:"false"},
        {text:"19th March 1950", correct:"false"},
        {text:"23rd October 1985", correct:"false"},
        {text:"25th April 1945", correct:"true"}

    ]
},

 { question:"Who invented the light bulb?",
    answers:[
        {text:"Thomas Edison", correct:"true"},
        {text:"Archimedes", correct:"false"},
        {text:"Charles Darwin", correct:"false"},
        {text:"Albert Einstein", correct:"false"}

    ]
},
   { question:" Who invented the motor car?",
    answers:[
        {text:"Henry Ford", correct:"false"},
        {text:"Karl Benz", correct:"true"},
        {text:"Enzo Ferrari", correct:"false"},
        {text:"Ferdinand Porsche", correct:"false"}

    ]
},

  { question:"What is the hottest region in the world called?",
    answers:[
        {text:"Mitribah", correct:"false"},
        {text:"The Death Valley", correct:"false"},
        {text:"The Sahara Desert", correct:"true"},
        {text:"Turbat Pakistan", correct:"false"}

    ]
},

 { question:"Which African country first gained independence?",
    answers:[
        {text:"Senegal", correct:"false"},
        {text:"Tunisia", correct:"false"},
        {text:"Nigeria", correct:"false"},
        {text:"Liberia", correct:"true"}

    ]
},
 { question:"Which is the second-largest continent in the world?",
    answers:[
        {text:"Africa", correct:"true"},
        {text:"Asia", correct:"false"},
        {text:"South Ameria", correct:"false"},
        {text:"Oceania", correct:"false"}

    ]
},

 { question:"What is a 70th anniversary called?",
    answers:[
        {text:"Pearl", correct:"false"},
        {text:"Platinum", correct:"true"},
        {text:"Silver Jubilee", correct:"false"},
        {text:"Golden Jubilee", correct:"false"}

    ]
},

 { question:"Which is the highest mountain in Africa?",
    answers:[
        {text:"Mount Everest", correct:"flase"},
        {text:"Mount Kilimanjaro", correct:"true"},
        {text:"Kangchenjunga", correct:"false"},
        {text:"LHOTSE", correct:"false"}

    ]
},


 { question:" When did the first world war take place?",
    answers:[
        {text:"1912-1916", correct:"false"},
        {text:"1905-1909", correct:"false"},
        {text:"1914-1919", correct:"true"},
        {text:"1922-1926", correct:"false"}

    ]
},

]


const questionElement =document.getElementById("question")
const answerButtons =document.getElementById("answer-buttons")
const nextButton =document.getElementById("next-btn")

let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
currentQuestionIndex=0;
score = 0;
nextButton.innerHTML="Next";
showQuestion() ;   
}
function resetState(){
nextButton.style.display=("none");
while (answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
}}




function showQuestion() {
    resetState()
let currentQuestion= questions[currentQuestionIndex];
let questionNo= currentQuestionIndex + 1;
questionElement.innerHTML= questionNo + ".    " + currentQuestion.question


currentQuestion.answers.forEach(answer => {

    const button= document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct){
        button.dataset.correct=answer.correct
    }
    button.addEventListener("click", selectAnswer)
    
});}

function selectAnswer (e){
const selectedBtn=e.target;
const isCorrect= selectedBtn.dataset.correct==="true";
if (isCorrect){
selectedBtn.classList.add("correct");
score++;
}
else {
selectedBtn.classList.add("incorrect")
}

Array.from(answerButtons.children).forEach(button=>
    { if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;

    })
    nextButton.style.display="block";
}


function handleNextButton(){
currentQuestionIndex++;
if (currentQuestionIndex < questions.length){
    showQuestion()}
    else{
        showScore()
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"

}
nextButton.addEventListener("click", ()=>{
 if(currentQuestionIndex < questions.length) {
    handleNextButton();
}else{
    startQuiz();
}

});  startQuiz();
