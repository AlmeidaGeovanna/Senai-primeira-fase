// console.log("arquivo usuários carregado")
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(usuarios => console.log(usuarios))