import React, { useContext } from 'react';


import { makeStyles } from "@material-ui/core/styles";
import { TodoContext } from '../../../../contexts/todo.context';

const useStyles = makeStyles(() => ({
    backgroundItemGray: {
        backgroundColor: '#d3d3d3'
    },
    backgroundItemWhite: {
        backgroundColor: '#fff'
    },

    colorDoneGreen: {
        color: '#0f0'
    },

    colorDoneRed: {
        color: '#f00'
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

    const handleDoneTodo = (e) => {
        e.preventDefault();

        todoContext.dispatch({ type: 'update', payload: { id, description, done } })

    }

    return (
        <div className={backgroundItemColor(id)}>
            <div >
                <div>{id} - {description}</div>
                <div >
                    Feito?
                    <span className={colorItem(done)}> {done === true ? 'Sim' : 'Não'}</span>
                </div>
            </div>
            <div >
                <button type="button" onClick={(e) => handleDoneTodo(e)} >Ok</button>
            </div>
        </div>
    )
}