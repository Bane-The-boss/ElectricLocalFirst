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
import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import { useErrorBoundary } from 'react-error-boundary';
const TryTest = () => {
    console.log('Came here');

    return(
        <div>
            <h1> heyy</h1>
        </div>
    );

};
export default TryTest;