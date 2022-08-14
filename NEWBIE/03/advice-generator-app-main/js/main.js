const button = document.getElementById("getData");
const description = document.getElementById("description");
const id = document.getElementById("title_id");

const load = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  id.innerHTML = `ADVICE # ${data.slip.id}`;
  description.innerHTML = `"${data.slip.advice}"`;
};
const getData = (e) => {
  e.preventDefault();
  load();
};
button.addEventListener("click", getData);
load();
