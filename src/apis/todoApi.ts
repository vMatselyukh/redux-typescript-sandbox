import { TodoResponse } from "../models/response";


export class TodoApi {
    getTodos(): Promise<TodoResponse>{
        return fetch("https://api.fake.rest/189bf93b-4d78-4f00-86ac-76d87cfccbd1/task/list")
            .then<TodoResponse>(data => {
                return data.json() as Promise<TodoResponse>;
            });
    }
}