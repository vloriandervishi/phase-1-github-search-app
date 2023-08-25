const uri = "https://developer.github.com/v3/";
document.addEventListener("DOMContentLoaded", () => {
  function gitUsers() {
    fetch(uri)
      .then((response) => response.json())
      .then((show) => console.log(user));
  }
  gitUsers();
});
