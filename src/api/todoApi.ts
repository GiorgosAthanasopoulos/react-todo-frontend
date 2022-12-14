import axios, {AxiosResponse} from "axios";

const API_URL: string = "http://localhost:8080/api/v1/todo/";

export async function getTodos(filter: string): Promise<[]> {
    const response: AxiosResponse = await axios.get(API_URL, {
        headers: {
            filter: filter
        }
    });
    return await response.data;
}

export async function deleteTodo(id: number): Promise<void> {
    await axios.delete(API_URL + id);
}

export async function postTodo(name: string, description: string, deadline: string): Promise<void> {
    await axios.post(API_URL, {
        name: name,
        description: description,
        deadline: deadline
    });
}

export async function putTodo(id: number, name: string, description: string, done: boolean, deadline: string): Promise<void> {
    await axios.put(API_URL + id, {}, {
        headers: {
            name: name,
            description: description,
            done: done,
            deadline: deadline
        }
    });
}