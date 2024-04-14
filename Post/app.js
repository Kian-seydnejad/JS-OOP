

class Post {
  constructor(title, author, body) {
    this.title = title;
    this.author = author;
    this.body = body;
  }
}
class UI {
  addPostToList(post) {
    // Get List Post
    const list = document.getElementById("posts-list");
    const posting = document.createElement("tr");
    posting.innerHTML = `
          <th>${post.title}</th>
          <td>${post.author}</td>
          <td>${post.body}</td>
          <td class= "d-flex ">
           <i class="bi bi-x-circle text-danger ml-3 " ></i>
          </td>`;
    list.appendChild(posting);
  }
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('body').value = '';
  }
}
class Store {
  static getPosts() {
    let posts;
    if(localStorage.getItem('posts') === null) {
      posts = [];
    } else {
      posts = JSON.parse(localStorage.getItem('posts'));
    }

    return posts;
  }

  static displayPosts() {
    const posts = Store.getPosts();

    posts.forEach(function(post){
      const ui  = new UI;

      ui.addPostToList(post);
    });
  }

  static addPost(post) {
    const posts = Store.getPosts();

    posts.push(post);

    localStorage.setItem('posts', JSON.stringify(posts));
  }


  static removePost(title) {
    const posts = Store.getPosts()
    posts.forEach(function(post,index){
      if (post.title === title) {
        posts.splice(index,1)
      }
    })
    localStorage.setItem("posts", JSON.stringify(posts))
  }
}
document.addEventListener('DOMContentLoaded', Store.displayPosts);
function PopUp(type, message) {
  const alert = document.createElement("div")
  const append = document.querySelector(".append")
  alert.className ="alert alert-" + type
  alert.appendChild(document.createTextNode(message))
  append.appendChild(alert);
  setTimeout(() => {
    document.querySelector(".alert").remove()
  }, 3000);
}



const PostBtn = document.getElementById("PostBtn")
PostBtn.addEventListener("click", function(e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const body = document.getElementById("body").value;
  if (title == "" || author == "" || body == "") {
    PopUp("danger", "Error: All fields should be completed to create a post")
   }else{
      const post = new Post(title, author, body);
  Store.addPost(post)    
  console.log(localStorage.getItem("posts"));
  const ui = new UI();
  ui.addPostToList(post);
   ui.clearFields();
   PopUp("success", "Post created")
   }
  e.preventDefault();
});


const posts = document.getElementById('posts-list')
posts.addEventListener('click', function (y) {
  if (y.target.classList.contains('bi-x-circle')) {
    console.clear()
    console.log(y.target);
    const tr = y.target.closest('tr');
    const title = tr.firstElementChild.textContent
    console.log(title);
    Store.removePost(title)
    tr.remove()
    PopUp("warning","Post deleted")
  }
  y.preventDefault()
});


////////////////////////////////////////////

class Laptop{
  constructor(color){
    this.color = color;
  }
  getBrand() {
    console.log(this.color);
    return 'Apple';
  }
}


const newLaptop = new Laptop('red');
newLaptop.getBrand();

const laptopObject = new Laptop('gray') //create object
Math.pow()
const laptopObject2 = new Laptop('black')

console.log(laptopObject.color);
console.log(laptopObject.getBrand());

console.log(laptopObject2.color);
console.log(laptopObject2.getBrand());


// Define a class named Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Additional methods can be added to the class
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an object (instance) from the Person class
let person1 = new Person("John Doe", 25);

// Access properties and methods of the object
console.log(person1.name); // Output: John Doe
console.log(person1.age);  // Output: 25

person1.sayHello(); // Output: Hello, my name is John Doe and I'm 25 years old.


////////////////////////////////

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      resolve(data);
    }, 2000);
  });
};














