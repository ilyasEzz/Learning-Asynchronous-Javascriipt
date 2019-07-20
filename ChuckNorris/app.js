document.querySelector(".btn").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = "";

      if ((response.type = "success")) {
        response.value.forEach(el => {
          output += `<li>${el.joke}</li>`;
          document.querySelector(".jokes").innerHTML = output;
        });
      } else {
        output = "Something went wrong!";
      }
    }
  };

  xhr.send();

  e.preventDefault();
}
