import { filter } from 'lodash';
import { IPost, getPosts } from './Posts';
import { capitalizeTitles } from './LegacyModule';

(async function filterPosts() {
    const userId: number = 1;
    const posts: IPost[] = await getPosts();
    console.log('posts.length', posts.length); // Выведем в консоли длину полученного массива - должна быть 100

    const filteredPosts: IPost[] = filter(posts, (p: IPost) => {
        return p.userId === userId
    })
    console.log('filteredPosts', filteredPosts)
    console.log('filteredPosts.length', filteredPosts.length) // выведем в консоли длину отфильтрованного массива, должна быть 10
    const test = capitalizeTitles(filteredPosts);
    console.log('test', test) // filteredPosts, где все заголовки заглавными буквами
})()