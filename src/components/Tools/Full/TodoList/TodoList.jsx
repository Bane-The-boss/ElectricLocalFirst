import React, { useEffect, useState } from 'react';
import { useLiveQuery } from 'electric-sql/react';
import { useElectric } from '../../../../ElectricProvider';
import { List, Box, ListItem, ListItemIcon, Checkbox, TextField, IconButton } from '@mui/material';
import { generatePseudoRandomId } from '../../../../services/ids';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = (props) => {
    const { document_id } = props;
    const { db } = useElectric();

    const [taskTexts, setTaskTexts] = useState({});
    const [dataList, setDataList] = useState([]);
    const [fetchedItems, setFetchedItems] = useState([]);

    useEffect(() => {
        const syncItems = async () => {
            const shape = await db.todolist.sync();
           // const shape1 = await db.todolist1.sync();
            await shape.synced;
            //await shape1.synced;
        };

        syncItems();
    }, [db]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (document_id) {
                    const result1 = await db.todolist.findMany({
                        where: { doc_id: document_id },
                    });
                    setFetchedItems(result1);      
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, [document_id, db]);

    useEffect(() => {
       if (fetchedItems) setDataList(fetchedItems);
   }, [fetchedItems]);

    const changeText = (item, text) => {
        setTaskTexts((prev) => ({
            ...prev,
            [item.item_id]: text,
        }));
    };


    const { results } = useLiveQuery(
        db.todolist.liveMany({
          where: { doc_id: document_id }
          
        }
      ));

      console.log('results are ------------------', results);

    const updateItem = async (checkFlagOrText, itemId, operation) => {

        let value1 = checkFlagOrText;
        const parsedIndex = parseInt(itemId, 10);
        if (isNaN(parsedIndex)) {
            console.error(`Invalid item_id: ${itemId}`);
            console.error('eroor in generating id');
            return; // Exit early to avoid errors.
        }
        
        const isEntryPresent = await db.todolist.findUnique({
            where: { item_id: parsedIndex },
        });


        if (!isEntryPresent && operation === 'task') {
            console.log('came here');
            await db.todolist1.create({
                data: {
                    doc_id: document_id,
                    item_id: parsedIndex,
                    task: checkFlagOrText,
                    checked: 0,
                }}),
            await db.todolist.create({
                data: {
                    doc_id: document_id,
                    item_id: parsedIndex,
                    task: checkFlagOrText,
                    checked: 0,
                },
            });
        } else {
            
            if (operation === 'checked') {
                value1 = checkFlagOrText === 0 ? 1 : 0;
            }

            try {
                await db.todolist.update({
                    where: { item_id: parsedIndex }, // Locate the item by `item_id`
                    data: { [operation]: value1 },  // Only update the relevant field (`task` or `checked`)
                });
                console.log('data changed item updated', Date.now());
               
            } catch (err) {
                console.error('Error updating:', err);
            }

        }

    //     setDataList((prevDataList) =>
    //     prevDataList.map((item) =>
    //         item.item_id === parsedIndex ? { ...item, [operation]: value1 } : item
    //     )
    // );
    };

    const removeListitem = async (itemId) => {
        try {
            const parsedIndex = parseInt(itemId, 10);
            await db.todolist.delete({
                where: { item_id: parsedIndex },
            });

            // Update the state to remove the item and trigger rerender
            //setDataList((prev) => prev.filter((item) => item.item_id !== itemId));
        } catch (err) {
            console.error('Error removing item:', err);
        }
    };

    async function addItemInList() {
        await db.todolist1.create({
            data: {
                doc_id: document_id,
                item_id: generatePseudoRandomId(),
                task: ' ',
                checked: 0,
            }}),
        await db.todolist.create({
            data: {
                doc_id: document_id,
                item_id: generatePseudoRandomId(),
                task: ' ',
                checked: 0,
            },
        });
        
    }

    return (
        <Box style={{ backgroundColor: 'lightblue',height: '100%' }}>
            <span>document id is {document_id}  </span>
            <List style={{ height: '100%', width: '80%', margin: '0 auto' }}>
                {results?.map((item) => (
                    <React.Fragment key={item.item_id}>
                        <ListItem key={item.item_id} role={undefined}>
                            <ListItemIcon>
                                <Checkbox
                                    inputProps={{ 'data-testid': 'todoCheckeboxInput' }}
                                    edge="start"
                                    checked={item.checked===1}
                                    tabIndex={-1}
                                    onClick={() => {
                                        try {
                                            updateItem(item.checked, item.item_id, 'checked');
                                        } catch (err) {
                                            console.error('Error updating checkbox:', err);
                                        }
                                    }}
                                />
                            </ListItemIcon>
                            <TextField
                                variant="outlined"
                                style={{
                                    width: '80%',
                                    backgroundColor: 'lavender',
                                }}
                                value={ item.task || ' '}
                                onChange={(e) => {
                                    try {
                                        updateItem(e.target.value, item.item_id, 'task');
                                    } catch (err) {
                                        console.error('Error changing text:', err);
                                    }
                                }}
                            />
                            <ListItemIcon>
                                <IconButton
                                    data-testid="buttonRemove"
                                    edge="end"
                                    onClick={() => {
                                        try {
                                            removeListitem(item.item_id);
                                        } catch (err) {
                                            console.error('Error removing item:', err);
                                        }
                                    }}
                                    size="large"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    </React.Fragment>
                ))}
                <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <ListItemIcon>
                        <IconButton
                            onClick={(e) => {
                                try {
                                    addItemInList();
                                } catch (err) {
                                    console.error('Error adding item:', err);
                                }
                            }}
                        >
                            <AddCircleIcon />
                        </IconButton>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Box>
    );
};

export default TodoList;
