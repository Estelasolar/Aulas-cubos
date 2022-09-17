const input = document.querySelector('input')
const tarefas = document.querySelector('ul')

input.addEventListener('keydown', (event)=>{
    if (event.kay !== 'Enter' || input.value ==='') return 
        
    const tarefa = document.createElement('li');
    const descricao = document.createElement('span');
    descricao.textContent = input.value
    descricao.addEventListener('click',()=>{
        descricao.style.textDecoration= 'line-through'
    });

    const botao = document.createElement('button');
    botao.textContent = 'X'
    botao.addEventListener('click',()=>{
        tarefa.remove
    })


    tarefa.append(descrição,botao);
    tarefas.append(tarefa);

    input.value = '';
})