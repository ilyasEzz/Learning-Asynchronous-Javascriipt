const getOutput = document.querySelector(".getOutput");

document.querySelector("#fetch-txt").addEventListener("click", getText);
document.querySelector("#fetch-json").addEventListener("click", getJson);
document.querySelector("#fetch-api").addEventListener("click", getApi);

function getText() {
  let output = "";

  fetch("data.txt")
    .then(response => {
      return response.text();
    })
    .then(data => {
      output += `<li>${data}</li>`;
      getOutput.innerHTML = output;
    });
}

function getJson() {
  let output = "";

  fetch("test.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(person => {
        output += `<li>${person.name}</li>`;
      });

      getOutput.innerHTML = output;
    });
}

function getApi() {
  let output = "";

  fetch("https://api.github.com/users")
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });

      getOutput.innerHTML = output;
    });
}
