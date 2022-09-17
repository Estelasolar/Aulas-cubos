const root = document.querySelector('body')

fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((resposta)=>{

    const promisebody = resposta.json();


    promisebody.then((body)=>{
        body.forEach((photo) => {
            const div = document.createElement("div")
            div.classList.add('photo')

            const img = document.createElement('img');
            img.src = photo.url;


            const p = document.createElement('p');
            p.textContent = photo.title;

            div.append(img,p);
            root.append(div);
        });
    })

})