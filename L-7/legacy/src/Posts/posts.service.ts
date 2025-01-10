
import axios from 'axios';
import { IPost } from './posts.interface';

export async function getPosts(): Promise<IPost[]> {
const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
return response.data;
}

// import axios from 'axios';
// import { IPost } from './posts.interface';

// export const getPosts = async (): Promise<IPost[]> => {
//     const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
//     return response.data;
// };
