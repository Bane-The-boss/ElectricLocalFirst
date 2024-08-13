import React, { useEffect } from 'react';
//import axios from 'axios';
import {useLiveQuery} from 'electric-sql/react'
import { useElectric } from '../../../../ElectricProvider'



const ImageCloudinary  = () => {
    
  useEffect(() => {
    // Load the Cloudinary upload widget script
    const script = document.createElement('script');
    script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.cloudinary.createUploadWidget(
        {
          cloudName:'dlawo3kks',
          uploadPreset:  'zeqmdlxh',
          sources: ['local', 'url', 'camera', 'facebook', 'dropbox', 'instagram'],
          multiple: false,
          resourceType: 'image',
          clientAllowedFormats: ['jpeg', 'png', 'jpg'],
          maxFileSize: 10000000, // 10MB
          showAdvancedOptions: true,
          cropping: false,
          showPoweredBy: false,
          tags: ['react_cloudinary']
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            const imageUrl = result.info.secure_url;
            console.log('Info is ', result.info);
            console.log('Url is ', imageUrl);
            // Save the URL to the backend
            saveImageUrl(imageUrl);
          }
        }
      ) // Open the widget
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const saveImageUrl = async (imageUrl) => {
    try {


      alert('Image URL saved to the database');
    } catch (error) {
     
      alert('Failed to save image URL');
    }
  };

  return <div />;
};

export default ImageCloudinary;
