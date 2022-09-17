const users = document.querySelector('.user');

fetch('https://jsonplaceholder.typicode.com/users').then((resposta)=>{
    const promisebody = resposta.json();

    promisebody.then((body)=>{
        users.forEach((user, index)=>{
            const name = user.querySelector('h1')
            const username = user.querySelector('p')

            name.textContent = body[index].name;
            username.textContent = body[index].username;

        });
    })
});