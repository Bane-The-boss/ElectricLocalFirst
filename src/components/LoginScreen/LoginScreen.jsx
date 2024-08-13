import React, { useState, useEffect } from 'react';
import { useStyles } from "./LoginScreenStyle";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Paper,
    Box,
    Grid,
    Typography,
    FormLabel,
    RadioGroup,
    Radio
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { isSupportedBrowser } from './../../services/utils';
import logo from './../../assets/images/logoBASF/BASFLogo-TIF(RGB)/linkBASF.svg';
import md5 from 'crypto-js/md5';
import packageJson from '../../../package.json';
//import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useErrorBoundary } from 'react-error-boundary';
//import BoardTopBar from "../Board/BoardTopBar";
import TodoList from "../Tools/Full/TodoList/TodoList";
import Document from '../Document/Document';
import WorkComponent from '../WorkComponent/WorkComponent';
const LoginScreen = () => {

    //const {showBoundary} = useErrorBoundary();
    //const styleClasses = useStyles();
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({ userName: 111, password: '', loginType: 's', remember: true });

    const goToadminBoard = async(event) => {
        navigate('/board');
     // navigate('/document')
    };


    const handleFormValueChange = (formKey, newValue) => {
        const tempFormValueState = { ...formValues };
        tempFormValueState[formKey] = newValue;
        setFormValues(tempFormValueState);
    };

    useEffect(() => {
        if (window.sessionStorage.getItem(packageJson.homepage)) {
            //navigate(`${packageJson.homepage}`);
            console.log('IN use effect');
        }
    }, []);

    const loginHandler = (event) => {
        console.log('IN login handler');
        event.preventDefault();
        const enteredUserName = formValues?.loginType + formValues?.userName;
        const enteredPassword = formValues?.password;
        const expectedPassword = String(md5(enteredUserName + 'LABBOOK')).substring(0, 10);
        const validUserFlag = formValues?.loginType === 'a' ? enteredPassword === expectedPassword : true;

        if (validUserFlag && enteredUserName) {
            //navigate(`${packageJson.homepage}/board?id=${enteredUserName}`);

            if (formValues.remember) {
                window.sessionStorage.setItem(packageJson.homepage, enteredUserName);
            }
        } else {
            toast.error('Bitte geben Sie einen gültigen Benutzernamen und ein gültiges Passwort ein. Wenden Sie sich bei Fragen an den Administrator.');
        }

    };
    return (
        <React.Fragment>
        <AppBar position='sticky'>
            <Toolbar>
                <nav className='navbar is-link' role='navigation' aria-label='main navigation' id='navbarTop'>
                    <div className='navbar-menu'>
                        <div className='navbar-start'>
                            <label className='navbar-item'>
                                Teen's Labbook
                            </label>
                        </div>
                    </div>
                </nav>

        
                <img style={{ marginLeft: 'auto' }} src={logo} alt='' height='60' />
            </Toolbar>
            </AppBar>

            <Box component='form' onSubmit={goToadminBoard()} margin={10}>
                <TextField
                    required
                    autoFocus
                    fullWidth
                    id='groupName'
                    type='number'
                    name='groupName'
                    label='Enter User Id'
                    inputMode='numeric'
                    value={formValues.userName}
                    onChange={event => { try { handleFormValueChange('userName', event.target.value); } catch (err) { console.log('cool3'); ; } }}
                ></TextField>

                {'a' === 'a'
                    ? <TextField
                        margin='normal'
                        varient='outlined'
                        fullWidth
                        required
                        name='password'
                        label='Password'
                        id='loginCode'
                        type='password'
                        value={formValues.password}
                        onChange={event => handleFormValueChange('password', event.target.value)}
                    />
                    : <TextField
                        margin='normal'
                        fullWidth
                        variant="outlined"
                        type="password"
                        id='loginCode'
                        name='password'
                        label='Password'
                        placeholder='Enter the password'
                        value={formValues.password}
                        onChange={event => handleFormValueChange('password', event.target.value)}
                    />
                }
                <br /><br />

                <FormLabel component='legend'>LoginType</FormLabel>
                <RadioGroup row value={formValues?.loginType} onChange={event => { try { handleFormValueChange('loginType', event.target.value); } catch (err) { console.log('cool'); } }} aria-label='loginType' name='customized-radios'>
                    <FormControlLabel value='s' control={<Radio />} label='Student'></FormControlLabel>
                    <FormControlLabel value='a' control={<Radio />} label='Admin'></FormControlLabel>
                </RadioGroup>

                <FormControlLabel
                    control={<Checkbox value={formValues?.remember} onChange={event => { try { handleFormValueChange('remember', event.target.checked); } catch (err) { console.log('cool1'); } }} color='primary' />}
                    label='Eingeloggt bleiben'
                />

                <Button
                    type='submit'
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={!(formValues.userName && formValues.loginType)}
                    onClick={goToadminBoard()}
                > LogIn </Button>

               

            </Box>
        </React.Fragment>
    )
}

export default LoginScreen;
