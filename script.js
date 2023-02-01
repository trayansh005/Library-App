const addBookBtn = document.querySelector(".add-book-icon");
const submitBookBtn = document.querySelector("#submit-btn");
const addBookPlaceholder = document.querySelector("#add-book");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const shelf = document.querySelector(".shelf");

const bookContainer = document.querySelector(".book");
const modalBox = document.querySelector(".book-details-popup");

let myLibrary = [];

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}

	addBookToLibrary() {
		myLibrary.push(this);
	}
}

// let newBook = prompt("Please enter the title");
// let newAuthor = prompt("Please enter the author");
// let newPages = Number(prompt("Please enter the pages"));
// let newRead = prompt("Please enter if read");

// const book = new Book(newBook, newAuthor, newPages, newRead);
// book.addBookToLibrary();

// console.log(myLibrary);

addBookBtn.addEventListener("click", () => {
	modalBox.style.visibility = "visible";
});

submitBookBtn.addEventListener("click", () => {
	const newBook = new Book(title.value, author.value, pages.value, read.checked);
	newBook.addBookToLibrary();
	console.log(myLibrary);

	const newDiv = document.createElement("div");
	newDiv.classList.add("book");
	const newDiv2 = document.createElement("div");
	newDiv2.classList.add("book-info");
	newDiv2.innerHTML = `<p id="book-title">${title.value}</p>
    <p>by</p>
    <p id="book-author">${author.value}</p>`;
	newDiv.appendChild(newDiv2);
	const bookImg = document.createElement("img");
	bookImg.src = "images/book-education-closed-free-vector-removebg-preview.png";
	newDiv.appendChild(bookImg);
	// const checkMark = document.createElement("img");
	// checkMark.src = "images/checkmark.png";
	// checkMark.id = "read-icon";
	// newDiv.appendChild(checkMark);
	const span = document.createElement("span");
	span.id = "book-pages";
	span.innerHTML = `${pages.value}`;
	newDiv.appendChild(span);

	const newDiv3 = document.createElement("div");
	newDiv3.classList.add("buttons");
	const markButton = document.createElement("button");
	const removeButton = document.createElement("button");
	markButton.classList.add("mark-read");
	removeButton.classList.add("remove");
	markButton.innerHTML = "Read";
	removeButton.innerHTML = "Remove";

	newDiv3.appendChild(markButton);
	newDiv3.appendChild(removeButton);
	newDiv.appendChild(newDiv3);

	shelf.insertBefore(newDiv, addBookPlaceholder);

	modalBox.style.visibility = "hidden";

	addButtons();
});

function addButtons() {
	let bookDivs = document.querySelectorAll(".book");
	for (let i = 0; i < bookDivs.length; i++) {
		let markRead = bookDivs[i].querySelectorAll(".mark-read");
		let removeBtn = bookDivs[i].querySelectorAll(".remove");
		for (let j = 0; j < markRead.length; j++) {
			markRead[j].addEventListener("click", () => {
				console.log("clicked");
				const checkMark = document.createElement("img");
				checkMark.src = "images/checkmark.png";
				checkMark.id = "read-icon";
				bookDivs[i].appendChild(checkMark);
			});
		}

		for (let y = 0; y < removeBtn.length; y++) {
			removeBtn[y].addEventListener("click", () => {
				bookDivs[i].remove();
			});
		}
	}
}
