document.addEventListener("DOMContentLoaded", function() {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Function to generate a random color in hexadecimal format
  function getRandomColor() {
    // Generate a random hex color code
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Change the box color when the button is clicked
  changeColorBtn.addEventListener("click", function() {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});
