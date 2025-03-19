// Function to switch between tabs
function openTab(event, tabName) {
    // Hide all tab contents
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach((tab) => {
        tab.classList.remove('active');
    });

    // Remove "active" class from all links in the navbar
    const allLinks = document.querySelectorAll('.navbar a');
    allLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Show the clicked tab's content
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');

    // Add "active" class to the clicked tab's link
    event.currentTarget.classList.add('active');
}

// Automatically open the Home tab on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.navbar a').click();
});

// Get video element and mute button
var video = document.getElementById("myVideo");
var muteButton = document.getElementById("muteBtn");

// Function to toggle mute
muteButton.addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        muteButton.innerText = "Mute";
    } else {
        video.muted = true;
        muteButton.innerText = "Unmute";
    }
});

// Arrow keys to control video
document.addEventListener("keydown", function(event) {
    // Arrow Left (to rewind)
    if (event.key === "ArrowLeft") {
        video.currentTime -= 10; // Rewind 10 seconds
    }
    // Arrow Right (to fast forward)
    if (event.key === "ArrowRight") {
        video.currentTime += 10; // Fast forward 10 seconds
    }
});

// Function to show and hide content sections
function showContent(section) {
    // Hide all content
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the selected content
    var activeSection = document.getElementById(section);
    activeSection.classList.add('active');
}





function toggleInfo(card) {
    card.classList.toggle('active');
  }

  function toggleInfo(card) {
    card.classList.toggle('active');
  }
  function toggleInfo(card) {
    card.classList.toggle('active');
  }


// Array of questions with answers and the correct one
const quizData = [
    {
      question: "Who was the first Emperor of India?",
      options: ["Ashoka", "Chandragupta Maurya", "Akbar", "Harsha"],
      correct: "Chandragupta Maurya"
    },
    {
      question: "In which year did India gain independence from British rule?",
      options: ["1947", "1950", "1930", "1918"],
      correct: "1947"
    },
    {
      question: "Who led the Salt March in 1930?",
      options: ["Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
      correct: "Mahatma Gandhi"
    },
    {
      question: "Which empire built the Qutub Minar?",
      options: ["Delhi Sultanate", "Gupta Empire", "Mughal Empire", "Maurya Empire"],
      correct: "Delhi Sultanate"
    },
    {
      question: "Who was the first woman ruler of India?",
      options: ["Rani Lakshmibai", "Indira Gandhi", "Razia Sultana", "Savitri Bai Phule"],
      correct: "Razia Sultana"
    },
    {
      question: "Which Indian King converted to Buddhism after the Kalinga War?",
      options: ["Chandragupta Maurya", "Ashoka", "Harsha", "Akbar"],
      correct: "Ashoka"
    },
    {
      question: "The Battle of Plassey in 1757 was fought between which two groups?",
      options: ["Marathas and Mughals", "British and Nawab of Bengal", "British and French", "Mughals and Rajputs"],
      correct: "British and Nawab of Bengal"
    },
    {
      question: "Which Indian leader is known as the 'Father of the Nation'?",
      options: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
      correct: "Mahatma Gandhi"
    },
    {
      question: "Who was the founder of the Maurya Empire?",
      options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
      correct: "Chandragupta Maurya"
    },
    {
      question: "Which Indian ruler is known for his religious tolerance and the policy of 'Dīn-i Ilāhī'?",
      options: ["Akbar", "Aurangzeb", "Sher Shah Suri", "Babur"],
      correct: "Akbar"
    }
  ];
  
  // Variable to keep track of the user's score
  let currentQuestion = 0;
  let score = 0;
  
  // Function to start the quiz
  function startQuiz() {
    document.getElementById("start-quiz").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("quiz-result").style.display = "none";
    displayQuestion();
  }
  
  // Function to display the current question and options
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
    let questionHTML = `<h2>${questionData.question}</h2>`;
  
    // Generate options dynamically
    questionData.options.forEach(option => {
      questionHTML += `
        <div class="quiz-option" onclick="checkAnswer('${option}')">
          ${option}
        </div>
      `;
    });
  
    document.getElementById("quiz").innerHTML = questionHTML;
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestion].correct;
    const options = document.querySelectorAll(".quiz-option");
  
    // Disable further answers
    options.forEach(option => option.style.pointerEvents = 'none');
  
    // Mark the selected answer
    if (selectedAnswer === correctAnswer) {
      score++;
      document.getElementById("score").innerText = score;
      options.forEach(option => {
        if (option.innerText === correctAnswer) {
          option.classList.add("correct");
        }
      });
    } else {
      options.forEach(option => {
        if (option.innerText === selectedAnswer) {
          option.classList.add("incorrect");
        }
        if (option.innerText === correctAnswer) {
          option.classList.add("correct");
        }
      });
    }
  
    // Move to the next question after 1 second
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        showResult();
      }
    }, 1000);
  }
  
  // Function to display the result at the end of the quiz
  function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
  }
  
  // Function to restart the quiz
  function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("score").innerText = score;
    startQuiz();
  }
  

  