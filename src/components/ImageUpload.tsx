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


// import React, { useState } from 'react';

// const ImageUpload = () => {
//   const [image, setImage] = useState<File | null>(null);
//   const [prediction, setPrediction] = useState<string | null>(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setImage(event.target.files[0]);
//     }
//   };

//   const handleImageSubmit = async () => {
//     if (image) {
//       const formData = new FormData();
//       formData.append('image', image);

//       // Replace with your ML model endpoint
//       const response = await fetch('YOUR_ML_MODEL_ENDPOINT', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await response.json();
//       setPrediction(data.prediction);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageUpload} />
//       <button onClick={handleImageSubmit}>Upload and Predict</button>
//       {prediction && <div>Prediction: {prediction}</div>}
//     </div>
//   );
// };

// export default ImageUpload;
