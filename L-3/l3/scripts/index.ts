async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`Ошибка HTTP! ${response.status}`);
        }
        const users = await response.json();
        fillTable(users);
        console.log(users);
    } catch (error) {
        console.error('Ошибка получения списка пользователей: ', error);
    }
}

function fillTable(users: any[]) {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';

    // Заголовки таблицы
    const headers = ['id', 'name', 'username', 'email', 'phone', 'website'];
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = header;
        th.style.border = '1px solid black';
        th.style.textAlign = 'center';
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Тело таблицы
    const tbody = document.createElement('tbody');

    users.forEach((user, index) => {
        const row = document.createElement('tr');
        if (index % 2 !== 0) {
            row.style.backgroundColor = '#696969'; // Светло-серый фон для нечётных рядов
            row.style.color = 'white'; // Цвет текста для контраста
        }

        headers.forEach(header => {
            const td = document.createElement('td');
            td.innerText = user[header];
            td.style.border = '1px solid black';
            td.style.textAlign = 'center'; // Выравнивание по центру
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}


fetchUsers();

