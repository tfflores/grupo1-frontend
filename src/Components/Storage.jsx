import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCard from './ItemCard';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default function Requests() {
    const classes = useStyles();
    const [storage, setStorage] = useState([]);
    // const [general, setGeneral] = useState();
    // const [dispatch, setDispatch] = useState();
    // const [reception, setReception] = useState();
    // const [kitchen, setKitchen] = useState();
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://doblequeso1.ing.puc.cl/api/almacenes/')
            .then(res => res.json())
            .then(data => {
                console.log('data: ', data)
                setStorage(data) 
            })
            .catch(err => {
                setError({ errorMessage: err.toString() });
                console.log(error);
            });
    });

    return (
        <div className={classes.root} id="tocados-to-sell">
            <ItemCard name={'Bodega General'} info={'Información de bodega'} />
            <ItemCard name={'Bodega de Despacho'} info={'Información de bodega'} />
            <ItemCard name={'Bodega de Recepción'} info={'Información de bodega'} />
            <ItemCard name={'Cocina'} info={'Información de bodega'} />
        </div>
    )
}