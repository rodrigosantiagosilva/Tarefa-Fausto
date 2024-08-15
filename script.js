// Selecionando elementos do DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


// Função para adicionar uma nova tarefa
function addTask(taskText) {
    if (taskText.trim() === "") return;

    // Criando um novo item de lista
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("list");



    const changeButton = document.createElement("button");
    changeButton.textContent = "Alterar Tarefa";
    changeButton.classList.add("changeButton");
    console.log('eu estou funcionando')
    changeButton.addEventListener('click',function(){




        li.remove();
        updateTaskCount();
        window.prompt('Altere sua tarefa');
        




    });
    li.appendChild(changeButton);



    // Criando botão de remover tarefa
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.classList.add("removeButton");

    // Adicionando evento de clique ao botão de remover
    removeButton.addEventListener('click', function () {
        li.remove();
        updateTaskCount();
    });

    // Adicionando o botão ao item da lista
    li.appendChild(removeButton);

    const correctButton = document.createElement("button");
    correctButton.textContent ="Concluida";
    correctButton.classList.add("correctButton");
    
    correctButton.addEventListener('click',function(){
        removeButton.classList.remove('removeButton');
        removeButton.classList.add('Blank');
        correctButton.classList.remove('correctButton');
        correctButton.classList.add('Blank');
        li.classList.remove('list');
        li.classList.add('finish');
        
        updateTaskCount();
        
    });
    li.appendChild(correctButton);
    // Adicionando o item à lista de tarefas
    taskList.appendChild(li);

    // Atualizando a contagem de tarefas
    updateTaskCount();

}



    const correctButton = document.createElement("button");
    correctButton.textContent ="Concluida";
    correctButton.classList.add("correctButton");

// Função para atualizar a contagem de tarefas
function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}

// Evento de clique para adicionar tarefa
addTaskButton.addEventListener('click', function () {
    addTask(taskInput.value);
    taskInput.value = '';
});

// Evento de teclado para adicionar tarefa ao pressionar "Enter"
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});
