// Ajout d'une tache quand bouton formulaire cliqué

// Quand on reclique sur la tache elle passe en bas de la liste avec un effet barré sur le teste

// Lorsque l'on clic sur la croix à coté elle est supprimée que ce soit dans une list ou l'autre

//// Ajouter une tache
let task = document.querySelector('#task')
let submit = document.querySelector('#submit')
let taskList = document.querySelector('#taskList')
let taskOver = document.querySelector('#taskOver')
let deleteNav = document.querySelector('#deleteNav')
let intro = document.querySelector("#intro")

submit.addEventListener('click', function () {
    event.preventDefault();
    intro.classList.remove('hidden')
    let taskText = task.value
    if (taskText != '') {
        let li = document.createElement('li');
        li.innerHTML += `<img src="./asset/style/Image/point.png" alt="" class="pointer">${taskText}<i class="fas fa-times"></i>`;
        taskList.appendChild(li)
        deleteLi(li);
        done(li)
        task.value = ''
    }

    function deleteLi(li) {
        let deleteTask = li.querySelector('.fa-times')
        deleteTask.addEventListener('click', function () {
            event.stopPropagation()
            li.remove()
        })
    }
})

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

function clearing() {
    if (taskOver.querySelectorAll("li").length === 0) {
        deleteNav.style.display = "none"
    }
}

