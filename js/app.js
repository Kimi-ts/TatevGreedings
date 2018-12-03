var app = new Vue({
    el: '#app',
    data: {
        message: 'Тебе предстоит сложня игра. От твоих правильных ответов зависит чья-то судьба. Помни, когда ты отвечаешь неправильно, где-то в Армении грустит один Авет Барсехян.',
        activeScreen: "welcomeScreen",
        yesButtonDisabled: true,
        noButtonDisabled: false,
        displayWarning: false,
        displayReadyText: false,
        questions: [{
            id: 0,
            active: true,
            text: "Где находится резиденция белорусского Деда Мороза?",
            answers: [{
                    litera: "A: ",
                    text: "Масюковщина",
                    correct: false,
                    id: 0
                },
                {
                    litera: "B: ",
                    text: "Гомель",
                    correct: false,
                    id: 1
                },
                {
                    litera: "C: ",
                    text: "Беловежская пуща",
                    correct: true,
                    id: 2
                },
                {
                    litera: "D: ",
                    text: "Малиновка",
                    correct: false,
                    id: 3
                }
            ]
        },
        {
            id: 1,
            active: false,
            text: "Когда все католики в мире отмечают день рождения Татев Арутюнян?",
            answers: [{
                    litera: "A: ",
                    text: "7 января",
                    correct: false,
                    id: 0
                },
                {
                    litera: "B: ",
                    text: "25 декабря",
                    correct: true,
                    id: 1
                },
                {
                    litera: "C: ",
                    text: "31 декабря",
                    correct: false,
                    id: 2
                },
                {
                    litera: "D: ",
                    text: "13 января",
                    correct: false,
                    id: 3
                }
            ]
        },
        {
            id: 2,
            active: false,
            text: "Кого бы ты взяла с собой в Рождественское путешествие?",
            answers: [{
                    litera: "A: ",
                    text: "Джулиета, Таня + Максим",
                    correct: true,
                    id: 0
                },
                {
                    litera: "B: ",
                    text: "Матвей, Игорь, Таня (те которые с Суши-Вёсла)",
                    correct: false,
                    id: 1
                },
                {
                    litera: "C: ",
                    text: "Оля, Максим (с работы)",
                    correct: false,
                    id: 2
                },
                {
                    litera: "D: ",
                    text: "Мусик, Гена, Каспарова",
                    correct: false,
                    id: 3
                }
            ]
        }
    ],
        demoQuestions: [{
                id: 0,
                active: true,
                text: "С каким лицом Татев Арутюнян ходит на шоппинг?",
                images: true,
                answers: [{
                        litera: "A: ",
                        text: "Много энтузиазма",
                        url: "https://raw.githubusercontent.com/Kimi-ts/TatevGreedings/master/img/question/1.jpg",
                        correct: false,
                        id: 0
                    },
                    {
                        litera: "B: ",
                        text: "Я куплю тут у вас всё",
                        url: "https://raw.githubusercontent.com/Kimi-ts/TatevGreedings/master/img/question/2.jpg",
                        correct: false,
                        id: 1
                    },
                    {
                        litera: "C: ",
                        text: "Что мне ещё купить?",
                        url: "https://raw.githubusercontent.com/Kimi-ts/TatevGreedings/master/img/question/3.jpg",
                        correct: false,
                        id: 2
                    },
                    {
                        litera: "D: ",
                        text: "O май гад",
                        url: "https://raw.githubusercontent.com/Kimi-ts/TatevGreedings/master/img/question/4.jpg",
                        correct: true,
                        id: 3
                    }
                ]
            },
            {
                id: 1,
                active: false,
                text: "Кто у Арутюнянов глава семьи?",
                answers: [{
                        litera: "A: ",
                        text: "Татев",
                        correct: false,
                        disabled: true,
                        id: 0
                    },
                    {
                        litera: "B: ",
                        text: "Джулиета",
                        correct: true,
                        disabled: false,
                        id: 1
                    },
                    {
                        litera: "C: ",
                        text: "Папа",
                        correct: false,
                        disabled: true,
                        id: 2
                    },
                    {
                        litera: "D: ",
                        text: "Мама",
                        correct: false,
                        disabled: true,
                        id: 3
                    }
                ]
            },
            {
                id: 2,
                active: false,
                text: "Чем Татев больше всего любит заниматься?",
                answers: [{
                        litera: "A: ",
                        text: "Бокс",
                        correct: true,
                        id: 0
                    },
                    {
                        litera: "B: ",
                        text: "Бокс",
                        correct: true,
                        id: 1
                    },
                    {
                        litera: "C: ",
                        text: "Бокс",
                        correct: true,
                        id: 2
                    },
                    {
                        litera: "D: ",
                        text: "Бокс",
                        correct: true,
                        id: 3
                    }
                ]
            }
        ]
    },
    methods: {
        moveToNextQuestion: function (anwsSelectedId) {
            this.displayWarning = false;

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
                this.displayWarning = true;
                return ;
            }

            if (currentQuestionId == questions.length) {
                this.questions[0].active = true;
                this.demoQuestions[0].active = true;
                if (this.activeScreen == 'demoQuiz'){
                    this.activeScreen = 'welcomeScreen';
                    this.displayReadyText = true;
                    this.yesButtonDisabled = false;
                    this.noButtonDisabled = true;
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
                    this.questions[0].active = true;
                    this.demoQuestions[0].active = true;
                    if (this.activeScreen == 'demoQuiz'){
                        this.activeScreen = 'welcomeScreen';
                        this.yesButtonDisabled = false;
                        this.noButtonDisabled = true;
                        this.displayReadyText = true;
                    }
                    else{
                        this.activeScreen = 'finalText';
                    }
                }
            }
        }
    }
})