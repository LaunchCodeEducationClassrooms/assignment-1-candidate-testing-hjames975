const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride", 
  "True",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];
let questionNumber = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

let candidateName = input.question("What is your name? ");
console.log(`Candidate Name: ${candidateName}`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for(let i = 0; i < questions.length; i ++){
     questionNumber++;
    //console.log(`${questionNumber}) ${questions[i]}`);
    candidateAnswers.push(input.question(`${questionNumber}) ${questions[i]} `));
    console.log(`Your answer: ${candidateAnswers[i]}`);
    console.log(`Correct answer: ${correctAnswers[i]}\n`);
    //if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
     // console.log("CORRECT!");
   // }
   // else{
    //  console.log("INCORRECT");
    //}
  }


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = 0;
  let score = 0;

for(let i = 0; i < correctAnswers.length; i ++){
  if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    score ++;
    //console.log(`Correct Answer!\n You answered ${candidateAnswers[i]}.\n The correct answer is ${correctAnswers[i]}.`);
  }
  //else(console.log(`Incorrect Answer!\n You answered ${candidateAnswers[i]}.\n The correct answer is ${correctAnswers[i]}.`));
  
}
  
grade = ((score / 5)* 100);
let status = "";

if(grade < 80){
  status = ("FAILED")
}
else{
  status = ("PASSED")
}

console.log(`\n>>> Overall Grade: ${grade}% (${score} of 5 correct) <<<`);
console.log(`>>> Status: ${status} <<<`);
  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};