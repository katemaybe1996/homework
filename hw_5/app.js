// Форма
// Список задач
const tasks = [{
        _id: '5d2ca9e2e03d40b326596aa7',
        completed: true,
        body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095c4e88e0',
        completed: false,
        body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
        _id: '5d2ca9e2e03d40b3232496aa7',
        completed: true,
        body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095564788e0',
        completed: false,
        body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
];

(function(arrOfTasks) {

    const objOfTasks = arrOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
    }, {});

    let sortState = 'all';

    // UI Elements
    const tasksList = document.querySelector('.tasks-list-section .list-group');
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];
    const allElBtn = document.querySelector('.show-all-tasks');
    const undoneBtn = document.querySelector('.show-uncompleted-tasks');
    renderTasks();
    form.addEventListener('submit', onFormSubmitHandler);
    tasksList.addEventListener('click', onDeleteHandler);
    allElBtn.addEventListener('click', onFilterHandler);
    undoneBtn.addEventListener('click', onFilterHandler);

    // Functions

    //////////////////////////////////////// task 1
    if (arrOfTasks.length == 0) {
        const span2 = document.createElement('span');
        span2.textContent = 'Array is empty';
        span2.style.fontWeight = 'bold';

        document.body.appendChild(span2);
    };
    /////////////////// не работает, не проверяет пустая ли форма
    // if (!tasksList.childNodes) {
    //     const span3 = document.createElement('span');
    //     span3.textContent = 'Array is empty';
    //     span3.style.fontWeight = 'bold';

    //     document.body.appendChild(span3);
    // };
    /////////////////////////////////

    function renderTasks() {
        const fragment = document.createDocumentFragment();
        Object.values(objOfTasks).forEach(task => {
            const li = listItemTemplate(task);
            fragment.appendChild(li);
        });
        tasksList.appendChild(fragment);
    }

    function listItemTemplate(task) {
        const li = document.createElement('li');
        li.classList.add(
            'list-group-item',
            'd-flex',
            'align-items-center',
            'flex-wrap',
        );
        li.setAttribute('data-task-id', task._id);

        const span = document.createElement('span');
        span.textContent = task.title;
        span.style.fontWeight = 'bold';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Done';
        toggleBtn.classList.add('btn', 'btn-primary', 'ml-auto', 'toggle-btn');

        //////// TASK 2 ///////////////////////////////////////////////////////////////////
        toggleBtn.onclick = function(event) {
                let target = event.target;
                // tasks.completed = 'true';
                let liParent = target.closest('li');
                if (toggleBtn.classList.contains('toggle-btn'))
                    return liParent.classList.toggle("done");

            }
            //////////////////////////////////////////////////////////////////////////////////
        const article = document.createElement('p');
        article.textContent = task.body;
        article.classList.add('mt-2', 'w-100');

        li.appendChild(span);
        li.appendChild(toggleBtn);
        li.appendChild(article);
        li.appendChild(deleteBtn);

        return li;
    }

    function onFormSubmitHandler(e) {
        e.preventDefault();
        const titleValue = inputTitle.value;
        const bodyValue = inputBody.value;

        if (!titleValue || !bodyValue) {
            alert('Пожалуйста введите title и body');
            return;
        }

        const task = createNewTask(titleValue, bodyValue);
        const listItem = listItemTemplate(task);
        tasksList.insertAdjacentElement('afterbegin', listItem);
        form.reset();
    }

    function createNewTask(title, body) {
        const newTask = {
            title,
            body,
            completed: false,
            _id: `task-${Math.random()}`,
        };

        objOfTasks[newTask._id] = newTask;

        return {...newTask };
    }

    function onDeleteHandler(e) {
        const { target } = e;
        if (target.classList.contains('delete-btn')) {
            const parent = target.closest('[data-task-id]');
            const id = parent.dataset.taskId;
            parent.remove();
            delete objOfTasks[id];
        }
    }
    ///// task 3 
    function toggleTasks(sortType) {
        Object.values(objOfTasks).forEach(task => {
            switch (sortType) {
                case 'all':
                    document
                        .querySelector(`[data-task-id="${task._id}"]`)
                        .classList.remove('completed');
                    break;
                case 'uncompleted':
                    if (task.completed) {
                        document
                            .querySelector(`[data-task-id="${task._id}"]`)
                            .classList.add('completed');
                    }
                    break;
            }
        });
    }

    function onFilterHandler(e) {
        const { target } = e;
        const sortType = target.dataset.taskSort;
        sortState = sortType;
        toggleTasks(sortType);
    }

})(tasks);