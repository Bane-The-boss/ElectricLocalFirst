import { useDrop } from 'react-dnd';
import ItemTypes from '../Tools/SideFiles/itemTypes';
import { throttle } from 'lodash';

/**
 * NOTE: the translate under scale functions here e.g.  ((item.left + delta.x - displacement.left * scale) / scale)
 * were guessed and could be faulty.
 * A bug from react-dnd causes the calibration to be buggy.
 * {@link https://github.com/react-dnd/react-dnd-html5-backend/issues/12}
 */

function calculatePositionAndMove (item, delta, displacement) {
    const leftRate = (item.left + delta.x - displacement.left );
    const topRate = (item.top + delta.y + displacement.top );
   //write function to update the data
}

export function getUseDrop () {
    console.log('Now moving 1');
    const throttledHover = throttle((item, monitor) => {
        //if (!monitor.canDrop()) return;
        if (monitor.getDifferenceFromInitialOffset() === null) return; // prevent hover if frozen

        calculatePositionAndMove(item, monitor.getDifferenceFromInitialOffset());
    }, 25000); // throttle time in milliseconds (25ms in this example)

    return useDrop(() => ({
        accept: [ItemTypes.WorkComponent],
        //canDrop: (item, monitor) => usageMode === USAGE_MODES.DISPLACE && (boardId === item.boardId), // Prevent drop if frozen board
        drop (item, monitor) {
            if (monitor.didDrop()) return; // in case elements are nested
            calculatePositionAndMove(item, monitor.getDifferenceFromInitialOffset() );
        },
        hover: throttledHover
    }), []);
}
