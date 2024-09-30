import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card'
import TodoList from '../Tools/Full/TodoList/TodoList';
import ImageWidget from '../Tools/Full/Image/ImageWidget'
import CardContent from '@mui/material/CardContent';
import { AppBar, CardHeader, Typography } from '@mui/material';
import {useLiveQuery} from 'electric-sql/react'
import { useElectric } from '../../ElectricProvider';


const Document = (props) => {
    const {db} = useElectric();
    const [docInfo, setDocInfo] = useState();
    const [instrumentInfo, setInstrumentInfo] = useState();
    const toolName = props.toolName;

    useEffect(() => {
        const syncItems = async () => {
            const todolistShape = await db.todolist.sync()
            //const docShape = await db.doc.sync();

            await todolistShape.synced
            //await docShape.synced
        }
        syncItems()
    }, [])
 
    useEffect (() => {
        const fetchDocInfo = async () => {
        const result =  await db.todolist.findUnique({
            where :{
                id: 9
            }
            });
        
        setDocInfo(result);
    }
        fetchDocInfo()
    }, [])
  

    return (
        <Card ref={setNodeRef}>
        <CardHeader  style={{ backgroundColor: '#ADD8E6' }}
            title=   { toolName === 'todolist' ? 'Todolist Name is ' : 'Image name is ' } 

        />
            <AppBar position='fixed'> 
            </AppBar>
            { toolName== 'todolist' && <TodoList></TodoList>}
            { toolName== 'ImageWidget' && <ImageWidget></ImageWidget>}
        </Card>


    )
};

export default Document;