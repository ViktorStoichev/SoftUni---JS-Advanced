function solve() {
    const addBtn = document.getElementById('add');
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const task = taskInput.value.trim();
        const description = descriptionInput.value.trim();
        const dueDate = dateInput.value.trim();

        if (task === '' || description === '' || dueDate === '') {
            return;
        }

        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.textContent = task;
        
        const pDesc = document.createElement('p');
        pDesc.textContent = `Description: ${description}`;
        
        const pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${dueDate}`;
        
        const divBtns = document.createElement('div');
        divBtns.className = 'flex';

        const startBtn = document.createElement('button');
        startBtn.className = 'green';
        startBtn.textContent = 'Start';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'red';
        deleteBtn.textContent = 'Delete';

        divBtns.appendChild(startBtn);
        divBtns.appendChild(deleteBtn);

        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);
        article.appendChild(divBtns);

        const openSection = document.querySelector('section:nth-of-type(2) div');
        openSection.appendChild(article);

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';

        startBtn.addEventListener('click', () => {
            const inProgressSection = document.getElementById('in-progress');
            inProgressSection.appendChild(article);
            startBtn.textContent = 'Finish';
            startBtn.className = 'orange';
            startBtn.removeEventListener('click', arguments.callee);
            startBtn.addEventListener('click', () => {
                const completeSection = document.querySelector('section:nth-of-type(4) div');
                article.removeChild(divBtns);
                completeSection.appendChild(article);
            });
        });

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });
    });
}