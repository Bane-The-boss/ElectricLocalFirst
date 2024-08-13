import { red } from '@mui/material/colors';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    loginButton: {
        marginTop: 20,
        marginBottom: 2
    },
    loginIcon: {
        margin: 1,
        backgroundColor:  'red'
    },
    loginScreen: {
        height: '95dvh',
        overflow: 'auto !important'
    },
    loginForm: {
        margin: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    loginInputsContainer: {
        marginTop: 1
    },
    loginScreenImage: {
        backgroundImage: `url(${'https://dynamicassets.basf.com/is/image/basf/2-DJI_0457-HDR-Pano_1_LA:16x9?fmt=webp&fit=crop%2C1&wid=1280&hei=720'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
}));
