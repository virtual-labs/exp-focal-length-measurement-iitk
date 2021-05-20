/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Focal length of the lens A is?", ///// Write the question inside double quotes
            answers: {
                a: "+60cm", ///// Write the option 1 inside double quotes
                b: "+40cm", ///// Write the option 2 inside double quotes
                c: "+65cm", ///// Write the option 2 inside double quotes
                d: "+70cm", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Focal length of the lens B is?",  ///// Write the question inside double quotes
      answers: {
        a: "+120cm",                  ///// Write the option 1 inside double quotes
        b: "+90cm",                  ///// Write the option 2 inside double quotes
        c: "+100cm",
        d: "+105cm",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
                         {
      question: "3. If a concave lens of greater power as compared to the convex lens is kept in the combination such that the distance d =0, then the lens combination will work as:",  ///// Write the question inside double quotes
      answers: {
        a: "Convex lens	",                  ///// Write the option 1 inside double quotes
        b: "Plane glass plate",                  ///// Write the option 2 inside double quotes
        c: "Concave lens",
        d: "NOT",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
                         {
      question: "4. On increasing the distance between the lenses the focal length of the combination:",  ///// Write the question inside double quotes
      answers: {
        a: "decreases",                  ///// Write the option 1 inside double quotes
        b: "increases",                  ///// Write the option 2 inside double quotes
        c: "remains same",
        d: "NOT",
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
