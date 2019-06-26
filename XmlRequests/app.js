const button = document.querySelector(".btn");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  // xhr.open("Type of request", "file name", "true: if Asynchronous")
  xhr.open("GET", "data.txt", "true");
  console.log(`the current state is: ${xhr.readyState}`);

  xhr.onprogress = function() {
    console.log(`the current state is: ${this.readyState}`);
  };

  xhr.onload = function() {
    // HTTP status:
    // 200 => "OK", 403 => "Forbidden", 404 => "Not found"
    if (this.status === 200) {
      console.log(`the current state is: ${this.readyState}`);
      output.textContent = this.responseText;
      console.log(this.responseText);
    }
  };

  xhr.onerror = function() {
    console.log("An error has occured!");
  };

  xhr.send();
});
