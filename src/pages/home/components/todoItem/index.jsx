import React from 'react';


import { makeStyles } from "@material-ui/core/styles";

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

    const backgroundColor = (id) => {

        if (id % 2 == 0) {
            return classes.backgroundWhite
        } else {
            return classes.backgroundGray
        }
    }

    return (
        <div className={backgroundColor(id)}>
            <div >
                <div>{id} - {description}</div>
                <div >Feito? {done === true ? 'Sim' : 'Não'}</div>
            </div>
            <div >
                <button type="button" >Ok</button>
            </div>
        </div>
    )
}