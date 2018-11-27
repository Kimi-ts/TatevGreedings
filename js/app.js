var app = new Vue({
    el: '#app',
    data: {
        message: 'Hi! This is a super-puper Christmas and Birthday quiz for you!',
        showFinalText: false,
        questions: [{
                id: 0,
                active: true,
                text: "What is your profession?",
                answers: [{
                        litera: "A",
                        text: "QA",
                        correct: true
                    },
                    {
                        litera: "B",
                        text: "Developer",
                        correct: false
                    },
                    {
                        litera: "C",
                        text: "Manager",
                        correct: false
                    },
                    {
                        litera: "D",
                        text: "Director",
                        correct: false
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
                        correct: false
                    },
                    {
                        litera: "B",
                        text: "Belarus",
                        correct: true
                    },
                    {
                        litera: "C",
                        text: "Canada",
                        correct: false
                    },
                    {
                        litera: "D",
                        text: "Laplandia",
                        correct: false
                    }
                ]
            }
        ],
        points: [{
                id: 0,
                value: 100,
                active: true
            },
            {
                id: 1,
                value: 500,
                active: false
            },
            {
                id: 2,
                value: "Final Prize!!!",
                active: false
            }
        ]
    },
    methods: {
        moveToNextQuestion: function (currentQuestionId) {
            console.log(currentQuestionId);
            if (currentQuestionId == this.questions.length) {
                this.showFinalText = true;
                this.points[currentQuestionId].active = false;
                this.points[currentQuestionId + 1].active = true;
            } else if(currentQuestionId < this.questions.length){
                this.questions[currentQuestionId].active = false;
                this.points[currentQuestionId].active = false;

                this.points[currentQuestionId + 1].active = true;

                if (currentQuestionId + 1 < this.questions.length){
                    this.questions[currentQuestionId + 1].active = true;
                }
                else{
                    this.showFinalText = true;
                }
            }
        }
    }
})