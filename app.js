// Passo 2
banco = [
    
]

// Passo 1
/* 
<label class="todo-item" id="todoItem">
    <input type="checkbox">
    <p>Teste teste</p>
    <input type="button" value="x">
</label>
*/

const criarItem = (tarefa, status, /*Passo 8 - Adicionar Indice */indice) =>{
    const item = document.createElement('label')
    item.classList.add('todo-item')
    item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}>
    <p>${tarefa}</p>
    <input type="button" value="x" data-indice=${indice}> 
    `
    document.getElementById('todoList').appendChild(item)
}
// Passo 4
const limparTarefas = () =>{
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}
// Passo 3
const atualizarTela = () =>{
    limparTarefas();
    banco.forEach(/*Passo 8 - Adicionar Indice */(item, indice) => criarItem(item.tarefa,item.status, indice))
}
// Passo 6
const inserirItem = (e) =>{
    const tecla = e.key;
    const texto = e.target.value
    if(tecla === 'Enter'){
        banco.push({tarefa:texto,status:''})        
        atualizarTela()
        e.target.value = ''
    }
}

// Passo 6.1
const iconInserirItem = () =>{
    const inputTexto = document.getElementById('newItem')
    const texto = inputTexto.value 
    banco.push({tarefa:texto, status:''})
    atualizarTela()
    inputTexto.value = ''
}

// Passo 5
document.getElementById('newItem').addEventListener('keypress',inserirItem)
// Passo 5.1
document.getElementById('iconNewItem').addEventListener('click', iconInserirItem)
//Passo 9
const removeItem = (indice) =>{
    banco.splice(indice,1)
    atualizarTela()
}
//Passo 10
const atualizarStatus = (indice) =>{
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    atualizarTela()    
}
// Passo 8
const clickItem = (e) =>{
    const elemento = e.target
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removeItem(indice);
    }else if(elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizarStatus(indice)
    }
}

// Teste git
// Passo 7
document.getElementById('todoList').addEventListener('click', clickItem)

// Passo 3
atualizarTela()


