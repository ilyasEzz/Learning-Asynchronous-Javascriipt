/*
let promesse = new Promise((resolve, reject) => {
  let num = 1 + 2;

  if (num === 3) {
    resolve("Succes!");
  } else {
    reject("Error baby");
  }
});

promesse
  .then(message => {
    console.log(`${message} What inside the then was Executed.`);
  })
  .catch(message => {
    console.log(`${message} What inside the catch was Executed.`);
  });
*/

// Previous exemple refactored
const posts = [
  { title: "Post One", body: "this is the first Post" },
  { title: "Post Two", body: "this is the second Post" }
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false; // to test
      if (!error) {
        resolve();
      } else {
        reject("We got an error!");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => {
      output += `<li>${post.body}</li>`;
    });
    document.querySelector(".getOutput").innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "this is the third Post" })
  .then(getPosts)
  .catch(err => {
    console.log(err);
  });
