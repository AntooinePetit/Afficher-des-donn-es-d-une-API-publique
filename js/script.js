async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

async function populateUsers() {
  const users = await getData();
  const div = document.querySelector("div");
  users.forEach((user) => {
    console.log(user);
    const article = document.createElement("article");
    article.innerHTML = `<h2 id="name">${user.name}</h2>
      <a href="mailto:${user.email}" id="email">${user.email}</a>
      <a href="tel:${user.phone}" id="phone">${user.phone}</a>
      <a href="${user.website}" id="website">${user.website}</a>`;
    div.insertAdjacentElement("beforeend", article);
  });
}

try {
  populateUsers();
} catch (e) {
  console.error(`Erreur détectée : ${e}`);
}
