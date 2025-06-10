const quizData = [
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "22", correct: false }
      ]
    },
    {
      question: "Which language runs in a web browser?",
      answers: [
        { text: "Java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true }
      ]
    },
    {
      question: "Which is the largest planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Venus", correct: false }
      ]
    }, 
  {
      question: "which is the largest desert in the world?",
  answers:[
        { text: "kalahari", correct: false },
        { text: "Gobi", correct: false },
        { text: "antarctic", correct: true },
        { text: "sahara", correct: false }
      ]
    },
    {
      question:"which is the  smallest countryin the world?",
      answers: [
        { text: "Srilanka", correct: false },
        { text: "Nepal", correct: false },
        { text: "Bhutan", correct: false },
        { text: "Vatican City", correct: true }
      ]
    },
    {
      question: "which is the biggest animal in the world?",
      answers: [
        { text: "shrak", correct: false },
        { text: "Blue whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false }
      ]
    }, 
  {
      question: "what is the capital of France?",
  answers:[
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Lisbon", correct: false }
      ]
    },
    {
      question:"which language runs in a web browser?",
      answers: [
        { text: "java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false },
        { text: "java script", correct: true }
      ]
    },
    {
      question: "which is the smallest continent in the world?",
      answers: [
        { text: "asia", correct: false },
        { text: "Australia", correct: true },
        { text: "Africa", correct: false },
        { text: "Arctic", correct: false }
      ]
    }, 
  {
      question: "Who painted the famous artwork the starry Night?",
      answers: [
        { text: "Pablo Picasso", correct: false },
        { text: "Vincent van gogh", correct: true },
        { text: "Leonardo da vincl", correct: false },
        { text: "Claude monet", correct: false }
      ]
    }
  ];
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    answerButtons.forEach(btn => {
      const option = btn.dataset.answer;
      btn.textContent = currentQuiz[option];
      btn.disabled = false;
    });
  }
  
  answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      answerButtons.forEach(b => b.disabled = true);
      if (btn.dataset.answer === quizData[currentQuestion].correct) {
        score++;
        btn.style.backgroundColor = "lightgreen";
      } else {
        btn.style.backgroundColor = "salmon";
      }
    });
  });
  
  nextBtn.addEventListener("click", () => {
    answerButtons.forEach(btn => btn.style.backgroundColor = "");
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    questionEl.style.display = "none";
    answerButtons.forEach(btn => btn.style.display = "none");
    nextBtn.style.display = "none";
    scoreEl.style.display = "block";
    scoreEl.textContent = score;
  }
  
  loadQuestion();
