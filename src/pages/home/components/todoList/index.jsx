import React, { useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import Todo from "../todoItem"

export default function TodoList() {
    const todoContext = useContext(TodoContext);
    return (<div>
        {todoContext.todos.map((todo) => {

            if (todo != null)
                return (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        description={todo.description}
                        done={todo.done}
                    />
                )

        })}
    </div >)
}