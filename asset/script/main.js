
let task = document.querySelector('#task')
let submit = document.querySelector('#submit')
let taskList = document.querySelector('#taskList')
let taskOver = document.querySelector('#taskOver')
let deleteNav = document.querySelector('#deleteNav')
let intro = document.querySelector("#intro")
let alertMessage = document.querySelector(' #alert-message')


submit.addEventListener('click', function (event) {
    event.preventDefault();
    let taskText = task.value;
    let existingMessage = alertMessage.querySelector('.message');

    if (taskText === '') {
        if (!existingMessage) {
            let message = document.createElement('p');
            message.innerHTML = `<p class="message">Veuillez entrer une tâche.</p>`;
            alertMessage.appendChild(message);
            alertMessage.classList.remove('hidden');
            submit.classList.add('hidden');

            alertMessage.addEventListener('click', () => {
                alertMessage.classList.add('hidden');
                message.remove();
                submit.classList.remove('hidden');
            }, { once: true });
        }
    } else {
        if (existingMessage) {
            existingMessage.remove();
            alertMessage.classList.add('hidden');
            submit.classList.remove('hidden');
        }
        intro.classList.remove('hidden');
        let li = document.createElement('li');
        li.innerHTML = `<div>
            <img src="./asset/style/Image/point.png" alt="" class="pointer">
            ${taskText}</div><i class="fas fa-times" id="delete"></i>`;
        taskList.appendChild(li);
        deleteLi(li);
        done(li);
        task.value = '';
    }


});

// supprime une tache non réalisée définitvement

function deleteLi(li) {
    let deleteTask = li.querySelector('.fa-times')
    deleteTask.addEventListener('click', function () {
        event.stopPropagation()
        li.remove()
    })
}
/// Finir une tache en cliquant sur celle-ci

function done(li) {
    let clickCount = 0
    li.addEventListener('click', function () {
        clickCount++
        if (taskOver && clickCount === 1) {
            taskOver.appendChild(li)
            li.style.textDecoration = "line-through";
            deleteNav.style.display = "block"
        } else if (clickCount === 2) {
            li.remove()
            clearing()
        }
        if (taskList.querySelectorAll('li').length === 0) {
            intro.classList.add('hidden')
        }
    });
}

// fais disparaitre le message pour la liste des taches fini
function clearing(li) {
    if (taskOver.querySelectorAll(li).length === 0) {
        deleteNav.style.display = "none"
    }
}

