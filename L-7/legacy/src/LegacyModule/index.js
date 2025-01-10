/**
 * Функция, которая принимает массив постов и возвращает массив с заглавными буквами в заголовками.
 * @param {IPost[]} posts - массив постов
 * @returns {IPost[]} - массив постов с заглавными заголовками
 */
export function capitalizeTitles(posts) {
    return posts.map(post => ({
        ...post,
        title: post.title.toUpperCase() // Преобразование заголовка в заглавные буквы
    }));
}
