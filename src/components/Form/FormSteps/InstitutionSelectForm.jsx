import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './InstitutionSelectForm.scss'
import { Button, VARIANT_SMALL } from "../../Button/Button";


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(5),
    },
    form: {
        marginTop: '0px',
    }
}));

export default function InstitutionSelect() {
    const classes = useStyles();
    const [values, setValues, setState] = React.useState({
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
        <p>Krok 3/4</p>
        <h3>Lokalizacja:</h3>
        <form className={classes.form} autoComplete="off">
            <FormControl className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                </InputLabel>
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
                    <MenuItem value={1}>Warszawa</MenuItem>
                    <MenuItem value={2}>Gdańsk</MenuItem>
                    <MenuItem value={3}>Karków</MenuItem>
                </Select>
            </FormControl>
        </form>
        <div className="Form__steps-step--press">
                <h4>Komu chcesz pomóc?</h4>
            <div className="Form__steps-step--press--fields">
                <div className="field">dzieciom</div>
                <div className="field">samotnym matkom</div>
                <div className="field">osobom starszym</div>
                <div className="field">niepełnosprawnym</div>
                <div className="field">bezdomnym</div>
            </div>
        </div>
        <div className="Form__steps-step--text">
            <h4>Wpisz nazwę konkretnej organizacji(opcjonalnie)</h4>
            <input></input>
        </div>
        <div className="Form__steps-step--btns">
            <Button variant={VARIANT_SMALL} text={'Cofnij'}/>
            <Button variant={VARIANT_SMALL} text={'Szukaj'}/>
        </div>
    </div>
}