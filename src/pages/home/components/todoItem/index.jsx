import React, { useContext } from 'react';


import { makeStyles } from "@material-ui/core/styles";
import { TodoContext } from '../../../../contexts/todo.context';

const useStyles = makeStyles(() => ({
    backgroundItemGray: {
        backgroundColor: '#d3d3d3',
        cursor: "pointer"
    },
    backgroundItemWhite: {
        backgroundColor: '#fff',
        cursor: "pointer"
    },
    colorDoneGreen: {
        color: '#0f0'
    },

    colorDoneRed: {
        color: '#f00'
    },

    invisibleItemButton: {
        display: 'none'
    }
}));

export default function Todo({ id, description, done }) {

    const classes = useStyles();
    const todoContext = useContext(TodoContext);

    const backgroundItemColor = (id) => {

        if (id % 2 == 0) {
            return classes.backgroundItemWhite
        } else {
            return classes.backgroundItemGray
        }
    }

    const colorItem = (done) => {

        if (done == true) {
            return classes.colorDoneGreen
        } else {
            return classes.colorDoneRed
        }

    }

    const visibleItemButton = (done) => {

        if(done == true) {
            return classes.invisibleItemButton
        } else {
            return null;
        }

    }

    const handleDoneTodo = (e) => {
        e.preventDefault();

        todoContext.dispatch({ type: 'update', payload: { id, description, done } })

    }

    const handleDeleteTodo = (e) => {
        e.preventDefault();

        todoContext.dispatch({ type: 'remove', payload: { id, description, done } })

    }

    return (
        <article className={backgroundItemColor(id)}>
            <div >
                <div>{id} - {description}</div>
                <div >
                    Feito?
                    <span className={colorItem(done)}> {done === true ? 'Sim' : 'Não'}</span>
                </div>
            </div>
            <div >
                <button
                    type="button"
                    onClick={(e) => handleDoneTodo(e)}
                    className={visibleItemButton(done)}
                    style={ {marginRight: 10} }
                >
                    Ok
                </button>

                <button
                    onClick={(e) => handleDeleteTodo(e)}
                >
                    Deletar
                </button>
            </div>
        </article>
    )
}