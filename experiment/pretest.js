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
            question: "1. Convex lens forms real, inverted and magnified image of any object if object is placed between: ", ///// Write the question inside double quotes
            answers: {
                a: "Pole of the lens and focus", ///// Write the option 1 inside double quotes
                b: "f and 2f", ///// Write the option 2 inside double quotes
                c: "2f and ∞", ///// Write the option 2 inside double quotes
                d: "at focus", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. If d = f1 + f2 then F =?",  ///// Write the question inside double quotes
      answers: {
        a: "0",                  ///// Write the option 1 inside double quotes
        b: "f<sub>1</sub>",                  ///// Write the option 2 inside double quotes
        c: "f<sub>2</sub>",
        d: "∞", 
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },
                          {
      question: "3. On decreasing the distance between the lenses the power of the combination:",  ///// Write the question inside double quotes
      answers: {
        a: "decreases",                  ///// Write the option 1 inside double quotes
        b: "increases",                  ///// Write the option 2 inside double quotes
        c: "remains same",
        d: "NOT",},
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
                          {
      question: "4. The real image formed by the first lens works as -------- for the second lens.",  ///// Write the question inside double quotes
      answers: {
        a: "Image",                  ///// Write the option 1 inside double quotes
        b: "object",                  ///// Write the option 2 inside double quotes
        c: "focus",
        d: "NOT",},
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
