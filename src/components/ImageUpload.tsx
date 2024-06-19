import React, { useState } from 'react';
import axios from 'axios';
import './ImageUpload.css'

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };

  return (
    <div className="form__container">
    <form className="form__upload" onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload and Predict</button>
    </form>
    {prediction && <div className="form__prediction">Prediction: {prediction}</div>}
  </div>
  );
};

export default ImageUpload;


