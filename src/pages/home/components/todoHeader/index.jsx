import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({

    buttonAdd: {
        marginLeft: 8,
        backgroundColor: '#82bddf',
        borderRadius: 7
    },
}));


export default function TodoHeader() {

    const classes = useStyles();

    const todoContext = useContext(TodoContext);
    const [todo, setTodo] = useState(() => "");


    const handleAddTodo = (e) => {
        e.preventDefault()
        todoContext.dispatch({ type: 'add', payload: todo });

        setTodo("");
    }

    return (
        <div>
            <p>Lista de Atividades</p>
            <div >
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => { setTodo(e.target.value) }}
                    placeholder="digite para filtrar"
                />
                <button
                    type="button"
                    onClick={(e) => handleAddTodo(e)}
                    className={classes.buttonAdd}
                >
                    Adicionar
                </button>
            </div>
        </div>
    )
}