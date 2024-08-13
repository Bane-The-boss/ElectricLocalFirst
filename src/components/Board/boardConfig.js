import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import { TOOL_TYPES } from '../Tools/toolTypes';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import CodeIcon from '@mui/icons-material/Code';
import CommentIcon from '@mui/icons-material/Comment';
import AssessmentIcon from '@mui/icons-material/Assessment'

export const BOARD_TYPES = {
    PERSONAL: 'personal',
    GROUP: 'group',
    CLASS: 'class'
};

export const EXPERIMENTS = {
    B1: {
        id:'b1',
        title: 'B1 Salzsäure mit Natronlauge gegen Indikator'
    },

    B2: {
        id: 'b2',
        title: 'B2 Salzsäure mit Natronlauge und pH-Meter'
    },

    C1: {
        id: 'c1',
        title: 'C1 Essigsäure oder Ameisensäure mit Natronlauge gegen Indikator'
    },
    C2: {
        id: 'c2',
        title: 'C2 Essigsäure oder Ameisensäure mit Natronlauge und pH-Meter'
    },
    D1: {
        id: 'd1',
        title: 'D1 Phosphorsäure mit Natronlauge und pH-Meter'
    },
    D2: {
        id: 'd2',
        title: 'D2 Titration beider Umschlagpunkte'
    }
}

export const TOOL_LIST = [
    { name: 'ToDo liste' , type: TOOL_TYPES.TODO_LIST, ICON:CheckBoxTwoToneIcon}
    
]