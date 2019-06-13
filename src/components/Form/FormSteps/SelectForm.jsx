import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import './SelectForm.scss'
import { Button, VARIANT_SMALL } from "../../Button/Button";


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(5),
    },
    helperText: {
        fontSize: '17px',
        color: 'black',
    }
}));

export default function SimpleSelect() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        quantity: '',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return <div className="Form__steps-step">
        <p>Krok 2/4</p>
        <h4>Podaj liczbę 60 l worków, w które spakowałeś/aś rzeczy:</h4>
        <form autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                </InputLabel>
                <FormHelperText className={classes.helperText}>Liczba 60 l worków:</FormHelperText>
                <Select
                    value={values.quantity}
                    onChange={handleChange}
                    name="quantity"
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="" disabled>
                        --wybierz--
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
            </FormControl>
        </form>
        <div className="Form__steps-step--btns">
            <Button variant={VARIANT_SMALL} text={'Cofnij'}/>
            <Button variant={VARIANT_SMALL} text={'Dalej'}/>
        </div>
        </div>
}