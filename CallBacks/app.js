// Synchronous
/* function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
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

createPost({ title: "Post Three", body: "this is the third Post" });

getPosts(); */

// Asynchronous
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
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
