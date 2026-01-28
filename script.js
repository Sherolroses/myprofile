// 1. Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const sentences = [
    "I am currently a dental assistant at Dental and Ortho while studying a Bachelor of Computer Science in Computing at the University of South Africa.",
    "I am passionate about creating useful tools and building websites that solve real-life problems.",
    "While learning HTML, CSS, JavaScript, C++, and Python, I'm constantly seeking to expand my skills through hands-on projects.",
    "I believe in using my technical knowledge to improve efficiency, simplify processes, and make a positive difference in people's lives.",
    "My goal is to continue learning, developing my skills, and contributing to projects that have a meaningful impact in the world.",
    "I aspire to have my own company and pursue a PhD to further my knowledge and expertise in technology and innovation.",
    "I am driven to not only make a difference in my field but also to create opportunities for others and continue growing both professionally and academically."
  ];

  const typewriter = document.getElementById("typewriter");
  let sentenceIndex = 0;
  let charIndex = 0;

  function typeSentence() {
    if (sentenceIndex < sentences.length) {
      const currentSentence = sentences[sentenceIndex];
      if (charIndex < currentSentence.length) {
        typewriter.innerHTML += currentSentence.charAt(charIndex);
        charIndex++;
        setTimeout(typeSentence, 20); // Typing speed
      } else {
        typewriter.innerHTML += "<br><br>"; // Space between sentences
        charIndex = 0;
        sentenceIndex++;
        setTimeout(typeSentence, 500); // Delay before next sentence
      }
    }
  }

  typeSentence();
});
  

    const button = document.querySelector('#myButton');
    const form = document.querySelector('#myForm');
    const outputDiv = document.querySelector('#output');

    // 3. Event listeners
    button.addEventListener('click', function () {
        // 4. Event handling logic
        alert('Button clicked!');
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent form reload
        const inputValue = form.querySelector('input[name="name"]').value;
        outputDiv.textContent = `Hello, ${inputValue}`;
    });

    // 5. Functions (modular logic)
    function updateUI(data) {
        outputDiv.textContent = data;
    }

    // 6. Fetch calls or async logic (if any)
    // Example: Load data from an API
    fetch('/api/data')
        .then(res => res.json())
        .then(data => updateUI(data.message))
        .catch(err => console.error(err));


