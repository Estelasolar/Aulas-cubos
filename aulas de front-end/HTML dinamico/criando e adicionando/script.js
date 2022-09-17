const root = document.querySelector('body');

fetch('https://jsonplaceholder.typicode.com/users').then((resposta)=>{
    const promisebody = resposta.json();

    promisebody.then((body)=>{
        body.forEach((user)=>{
            const div = user.createElement('div');
            div.classList.add('user')


            const name = user.createElement('h1');
            name.textContent =user.name;
           
            const username = user.createElement('p');
            username.textContent = user.username;

            const email = user.createElement('p');
            email.textContent = user.email;

            div.append(name, username, email)

            root.append(div);

        });
    })
});

