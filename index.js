let container = document.querySelector('#root')
let counter = document.querySelector('#counter')
console.log(container);
let arr = []
const getData = () => {
  fetch('https://64662253228bd07b355c9c1c.mockapi.io/din')
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    let card = ''
    data.map(item => {
      card += cardFunc(item);
    });
    container.innerHTML = card
    counter.innerText = data.length
  })
} 
getData() 


function cardFunc (item) {
  return `
  <div class="guest">
      <p>${item.name}</p>
      <p>${item.phone}</p>
      <button onclick="handleDel(${item.id})">delete</button>
  </div>
  `
}

const handleDel = (id) => {
  fetch(
    `https://64662253228bd07b355c9c1c.mockapi.io/din/${id}`, {
      method: "DELETE"
    })
  alert("user deleted");
  location.reload()
}