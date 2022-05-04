

let myLibrary = [
    {
        title: "Don Quijote",
        author: "Miguel de Cervantes",
        pages: 1345,
        read: true,
 
    },
    {
        title: "EL amor en los tiempos del cólera",
        author: "Gabriel Garcia Marquez",
        pages: 490,
        read: false,
   
    },
    {
        title: "Crime and punishment",
        author: "Fiodor Dostoyevski",
        pages: 650,
        read: true,
   
    },
    {
        title: "The torrents of spring",
        author: "Ernest Hemingway",
        pages: 96,
        read: false,
   
    },
];


let divRoot = document.querySelector("#cardsContainer");

function displayBooks() {
    for (i = 0; i < myLibrary.length; i++) {
        let div1 = document.createElement("div");
        div1.setAttribute("id", i);
        div1.setAttribute("class", "bookCard")
        divRoot.appendChild(div1);
        let newDiv = document.createElement("div");
        newDiv.innerHTML= "Title: " + myLibrary[i].title;
        div1.appendChild(newDiv);
        let newDiv2 = document.createElement("div");
        newDiv2.innerHTML= "Author: " + myLibrary[i].author;
        div1.appendChild(newDiv2);
        let newDiv3 = document.createElement("div");
        newDiv3.innerHTML= myLibrary[i].pages+" pages";
        div1.appendChild(newDiv3);
        let newDiv4 = document.createElement("div");
        newDiv4.innerHTML= "Read: " + myLibrary[i].read;
        newDiv4.setAttribute("id", `read${i}`);
        div1.appendChild(newDiv4);
        //add remove book from library button
        let removeBook = document.createElement("button");
        removeBook.addEventListener("click", (e) => {
            idNum = e.currentTarget.parentNode.getAttribute("id");
            e.currentTarget.parentNode.remove();
            console.log(myLibrary.splice(idNum,1));
          // console.log(idNum);
        });
        removeBook.textContent= "Remove from library";
        div1.appendChild(removeBook);
        //add toggle read button
        let toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = "Toggle read";
        toggleReadBtn.addEventListener("click", (e) => {
            let index = e.currentTarget.parentNode.getAttribute("id");
            if (myLibrary[index].read == false) {
                myLibrary[index].read = true;
            } else if (myLibrary[index].read == true) {
                myLibrary[index].read = false;
            };
            document.querySelector(`#read${index}`).textContent = "Read: " + myLibrary[index].read;
            
        });
        div1.appendChild(toggleReadBtn);
    }
    //limpiar display de error:
    document.querySelector("#display").textContent = "";

    
}

//boton que muestra libros y llama a displayBooks()

let showBookBtn = document.querySelector("#showBooks");
showBookBtn.addEventListener("click", () => {
    divRoot.textContent = "";
});
showBookBtn.addEventListener("click", displayBooks);




//crear constructor de objetos:
function MakeBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

//crear boton e inputs de new book:

let newBookBtn = document.querySelector("#newBook");
let div2 = document.querySelector("#bbb");

newBookBtn.addEventListener("click", () => {

    div2.textContent = "";
    let inputTitle = document.createElement("input");
    inputTitle.setAttribute("id", "title");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("required", "required");
    
    let labelTitle = document.createElement("label");
    labelTitle.textContent = "Title:";
    labelTitle.setAttribute("for", "title")
   //crear ul para estilar inputs
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    div2.appendChild(ul);
    ul.appendChild(li1);

    li1.appendChild(labelTitle);
    li1.appendChild(inputTitle);
    let inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("id", "author");
    let labelAuthor = document.createElement("label");
    labelAuthor.textContent = "Author:";
    labelAuthor.setAttribute("for", "author");
    let li2 = document.createElement("li");
    ul.appendChild(li2)
    li2.appendChild(labelAuthor);
    li2.appendChild(inputAuthor);

    let inputPages = document.createElement("input");
    inputPages.setAttribute("id", "pages");
    inputPages.setAttribute("type", "number");
    let labelPages = document.createElement("label");
    labelPages.textContent = "Pages:";
    labelPages.setAttribute("for", "pages");
    let li3 = document.createElement("li");
    ul.appendChild(li3);
    li3.appendChild(labelPages);
    li3.appendChild(inputPages);

    let inputRead = document.createElement("input");
    inputRead.setAttribute("id", "read");
    inputRead.setAttribute("type", "checkbox");
    let labelRead = document.createElement("label");
    labelRead.textContent = "Read:";
    labelRead.setAttribute("for", "read");
    let li4 = document.createElement("li");
    ul.appendChild(li4);
    li4.appendChild(labelRead);
    li4.appendChild(inputRead);
    
//crear boton "save":

    let saveBtn = document.createElement("button");

    saveBtn.addEventListener("click", () => {
        if (inputTitle.value == ""|| inputAuthor.value =="") {
            console.log("blabla");
            let display = document.querySelector("#display");
            display.textContent = "Error: book name and author fields can't be empty"
            return;
        }
        //limpiar display de error
        document.querySelector("#display").textContent = "";
                
        let newBook = new MakeBook(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked)
        console.log(newBook);
        myLibrary.push(newBook);
    // mostrar libro inmediatamente al guardar
        let newIndex = myLibrary.length - 1;
        let div1 = document.createElement("div");
        div1.setAttribute("id", newIndex);
        div1.setAttribute("class", "bookCard")
        console.log(newIndex);
        divRoot.appendChild(div1);
        let newDiv = document.createElement("div");
        newDiv.innerHTML= "Title: " + myLibrary[newIndex].title;
        div1.appendChild(newDiv);
        let newDiv2 = document.createElement("div");
        newDiv2.innerHTML= "Author: " + myLibrary[newIndex].author;
        div1.appendChild(newDiv2);
        let newDiv3 = document.createElement("div");
        newDiv3.innerHTML= myLibrary[newIndex].pages+" pages";
        div1.appendChild(newDiv3);
        let newDiv4 = document.createElement("div");
        newDiv4.innerHTML= "Read: " + myLibrary[newIndex].read;
        newDiv4.setAttribute("id", `read${newIndex}`);
        div1.appendChild(newDiv4);
        //add remove book from library button
        let removeBook = document.createElement("button");
        removeBook.addEventListener("click", (e) => {
            idNum = e.currentTarget.parentNode.getAttribute("id");
            e.currentTarget.parentNode.remove();
            console.log(myLibrary.splice(idNum,1));
        });
        removeBook.textContent= "Remove from library";
        div1.appendChild(removeBook);
        //add toggle read button
        let toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = "Toggle read";
        toggleReadBtn.addEventListener("click", (e) => {
            let index = e.currentTarget.parentNode.getAttribute("id");
            if (myLibrary[index].read == false) {
                myLibrary[index].read = true;
            } else if (myLibrary[index].read == true) {
                myLibrary[index].read = false;
            };
            document.querySelector(`#read${index}`).textContent = "Read: " + myLibrary[index].read;
            
        });
        div1.appendChild(toggleReadBtn);
        //limpiar campos:
        inputTitle.value = "";
        inputAuthor.value = "";
        inputRead.checked = false;
        inputPages.value = "";
    ///////////////////////////

    });
    saveBtn.textContent = "Save";
    div2.appendChild(saveBtn);

});