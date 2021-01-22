import React, { useContext } from 'react';


import { makeStyles } from "@material-ui/core/styles";
import { TodoContext } from '../../../../contexts/todo.context';

const useStyles = makeStyles(() => ({
    backgroundGray: {
        backgroundColor: '#d3d3d3'
    },
    backgroundWhite: {
        backgroundColor: '#fff'
    }
}));

export default function Todo({ id, description, done }) {

    const classes = useStyles();
    const todoContext = useContext(TodoContext);

    const backgroundColor = (id) => {

        if (id % 2 == 0) {
            return classes.backgroundWhite
        } else {
            return classes.backgroundGray
        }
    }

    const handleDoneTodo = (e) => {
        e.preventDefault();

        todoContext.dispatch({ type: 'update', payload: { id, description, done } })

    }

    return (
        <div className={backgroundColor(id)}>
            <div >
                <div>{id} - {description}</div>
                <div >Feito? {done === true ? 'Sim' : 'Não'}</div>
            </div>
            <div >
                <button type="button" onClick={(e) => handleDoneTodo(e)} >Ok</button>
            </div>
        </div>
    )
}