function gitUsers(user) {
  fetch(`https://api.github.com/search/users?q=${user}`)
    .then((response) => response.json())
    .then((show) => {
      Object.values(show.items).forEach((users) => {
        const avatar = users.avatar_url;
        const login = users.login;
        const url = users.html_url;
        const userListEl = document.querySelector("#user-list");
        const loginEl = document.createElement("li");
        const avatarEl = document.createElement("img");
        const urlEl = document.createElement("li");
        loginEl.textContent = login;
        avatarEl.src = avatar;
        urlEl.textContent = url;
        userListEl.append(loginEl, avatarEl, urlEl);
        // username, avatar and a link to their profile.
      });
    })
    .catch((error) => console.log(error.message));
  function getRepo() {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((repo) => console.log(repo));
  }
  getRepo();
}

document.addEventListener("DOMContentLoaded", () => {
  const getUserEl = document.getElementById("github-form");

  getUserEl.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(getUserEl.search.value);
    const findUser = getUserEl.search.value;

    let trimeedfindUser = findUser.split(" ").join("");
    gitUsers(trimeedfindUser);
  });
});
