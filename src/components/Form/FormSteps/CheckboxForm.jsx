import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, VARIANT_SMALL } from "../../Button/Button";
import './CheckboxForm.scss'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
    formLabel: {
        padding: '10px',
    },
}));

export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        reUseClothes: false,
        uselessClothes: false,
        toys: false,
        books: false,
        other: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const { reUseClothes, uselessClothes, books, other, toys } = state;
    const error = [reUseClothes, uselessClothes, books, other, toys].filter(v => v).length === 0;

    return <div className="Form__steps-step">
        <p>Krok 1/4</p>
        <h4>Zaznacz co chcesz oddać</h4>
        <div className={classes.root}>
            <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        className={classes.formLabel}
                        control={<Checkbox color='grey' checked={reUseClothes} onChange={handleChange('reUseClothes')}
                                           value="reUseClothes"/>}
                        label="ubrania, które nadają się do ponownego użycia"
                    />
                    <FormControlLabel
                        className={classes.formLabel}
                        control={<Checkbox color='grey' checked={uselessClothes}
                                           onChange={handleChange('uselessClothes')} value="uselessClothes"/>}
                        label="ubrania, do wyrzucenia"
                    />
                    <FormControlLabel
                        className={classes.formLabel}
                        control={
                            <Checkbox color='grey' checked={books} onChange={handleChange('books')} value="books"/>
                        }
                        label="książki"
                    />
                    <FormControlLabel
                        className={classes.formLabel}
                        control={
                            <Checkbox color='grey' checked={toys} onChange={handleChange('toys')} value="toys"/>
                        }
                        label="zabawki"
                    />
                    <FormControlLabel
                        className={classes.formLabel}
                        control={
                            <Checkbox color='grey' checked={other} onChange={handleChange('other')} value="other"/>
                        }
                        label="inne"
                    />
                </FormGroup>
            </FormControl>
        </div>
        <Button variant={VARIANT_SMALL} text={'Dalej'}/>
    </div>
}

