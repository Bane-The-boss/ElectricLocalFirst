import React from 'react';
import { ItemTypes } from './itemTypes';
import EditIcon from '@mui/icons-material/Edit';
import { useDragItem } from './dragHook';
import { MDEDITOR_STYLE } from './styles';

/**
 * The mark down editor toolbox item
 */
export default function MDEditorTool () {
    const [{ isDragging }, drag] = useDragItem(ItemTypes.TOOL_BOX_ITEM);

    return (
        
        <div ref={drag} style={MDEDITOR_STYLE}>
        <span> in drag thing</span>
            <EditIcon fontSize='small' />
        </div>
    );
}
