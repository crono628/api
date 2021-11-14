const body = document.querySelector('body');
const form = document.forms[0];
const input = document.querySelector('input');
const img = document.querySelector('img');

let theArray;
const getData = (search) => {
  theArray = [];
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=ANIJA3rCnAySYPvxmFd5SOli9wX62Gp5&s=' +
      search,
    { mode: 'cors' }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(`${input.value}`);
});

function dom(element, attributes = {}, text, parent) {
  const elem = document.createElement(element);
  if (attributes) {
    Object.assign(elem, attributes);
  }
  if (text) {
    elem.innerText = text;
  }
  if (parent) {
    parent.appendChild(elem);
  }
  return elem;
}

function display() {
  for (let i = 0; i < 49; i++) {
    let stupidArray = theArray[0];
    let newImg = document.createElement('img');
    newImg.src = stupidArray[i].url;
    body.appendChild(newImg);
  }
}
