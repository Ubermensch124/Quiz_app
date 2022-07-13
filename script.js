const data = [
  {
    question: "How old is Mark?",
    a: "10",
    b: "15",
    c: "20",
    d: "25",
    correct: "c",
  },
  {
    question: "How many times i start this case?",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct: "b",
  },
  {
    question: "How?",
    a: "Yes",
    b: "No",
    c: "Maybe",
    d: "Of course no",
    correct: "a",
  },
];

const question_el = document.getElementById("Question");

const btn = document.getElementById("Submit");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let current_question = 0;

loadQuiz();

function loadQuiz() {
  const current = data[current_question];

  question_el.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;
}

btn.addEventListener("click", () => {
  current_question++;
  loadQuiz();
});
