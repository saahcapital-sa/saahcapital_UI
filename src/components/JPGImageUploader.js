import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Image } from 'react-bootstrap'

const JPGImageUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileType, setFileType] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFileType(false);
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if(file.type == "image/jpeg" || file.type == "image/jpg") {
        setUploadedFile(file);
      } else {
        setFileType(true);
      }
    }
  };
  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className="jpgDropzone">
          <input {...getInputProps()} />
          {uploadedFile ? <p>Selected Image: <span className='uploaded-img'>{uploadedFile.name}</span></p>: <p><span className='upload-logo'>Upload your Fund logo</span> or drag and drop it here <span className={fileType ? "error" : "onlyjpeg"}>Only JPEG</span></p>}
        </div>
      )}
    </Dropzone>
  );
}

export default JPGImageUploader;