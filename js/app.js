var app = new Vue({
    el: '#app',
    data: {
        message: 'Hi! This is a super-puper Christmas and Birthday quiz for you!',
        activeScreen: "welcomeScreen",
        yesButtonDisabled: true,
        noButtonDisabled: false,
        questions: [{
            id: 0,
            active: true,
            text: "What is your profession?",
            images: true,
            answers: [{
                    litera: "A",
                    text: "QA",
                    url: "",
                    correct: true,
                    id: 0
                },
                {
                    litera: "B",
                    text: "Developer",
                    correct: false,
                    id: 1
                },
                {
                    litera: "C",
                    text: "Manager",
                    correct: false,
                    id: 2
                },
                {
                    litera: "D",
                    text: "Director",
                    correct: false,
                    id: 3
                }
            ]
        },
        {
            id: 1,
            active: false,
            text: "Where do you live?",
            answers: [{
                    litera: "A",
                    text: "Armenia",
                    correct: false,
                    id: 0
                },
                {
                    litera: "B",
                    text: "Belarus",
                    correct: true,
                    id: 1
                },
                {
                    litera: "C",
                    text: "Canada",
                    correct: false,
                    id: 2
                },
                {
                    litera: "D",
                    text: "Laplandia",
                    correct: false,
                    id: 3
                }
            ]
        }
    ],
        demoQuestions: [{
                id: 0,
                active: true,
                text: "What is your profession?",
                images: true,
                answers: [{
                        litera: "A",
                        text: "QA",
                        url: "",
                        correct: true,
                        id: 0
                    },
                    {
                        litera: "B",
                        text: "Developer",
                        correct: false,
                        id: 1
                    },
                    {
                        litera: "C",
                        text: "Manager",
                        correct: false,
                        id: 2
                    },
                    {
                        litera: "D",
                        text: "Director",
                        correct: false,
                        id: 3
                    }
                ]
            },
            {
                id: 1,
                active: false,
                text: "Where do you live?",
                answers: [{
                        litera: "A",
                        text: "Armenia",
                        correct: false,
                        id: 0
                    },
                    {
                        litera: "B",
                        text: "Belarus",
                        correct: true,
                        id: 1
                    },
                    {
                        litera: "C",
                        text: "Canada",
                        correct: false,
                        id: 2
                    },
                    {
                        litera: "D",
                        text: "Laplandia",
                        correct: false,
                        id: 3
                    }
                ]
            }
        ]
    },
    methods: {
        moveToNextQuestion: function (anwsSelectedId) {

            var questions;
            if (this.activeScreen == 'demoQuiz'){
                questions = this.demoQuestions;
            }
            else{
                questions = this.questions;
            }

            var currentQuestionId = questions.filter(function(item){
                return item.active == true;
            })[0].id;

            if (questions[currentQuestionId].answers[anwsSelectedId].correct != true){
                alert("think again!")
                return;
            }

            if (currentQuestionId == questions.length) {
                if (this.activeScreen == 'demoQuiz'){
                    this.activeScreen = 'welcomeScreen';
                    this.yesButtonDisabled = false;
                }
                else{
                    this.activeScreen = 'finalText';
                }
            } else if(currentQuestionId < questions.length){
                questions[currentQuestionId].active = false;

                if (currentQuestionId + 1 < questions.length){
                    questions[currentQuestionId + 1].active = true;
                }
                else{
                    if (this.activeScreen == 'demoQuiz'){
                        this.activeScreen = 'welcomeScreen';
                        this.yesButtonDisabled = false;
                    }
                    else{
                        this.activeScreen = 'finalText';
                    }
                }
            }
        }
    }
})