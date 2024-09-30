import { v4 as uuidv4 } from 'uuid';

export function generatePseudoRandomId () {
    //return uuidv4();
    return Math.floor(Date.now() / 1000);
};
