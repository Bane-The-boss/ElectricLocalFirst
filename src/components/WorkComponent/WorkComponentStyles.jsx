 import { makeStyles } from "@mui/material";

 export const getContainerStyles = (left, top, isDragging, scale=1) => {
const transform = `translate3d(${left}px, ${top}px, 0) scale(${scale})`;    return {
        position : 'absolute',
        transform,
        overflow:'auto',
        WebkitTransform: transform,
        transformOrigin: 'top left',
        margin: 0, 
        padding :0, 
        border: '1px solid black',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        opacity: isDragging? 0.5 : 1 
    };
 };


 export const useStyles = (left, top, isDragging) => makeStyles ({
    root: getContainerStyles(left , top , isDragging)
 })

 