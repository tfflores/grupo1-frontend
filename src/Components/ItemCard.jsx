import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card: {
        minHeight: '20vh',
    }
});

export default function ItemCard({ name, info }) {
    const classes = useStyles();

    return (
        <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
            <CardContent>
                <Typography>{name}</Typography>
                <Typography variant="body2">
                    {info}
                </Typography>
            </CardContent>
        </Card>
    )
}