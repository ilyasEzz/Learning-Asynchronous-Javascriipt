document.querySelector(".btn").addEventListener("click", loadTest);

function loadTest() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "test.json", true);

  xhr.onload = function() {
    if ((this.status = 200)) {
      //console.log(this.responseText);

      const jsonFile = JSON.parse(this.responseText);

      const output = `<ul>
            <li>id: ${jsonFile.id}</li>
            <li>name: ${jsonFile.name}</li>
            <li>compagnie: ${jsonFile.compagnie}</li>
            <li>phone: ${jsonFile.phone}</li>
        </ul>    
      `;

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}
