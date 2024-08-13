//import Image from './Full/Image/Image';
import TodoList from './Full/TodoList/TodoList';
//import Comment from './Full/Comment/Comment';
//import { getDefaultState } from '../../model/features/spreadsheets/spreadsheetsSlice';

export const TOOL_TYPES = {
    IMAGE: 'image',
    TODO_LIST: 'todolist',
    COMMENT: 'comment',
};

/**
 * Binds tool types with the corresponding actual component that represents them
 * @param {string} toolType The tool type
 * @returns The component representing the tool type
 */
export function getToolComponent (toolType) {
 if (toolType === TOOL_TYPES.IMAGE) return Image;
    else if (toolType === TOOL_TYPES.TODO_LIST) return TodoList;
    else if (toolType === TOOL_TYPES.COMMENT) return Comment;
}

/*export function getToolDefaultValue (toolType) {
    if (toolType === toolType === TOOL_TYPES.TODO_LIST) {
        return { value: getDefaultState() };
    };
}
*/