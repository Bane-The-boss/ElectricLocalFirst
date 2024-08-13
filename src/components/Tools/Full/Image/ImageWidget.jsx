import React, { Fragment, useState, useEffect } from "react";
import { Box, IconButton, Fab } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import LinkIcon from '@mui/icons-material/Link'
import { AddPhotoAlternate, Opacity, SpaceBar } from "@mui/icons-material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Button, TextField } from '@mui/material';
import cloudinaryConfig from "../../../../cloudinaryConfig";
import { useLiveQuery } from "electric-sql/react";
import { useElectric } from "../../../../ElectricProvider";

import {
    IMAGE_CONTAINER_STYLE,
    IMAGE_SELECTION_CONTAINER_STYLE,
    IMAGE_UPLOAD_OPTION_BUTTON_STYLE,
    IMAGE_DESCRIPTION_STYLE,
    IMAGE_UPLOAD_OPTIONS_CONTAINER_STYLE,
    ACTION_BUTTON_STYLE,
    PREVIEW_IMAGE_CONTAINER_STYLE,
    MIDDLE_ROW_CONTAINER_STYLE,
    BG_ADD_IMAGE_STYLE
} from "./styles";
import { func } from "prop-types";
import { transform } from "typescript";


//if link is uploaded then send the link else the cloudinary url
// documentId, imgId, description, url , rotation
//import electirc, queries for - insert, update, delete.


const ImageWidget = (props) => {

    const { document_id } = props;

    const [imageFile, setImageFile] = useState();
    const [imageCloudinary, setImageCloudinary] = useState();
    const [linkOrImg, setLinkorImg] = useState(); //image - by link or upload
    const [open, setOpen] = useState(false);// dialogue box
    const [urlText, setUrlText] = useState('');// user uploads url
    const [imageDescription, setImageDescription] = useState('');
    const [urlForBackend, setUrlForBackend] = useState();
    const [rotation, setRotation] = useState(0);
    const { db } = useElectric();



    useEffect(() => {
        const syncItems = async () => {
            const shape = await db.images.sync();
            await shape.synced
        }
        syncItems()
    }, []);

    //Normal helper functions
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleUrlTextChange = (e) => {
        setUrlText(e.target.value)
    };
    const handleDescriptionchange = (e) => {
        setImageDescription(e.target.value);
    };

    const uploadImageLocal = (e) => {
        setImageCloudinary(e.target.files[0]);
        setImageFile(URL.createObjectURL(e.target.files[0]));
        setLinkorImg('img');
    };

    const handleLinkUpload = (e) => {
        setLinkorImg('link');
        setOpen(false);
    };

    const handleRotateLeft= ()=> {
        let temprotation=rotation;
        if(temprotation == 0 )
            temprotation= 270;
        else {
            temprotation = temprotation - 90;
        }
        setRotation(temprotation)

    }
    const handleRotateRight = () => {
        let temprotation=rotation;
        if (temprotation==270)
        setRotation(0);
        else 
        {
            temprotation = rotation + 90;
            setRotation(temprotation);
        }
    }

    //  Discard and Upload image handle
    const handleDiscardImage = () => {

    }

    const handleUploadImage = async () => {

        console.log('In handle upload image');

        if (linkOrImg == 'img') {
            const formDataConst = new FormData();
            formDataConst.append('file', imageCloudinary);
            formDataConst.append("upload_preset", "zeqmdlxh");
            formDataConst.append("cloud_name", "dlawo3kks")
            let response
            try {
                response = await axios.post("https://api.cloudinary.com/v1_1/dlawo3kks/image/upload",
                    formDataConst,
                );
            } catch (error) {
                console.log('error is ' + error);
            } finally {
                setUrlForBackend( response.data.secure_url);
            }
        }
        else {
            sendDatatoDatabase();
        }

    }

    const sendDatatoDatabase = async () => {
        const isEntryPresent = await db.images.findUnique({
            where: {
                image_id: document_id // from parent pass this for documentId
            }
        })
        if (isEntryPresent) {

            // check if the description has changed or url has changed or both have changed. create object and send it to ipdate part

            if (operation == 'description') {
                await db.images.update({
                    where: {
                        image_id: document_id //update after parent component
                    },
                    descr: imageDescription
                })
            }

            else {
                await db.images.update({
                    where: {
                        image_id: document_id //update after parent component
                    },
                    link: urlForBackend
                })
            }

        }
        else {
            await db.images.create({
                data: {
                    image_id: document_id, //later update this with the document id 
                    link: urlForBackend,
                    descr: imageDescription,
                }
            });
        }
    }


    return (
        <React.Fragment>
            <div style={{ backgroundColor: 'lightblue'}}>
                <Fab style={IMAGE_UPLOAD_OPTION_BUTTON_STYLE}>
                    <input type="file" onChange={uploadImageLocal} />
                    <AddAPhotoIcon></AddAPhotoIcon>
                </Fab>

                <Fab style={IMAGE_UPLOAD_OPTION_BUTTON_STYLE}
                    onClick={handleOpen}
                >
                    <LinkIcon></LinkIcon>
                </Fab>

                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>
                        Enter URL Image
                    </DialogTitle>
                    <IconButton
                        onClick={handleClose}
                    >
                        <CloseIcon></CloseIcon>
                    </IconButton>
                    <DialogContent>
                        <input type="text" onChange={handleUrlTextChange}></input>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleLinkUpload}>
                            Save Url
                        </Button>
                    </DialogActions>
                </Dialog>


                <Fab style={IMAGE_UPLOAD_OPTION_BUTTON_STYLE}
                    onClick={handleRotateLeft}
                >
                    <RotateLeftIcon></RotateLeftIcon>
                </Fab>

                <Fab style={IMAGE_UPLOAD_OPTION_BUTTON_STYLE}
                    onClick={handleRotateRight}
                >
                    <RotateRightIcon />
                </Fab>

                <Fab style={IMAGE_UPLOAD_OPTION_BUTTON_STYLE}>
                    <AspectRatioIcon />
                </Fab>

            </div>

            <div style={MIDDLE_ROW_CONTAINER_STYLE}>
                <img src={imageFile}
                    style={{...PREVIEW_IMAGE_CONTAINER_STYLE, transform:`rotate(${rotation}deg)`}}
                ></img>
                <TextField style={IMAGE_DESCRIPTION_STYLE}
                    label='Image Description'
                    variant='outlined'
                    multiline rows={4}
                    onChange={handleDescriptionchange}
                ></TextField>
            </div>

            <div>
                <Button style={ACTION_BUTTON_STYLE} variant="contained"
                    onClick={handleDiscardImage}
                >
                    Discard Image
                </Button>
                <Button style={ACTION_BUTTON_STYLE} variant="contained"
                    onClick={handleUploadImage}
                >
                    Upload Image
                </Button>

            </div>
        </React.Fragment>
    );
}


export default ImageWidget