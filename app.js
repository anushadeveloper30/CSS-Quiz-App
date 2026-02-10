const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const loginContainer = document.getElementById('login-container');
const quizContainer = document.getElementById('quiz-container');
const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const score = document.getElementById('score');
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');

const loginError = document.getElementById('login-error');

loginBtn.addEventListener('click', () => {
    if (
        username.value === 'champs' &&
        password.value === 'champs123'
    ){
        loginContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        loadQuiz();
    } else {
        swal.fire({
        title: 'Warning',
        text: '❌ Invalid username or password',
        icon: 'error'
})
    }

});

const questions = [
  { q: "1. What does CSS stand for ?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "0" },

  { q: "2. Where is the correct place to link an external CSS file?", options: ["In the <head> section", "In the <body> section", "At the end of HTML", "Inside <title> tag"], answer: "0" },

  { q: "3. Which HTML tag is used to apply internal CSS?", options: ["css", "script", "style", "link"], answer: "2" },

  { q: "4. Which attribute is used for inline CSS?", options: ["class", "id", "style", "css"], answer: "2" },

  { q: "5. Which CSS property changes text color?", options: ["font-color", "color", "text-color", "bgcolor"], answer: "1" },

  { q: "6. Which property controls text size?", options: ["text-style", "font-size", "text-size", "font-style"], answer: "1" },

  { q: "7. Which CSS property makes text bold?", options: ["font-weight", "font-style", "text-bold", "weight"], answer: "0" },

  { q: "8. How do you select an element with id 'box'?", options: ["#box", ".box", "box", "*box"], answer: "0" },

  { q: "9. How do you select elements with class 'item'?", options: ["#item", "item", ".item", "*item"], answer: "2" },

  { q: "10. Which property sets background color?", options: ["color", "bgcolor", "background-color", "background"], answer: "2" },

  { q: "11. Which CSS property is used to change font?", options: ["font-family", "font-style", "font-weight", "text-font"], answer: "0" },

  { q: "12. Which unit is relative in CSS?", options: ["px", "cm", "em", "mm"], answer: "2" },

  { q: "13. Which property adds space inside an element?", options: ["margin", "padding", "border", "spacing"], answer: "1" },

  { q: "14. Which property adds space outside an element?", options: ["padding", "margin", "border", "outline"], answer: "1" },

  { q: "15. Which property is used to create rounded corners?", options: ["border-style", "border-radius", "corner-radius", "round"], answer: "1" },

  { q: "16. Which CSS property hides an element?", options: ["display: none", "visibility: show", "opacity: 1", "overflow: hidden"], answer: "0" },

  { q: "17. Which display value shows elements in one line?", options: ["block", "inline", "flex", "none"], answer: "1" },

  { q: "18. Which property controls element transparency?", options: ["visibility", "opacity", "display", "filter"], answer: "1" },

  { q: "19. Which CSS position value is default?", options: ["relative", "absolute", "static", "fixed"], answer: "2" },

  { q: "20. Which property is used to change cursor?", options: ["mouse", "pointer", "cursor", "hover"], answer: "2" },

  { q: "21. Which property sets element width?", options: ["size", "width", "max-width", "length"], answer: "1" },

  { q: "22. Which property sets element height?", options: ["height", "size", "max-height", "length"], answer: "0" },

  { q: "23. Which CSS property is used for shadow?", options: ["text-shadow", "box-shadow", "shadow", "element-shadow"], answer: "1" },

  { q: "24. Which property aligns text center?", options: ["align", "text-align", "center", "font-align"], answer: "1" },

  { q: "25. Which pseudo-class is used on hover?", options: [":click", ":focus", ":hover", ":active"], answer: "2" },

  { q: "26. Which CSS property removes list bullets?", options: ["list-style", "list-style-type", "bullet", "style"], answer: "1" },

  { q: "27. Which property controls overflow content?", options: ["flow", "overflow", "scroll", "hidden"], answer: "1" },

  { q: "28. Which CSS is best for responsive design?", options: ["Float", "Flexbox", "Inline", "Block"], answer: "1" },

  { q: "29. Which property is used to make layout grid?", options: ["flex", "grid", "block", "inline"], answer: "1" },

  { q: "30. Which property sets background image?", options: ["image", "background-img", "background-image", "bg-image"], answer: "2" },

  { q: "31. Which value repeats background image?", options: ["repeat", "no-repeat", "cover", "contain"], answer: "0" },

  { q: "32. Which property changes element order in flex?", options: ["order", "position", "index", "align"], answer: "0" },

  { q: "33. Which CSS property animates elements?", options: ["transition", "animation", "transform", "motion"], answer: "1" },

  { q: "34. Which property rotates elements?", options: ["rotate", "transform", "animation", "transition"], answer: "1" },

  { q: "35. Which property makes website responsive?", options: ["media query", "flex", "grid", "viewport"], answer: "0" },

  { q: "36. Which symbol is used for comments in CSS?", options: ["//", "!-- --", "/* */", "#"], answer: "2" },

  { q: "37. Which property controls z-axis order?", options: ["z-index", "index", "layer", "order"], answer: "0" },

  { q: "38. Which property makes text italic?", options: ["font-style", "font-weight", "text-style", "italic"], answer: "0" },

  { q: "39. Which CSS property changes line spacing?", options: ["line-height", "letter-spacing", "word-spacing", "text-space"], answer: "0" },

  { q: "40. Which CSS property changes letter spacing?", options: ["line-height", "word-spacing", "letter-spacing", "text-align"], answer: "2" },
];

function loadQuiz() {
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
      <h3>${q.q}</h3>
      ${q.options
        .map(
          (opt, i) =>
            `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label>`
        )
        .join("")}
    `;
    quizForm.appendChild(div);
  });
  submitBtn.classList.remove("hidden");
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let correct = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.ans) correct++;
  });

   const wrong = questions.length - correct;
  const marks = (correct / questions.length) * 100;

  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  document.getElementById("score").textContent = `Your Score: ${marks.toFixed(2)}%`;
  document.getElementById("correct").textContent = `✅ Correct Answers: ${correct}`;
  document.getElementById("wrong").textContent = `❌ Wrong Answers: ${wrong}`;
});
     
