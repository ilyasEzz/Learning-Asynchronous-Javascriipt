document.querySelector(".btn").addEventListener("click", loadTest);

function loadTest() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "test.json", true);

  xhr.onload = function() {
    if ((this.status = 200)) {
      //console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(customer => {
        output += `<ul>
            <li>id: ${customer.id}</li>
            <li>name: ${customer.name}</li>
            <li>compagnie: ${customer.compagnie}</li>
            <li>phone: ${customer.phone}</li>
        </ul>    
      `;
      });

      document.querySelector("#output").innerHTML = output;
    }
  };

  xhr.send();
}
