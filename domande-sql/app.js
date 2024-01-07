document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const totalQuestionsDisplay = document.getElementById("total-questions");
  const toggleQuestionsBtn = document.getElementById("toggle-questions-btn");
  const backToTopBtn = document.getElementById("back-to-top-btn");
  let questionsVisible = false;

  function getChoiceLetter(index) {
    return String.fromCharCode(65 + index); // Convert index to letter (A = 65 in ASCII)
  }

  toggleQuestionsBtn.addEventListener("click", () => {
    if (!questionsVisible) {
      fetch("questions.json")
        .then(response => response.json())
        .then(data => {
          // Clear previous content
          questionContainer.innerHTML = '';
          const totalQuestions = data.length;
          totalQuestionsDisplay.textContent = `Totale Domande: ${totalQuestions}`;

         data.forEach((questionData, index) => {
            const questionElement = document.createElement("div");
            const questionHeader = document.createElement("h3");
            questionHeader.style.fontSize = "20px";

            const questionNumber = document.createElement("span");
            questionNumber.textContent = `Domanda ${index + 1}`;
            questionNumber.classList.add("badge", "badge-danger", "mr-2");
            
            questionHeader.appendChild(questionNumber);
            questionHeader.innerHTML += `<span class="difficulty-rating"></span><br>${questionData.question}`;

            if (index !== 0) {
              questionElement.style.marginTop = "30px";
            }
            questionElement.appendChild(questionHeader);

            
            const choicesList = document.createElement("ul");
            const choices = questionData.choices;

            choices.forEach((choice, choiceIndex) => {
              const choiceItem = document.createElement("li");
              const choiceLetter = getChoiceLetter(choiceIndex);
              //choiceItem.textContent = `${choiceLetter}. ${choice.text}`;
              if (choice.isSQL) {
                const choiceText = document.createElement("span");
                choiceText.classList.add("choice-text"); // Apply class for choice text
                const choiceLetter = document.createElement("span");
                choiceLetter.classList.add("choice-letter"); // Apply class for choice letter

                choiceText.textContent = choice.text; // Separate element for choice text
                choiceLetter.textContent = getChoiceLetter(choiceIndex) + ". "; // Choice letter

                const sqlChoice = document.createElement("code");
                sqlChoice.classList.add("sql-choice"); // Class for SQL code
                sqlChoice.appendChild(choiceLetter); // Append choice letter
                sqlChoice.appendChild(choiceText); // Append choice text

                choiceItem.appendChild(sqlChoice);
              } else {
                choiceItem.textContent = `${getChoiceLetter(choiceIndex)}. ${choice.text}`;
              }
              choicesList.appendChild(choiceItem);
            });

            const showAnswerButton = document.createElement("button");
            showAnswerButton.textContent = "Mostra Risposte";
            let answerShown = false;

            const correctAnswers = questionData.correctAnswers.map(answerIndex => getChoiceLetter(answerIndex)).join(", ");

            const answerElement = document.createElement("p");
            answerElement.innerHTML = `Risposte Corrette: ${correctAnswers.replace(/([A-Z])\b/g, "<b>$1</b>")}`;
            answerElement.style.display = "none";

            showAnswerButton.addEventListener("click", () => {
              if (!answerShown) {
                answerElement.style.display = "block";
                showAnswerButton.textContent = "Nascondi Risposte";
                answerShown = true;
              } else {
                answerElement.style.display = "none";
                showAnswerButton.textContent = "Mostra Risposte";
                answerShown = false;
              }
            });

            questionElement.appendChild(choicesList);
            questionElement.appendChild(showAnswerButton);
            questionElement.appendChild(answerElement);
            questionContainer.appendChild(questionElement);
          });

          // Smooth scroll to top functionality
          backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          });

          // Replace text content with an arrow-up symbol
          //backToTopBtn.innerHTML = "&#8593;"; // Unicode for arrow-up symbol
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });

      toggleQuestionsBtn.textContent = "Nascondi Domande";
      questionsVisible = true;
    } else {
      questionContainer.innerHTML = '';
      totalQuestionsDisplay.textContent = '';
      toggleQuestionsBtn.textContent = "Mostra Domande";
      questionsVisible = false;
    }
  });
});