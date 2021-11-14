const body = document.querySelector('body');
const form = document.forms[0];
const input = document.querySelector('input');
const img = document.querySelector('img');
const div = document.querySelector('div');

let theArray;

const getData = (search) => {
  theArray = [];
  fetch(
    'https://api.giphy.com/v1/gifs/search?api_key=ANIJA3rCnAySYPvxmFd5SOli9wX62Gp5&q=' +
      search,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      theArray.push(response);
    })
    .then(display);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(`${input.value}`);
  clear();
});

input.addEventListener('submit', clear);

function display() {
  for (let i = 0; i < 49; i++) {
    let stupidArray = theArray[0].data;
    let newImg = document.createElement('img');
    newImg.src = stupidArray[i].images.original.url;
    div.appendChild(newImg);
  }
}

function clear() {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
