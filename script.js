const data = [
  {
    question: "How old is Mark?",
    a: "10",
    b: "15",
    c: "20",
    d: "25",
    correct_answer: "c",
  },
  {
    question: "How many times i start this case?",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct_answer: "b",
  },
  {
    question: "How?",
    a: "Yes",
    b: "No",
    c: "Maybe",
    d: "Of course no",
    correct_answer: "a",
  },
];

const question_text = document.getElementById("Question");

const btn = document.getElementById("Submit");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const total_count = document.getElementById("total_count");
const correct_count = document.getElementById("correct_count");

total_count.innerText = data.length;

let question_number = 0;

loadQuiz();

function loadQuiz() {
  const current_question_data = data[question_number];

  question_text.innerText = current_question_data.question;
  a_text.innerText = current_question_data.a;
  b_text.innerText = current_question_data.b;
  c_text.innerText = current_question_data.c;
  d_text.innerText = current_question_data.d;
}

btn.addEventListener("click", () => {
  const current_question_data = data[question_number];

  let radio_inputs = document.getElementsByName("answer");
  for (let i = 0; i < radio_inputs.length; i++) {
    if (
      radio_inputs[i].checked &&
      radio_inputs[i].id == current_question_data.correct_answer
    ) {
      correct_count.innerText = Number(correct_count.textContent) + 1;
    }
  }
  question_number++;
  loadQuiz();
});
