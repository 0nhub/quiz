(function() {

    let cards = [{
            question: "This is a question 1?",
            answer: "This is a answer 1.",
        },
        {
            question: "This is a question 2?",
            answer: "This is a answer 2.",
        },
        {
            question: "This is a question 3?",
            answer: "This is a answer 3.",
        },
        {
            question: "This is a question 4?",
            answer: "This is a answer 4.",
        },
        {
            question: "This is a question 5?",
            answer: "This is a answer 5.",
        },
        {
            question: "This is a question 6?",
            answer: "This is a answer 6.",
        },
    ];
    let index = [];

    function loadIndexes() {
        for (let i = 0; i < cards.length; i++) {
            index[i] = i;
        }
        loadQuestion();
    }

    let numberOfQuestions;
    let cardIndex;

    function loadQuestion() {
        numberOfQuestions = index.length;
        if (numberOfQuestions > 0) {
            cardIndex = Math.floor(
                Math.random() * Math.floor(numberOfQuestions - 1)
            );
            document.getElementById("question").innerHTML =
                cards[index[cardIndex]].question;
        }
    }

    function loadAnswer() {
        document.getElementById("answer").innerHTML =
            cards[index[cardIndex]].answer;
        index = index.filter(function(v, i, a) {
            return index[cardIndex] != v;
        });
        numberOfQuestions = index.length;
    }

    function clearAnswer() {
        document.getElementById("answer").innerHTML = "";
    }

    function buttonClick() {
        let Button = document.getElementById("button");
        if (Button.innerHTML == "Next") {
            clearAnswer();
            loadQuestion();
            if (numberOfQuestions <= 0) {
                loadIndexes();
            }
            Button.innerHTML = "See answer";
        } else {
            loadAnswer();
            Button.innerHTML = "Next";
        }
    }

    loadIndexes();
})();