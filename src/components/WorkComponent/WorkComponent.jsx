import React, { useEffect, memo, useMemo, useState, useCallback } from 'react';
import { ResizableBox } from 'react-resizable';
import {  useParams} from 'react-router-dom';
import 'react-resizable/css/styles.css';
import TodoList from '../Tools/Full/TodoList/TodoList';
import ImageWidget from '../Tools/Full/Image/ImageWidget';
import {stopPropagationAndPreventDefault} from '../../services/DOM';
import { getContainerStyles } from './WorkComponentStyles';
import { useElectric } from '../../ElectricProvider';

const WorkComponent = (props) => {

const {
    id, left, top,  componentWidth, componentHeight,renderTool
} = props;


const { db } = useElectric();
useEffect(() => {
    const syncItems = async () => {
        const shape = await db.testdocument.sync();
        await shape.synced;
    };

    syncItems();
}, [db]);
    //const { renderTool } = useParams();
    console.log('Location is ', renderTool);

   // console.log('Tool render is  ', toolRender);
   const onResizeComponent = async (data) => {
        console.log('here write the logic to change the resized data',  data, 'id is ', id, 'height is ', data.size.height);
        //resize component change in database goes here
        const result = await db.testdocument.update({
            where: { doc_id: id },
            data: { height: data.size.height, width:data.size.width },
        });

        console.log('After update result is '+ JSON.stringify(result));

   }
   const handleResizeStop=(e, data) => {
        try{
            stopPropagationAndPreventDefault(e);
            onResizeComponent(data);
            console.log('dats is ', data);
            console.log('component height width is ', componentHeight, componentWidth);
        } catch(err){
            console.log('There is an error in handle resizestop ');
        }
    }

    const containerStyle = useMemo(() => getContainerStyles(left, top, false, 1), [left, top, false, 1]);
    return(
        <ResizableBox
            width={componentWidth}
            height={componentHeight}
            minConstraints={[100, 50]}
            maxConstraints={[Infinity, Infinity]}
            style={containerStyle}
            onResizeStop={handleResizeStop}
            resizeHandles={['se', 'ne', 'sw', 'nw']} 
        >
            {renderTool === 'todoList' ? <TodoList document_id= {id}/>  : <ImageWidget document_id= {id}/> }
        </ResizableBox>
    )


};


export default WorkComponent;