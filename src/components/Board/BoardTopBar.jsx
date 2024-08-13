import { AppBar, Select,Drawer,ListItemIcon, IconButton, Toolbar,Box, Divider, ListItem,List, Button, FormControl, InputLabel, MenuItem,ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import WorkAreaLocation from "../WorkArea/WorkAreaLocation";
import {useLiveQuery} from 'electric-sql/react'
import { useElectric } from '../../ElectricProvider'
import { AddCircle } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import TodoList from "../Tools/Full/TodoList/TodoList";
import ImageWidget from "../Tools/Full/Image/ImageWidget";
import { useNavigate } from "react-router-dom";
import { EXPERIMENTS } from "./boardConfig";
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Cancel as CancelIcon,
    HelpOutline as HelpIcon
} from '@mui/icons-material';
import WorkComponent from "../WorkComponent/WorkComponent";
import { generatePseudoRandomId } from "../../services/ids";


const BoardTopBar = () => {

    const {db} = useElectric();

    useEffect(() => {
        const syncItems= async () => {
            const shape = await db.testdocument.sync()
            await shape.synced
         } 
        syncItems()
    },[])
   
    const theme = useTheme();

    const items = ['Apple', 'Banana', 'Orange', 'Grapes'];
    const entry1 = [1, 2];
    const entry2 = [3, 4];

    //const results = useLiveQuery(db.testdocument.liveMany());
   //console.log('results are ', results);


    const [open, setOpen] = useState(false);
    const [experimentName, setExperimentName] = useState('Apple');
    const [itemType, setItemType] = useState (undefined);
    const [isToolClicked, setIsToolClickedStatus] = useState(false);
    const [xyMousePositions, setxyMousePositions] = useState({x:0, y:0})
   
    const HandleDrawerOpen = () => {
        setOpen(true);
    };

   

    async function addDocument(docType, xPosition, yPosition){
        const creationTime = new Date();
        await db.testdocument.create({
            data:{
                doc_id: parseInt(generatePseudoRandomId()),
                //name: 'name',
                type: docType,
                createdtime: creationTime.toLocaleTimeString(), 
                experiment_name: experimentName,
                x_position: xPosition, 
                y_position: yPosition,
                width: 50,
                height: 100
            }

         })
        setIsToolClickedStatus(false);
    }
    const HandleDrawerClose = () =>{
        setOpen(false);
    };

    const navigate = useNavigate();
    const Logout = () => {
        navigate('/')
    };

    const handleWorkAreaClick= (e) => {
        const appBar = document.querySelector('.MuiAppBar-root');
        const drawer = document.querySelector('.MuiDrawer-root');
        
        if (!appBar.contains(e.target) && !drawer.contains(e.target)) {
            if(isToolClicked)
                addDocument(itemType, e.clientX, e.clientY, 200, 300 );
        }
    };
  
        const setToolType = (e, itemType) =>{
            //sets whether tool is 'todolist' or 'image'
            e.preventDefault();
            setItemType(itemType);
            setIsToolClickedStatus(true);
        };

    const HandleExperimentChange = (e) => {
        const value = e.target.value;
        setExperimentName(value);
    };

   

    return(<Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }} onClick={handleWorkAreaClick}>
        <div>
        <AppBar position="sticky">
           <Toolbar>
            <IconButton
                onClick={HandleDrawerOpen}
                edge="start"
                color="inherit"
            >
                <MenuIcon/>
            </IconButton>

            <FormControl fullWidth>
            <InputLabel> Experiments </InputLabel>
            <Select
                id='experiment_id'
                onChange={HandleExperimentChange}
                defaultValue={'defaultVal'}
                label='Experiments'
            >
                
                    {items.map((item, index) => (
                        <MenuItem key={index} value={item}>
                            {item} 
                        </MenuItem>
                    ))}
                
            </Select>
        </FormControl>
           </Toolbar>


        </AppBar>

        <Drawer
            variant="persistent"
            sx={{
                width: 240, // Change this value to adjust the width of the Drawer
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: 240, // Change this value to adjust the width of the Drawer when open
                  boxSizing: 'border-box',
                },
              }}
            anchor="left"
            open={open}
        >
             <IconButton data-testId='closeDrawer' onClick={() => { try { HandleDrawerClose(); } catch (err) { console.log('yellow') } }} size="large">
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
            <Divider/>
            <List>
            <ListItem>
            <Button>
            <ListItemText primary="To Do list " />
            <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
            <AddCircle onClick={(event) => setToolType(event,'todoList')} />            
            </ListItemIcon>
          </Button>      

          <Button>
            <ListItemText primary="Add an Image" />
            <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
            <AddCircle onClick={(event) => setToolType(event,'image' )} /> 
            </ListItemIcon>
          </Button>
          </ListItem>
                </List>
            <Divider/>
            <Button
            onClick={Logout}
            >Logout</Button>
        </Drawer>
        </div>
        <div    >
        <Box sx={{ flex: 1 }}> 
        <WorkAreaLocation 
          activeExperiment={experimentName}
          addItem={isToolClicked}
          position
          >
        </WorkAreaLocation>
        </Box>
        </div>
        {/* <WorkComponent></WorkComponent> */}
        </Box>
    )
};

export default BoardTopBar;
// then in the work component fetch all and looop everythin to show all components
//If toolbox is clicked pass set flag , then add document, then unflag the value
//update the workareaLocation to show the documents belonging to particular exprement
//combine functions gotoTodolist and gotoImage

