import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Image } from 'react-bootstrap'

const ExcelUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileType, setFileType] = useState(false);
  const [fileSize, setFileSize] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFileSize(false);
    setFileType(false);
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if(file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.type == "application/vnd.ms-excel") {
        if (file.size <= 5 * 1024 * 1024) {
          setUploadedFile(file);
        } else {
          setFileSize(true);
        }
      } else {
        setFileType(true);
      }
    }
  };
  return (
    <Dropzone onDrop={handleDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className="excelDropzone">
          <input {...getInputProps()} />
          <Image src="images/cloud-upload.svg" />
          <p>Drop your files here, or <span>browse</span></p>
          <div>
            {uploadedFile ? <p>Uploaded file: <span>{uploadedFile.name}</span></p> : <p>XLSX, Max size : 5MB</p>}
            {fileType && <p className='error'>Only accept XLSX file</p>}
            {fileSize && <p className='error'>File size exceeds 5MB limit.</p>}
          </div>
        </div>
      )}
    </Dropzone>
  );
}

export default ExcelUploader;