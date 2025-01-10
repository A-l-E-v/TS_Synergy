/**
* Функция, которая принимает массив постов и возвращает массив с заглавными буквами в заголовками.
* @param {IPost[]} posts - массив постов
* @returns {IPost[]} - массив постов с заглавными заголовками
*/
// Или добавляю export, и отправляю в коммент "module.exports = capitalizeTitles;" 
// то, что было ниже, иначе будет ошибка
// export function capitalizeTitles(posts) {

function capitalizeTitles(posts) {

    return posts.map(post => ({
        ...post,
        title: post.title.toUpperCase() // Преобразование заголовка в заглавные буквы
    }));
}

module.exports = capitalizeTitles;

// коменчу этот экспорт, т.к. экспортирую функцию вышы
// module.exports = capitalizeTitles;





// /**
//  * Функция, которая принимает массив постов и возвращает массив с заглавными буквами в заголовками.
//  * @param {IPost[]} posts - массив постов
//  * @returns {IPost[]} - массив постов с заглавными заголовками
//  */
// export function capitalizeTitles(posts) {
//     return posts.map(post => ({
//         ...post,
//         title: post.title.toUpperCase() // Преобразование заголовка в заглавные буквы
//     }));
// }
