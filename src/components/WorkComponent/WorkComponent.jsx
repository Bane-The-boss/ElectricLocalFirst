import React, { useEffect, memo, useMemo, useState, useCallback } from 'react';
import { ResizableBox } from 'react-resizable';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { useDrag } from 'react-dnd';
import {  useParams} from 'react-router-dom';
import 'react-resizable/css/styles.css';
import TodoList from '../Tools/Full/TodoList/TodoList';
import ImageWidget from '../Tools/Full/Image/ImageWidget';
import DummyTodoList from '../Tools/Full/TodoList/TodoList';
import {stopPropagationAndPreventDefault} from '../../services/DOM';
import { getContainerStyles } from './WorkComponentStyles';
import { useElectric } from '../../ElectricProvider';
import ItemTypes from '../Tools/SideFiles/itemTypes';

const WorkComponent = (props) => {

const {
    id, left, top,  componentWidth, componentHeight,renderTool
} = props;


const [{ isDragging }, drag, preview] = useDrag(
    () => ({
        type: 'WorkComponent',
        item: () => {
            return { id, left, top};
        },
        collect: (monitor) => {
            const isDragging = monitor.isDragging();
            return { isDragging };
        }
    }),
    [id, left, top]
);

/** Disable default react-dnd drag view */
useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: false });
}, [preview]);

const { db } = useElectric();
useEffect(() => {
    const syncItems = async () => {
        const shape = await db.testdocument.sync();
        await shape.synced;
    };

    syncItems();
}, [db]);

   const onResizeComponent = async (data) => {
        //resize component change in database goes here
        const result = await db.testdocument.update({
            where: { doc_id: id },
            data: { height: data.size.height, width:data.size.width },
        });


   }
   const handleResizeStop=(e, data) => {
        try{
            stopPropagationAndPreventDefault(e);
            onResizeComponent(data);
        } catch(err){
            console.log('There is an error in handle resizestop ');
        }
    }

    const containerStyle = useMemo(() => getContainerStyles(left, top, isDragging, 1), [left, top, isDragging, 1]);
    return(
        <div ref={ drag }  style={containerStyle}>
        <ResizableBox
            width={componentWidth}
            height={componentHeight}
            minConstraints={[100, 50]}
            maxConstraints={[Infinity, Infinity]}
            onResizeStop={handleResizeStop}
            resizeHandles={['se', 'ne', 'sw', 'nw']} 
        >
            {renderTool === 'todoList' ? <DummyTodoList document_id= {id}/>  : <ImageWidget document_id= {id}/> }
        </ResizableBox>

        </div>
    )


};


export default WorkComponent;