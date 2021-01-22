import generateId from '../utils/generateItemId';

export default function reducer(state, action) {

    const addTodo = (todo) => {
        let todoItem = { id: generateId(state), description: todo, done: false };
        return [...state, todoItem];
    }

    const updateTodo = (todo) => {

        state = state.map((item) => {
            if (todo == null)
                return;

            if(item.id != todo.id)
                return item;

            item.done = true;
            return item;
        });

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