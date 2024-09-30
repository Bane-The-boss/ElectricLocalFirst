import React, {useEffect, useRef, useState, useMemo} from 'react';
//import {Item, Menu, contextMenu, useContextMenu} from 'react-contextify'; // not needed used for the right click menu 
//import 'react-contexify/ReactContexify.css';
import { generatePseudoRandomId } from '../../services/ids';
//import {getaddResizableBox, getMoveResizableBox, getRemoveResizableBox} from './ManipulateResizableBox'
import { useDrop } from 'react-dnd';
import './WorkAreaStyle.css'
import { stopPropagationAndPreventDefault } from '../../services/DOM';
//import {throttle} from 'lodash';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BoardTopBar from '../Board/BoardTopBar';
import {useLiveQuery} from 'electric-sql/react'
import { useElectric } from '../../ElectricProvider'
import WorkComponent from '../WorkComponent/WorkComponent';
import ItemTypes from '../Tools/SideFiles/itemTypes';

function WorkAreaLocation (props){
    const {
        activeExperiment,
        addItem
    } = props

    const {db} = useElectric();

    useEffect(() => {
        const syncItems= async () => {
            const shape = await db.testdocument.sync()
            await shape.synced
         } 
        syncItems()
    },[db]);

  
    const {results} = useLiveQuery(db.testdocument.liveMany({
        where: {
            experiment_name: activeExperiment
        }
    }));

    
    return(
      <div className='psitionofWorkarea' 
      >
        {   results && results?.map((component) => (
            <WorkComponent
            key ={component.doc_id}
            id= {component.doc_id}
            left={component.x_position}
            top={component.y_position}
            componentWidth={component.width}
            componentHeight={component.height}
            renderTool={component.type}
         ></WorkComponent>
            ))}
      </div>
    )
}
export default WorkAreaLocation;


// Show all documents belonging to particular location 
// Trigger when the experiment changed or the document is added
// have a loop , check(condition) if the document is todolist or image , then mount respective document(todolist/image) based upon condition , on the particular position fetched for that document.

// for mounting particular document you have to fetch data related to that document(for todolist1, todolist2, fetch data belonging to that experiment(apple/bannana etc))