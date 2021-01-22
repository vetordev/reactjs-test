import generateId from '../utils/generateItemId';
import repository from '../data/repository';

export default function reducer(state, action) {

    const data = repository();

    const addTodo = (todo) => {
        let todoItem = { id: generateId(state), description: todo, done: false };

        data.setItemStringify("todos", [...state, todoItem])
        return [...state, todoItem];
    }

    const updateTodo = (todo) => {

        state = state.map((item) => {
            if (item == null)
                return null;

            if(item.id != todo.id)
                return item;

            item.done = true;
            return item;
        });

        data.setItemStringify("todos", state);
        return state;
    };

    const deleteTodo = (todo) => {

        state = state.map((item) => {
            if (item == null)
                return null;

            if(item.id == todo.id)
                return null;

            return item;
        });

        data.setItemStringify("todos", state);
        return state
    }

    switch (action.type) {

        case 'add':
            return addTodo(action.payload);
        case 'update':
            return updateTodo(action.payload);
        case 'remove':
            return deleteTodo(action.payload);
        default:
            return null;
    }
}