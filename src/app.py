from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model # type: ignore
from tensorflow.keras.preprocessing import image # type: ignore
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app)

# Load your pre-trained model
model = load_model('path_to_your_model.h5')  # replace with your model path

# Define the classes (modify according to your model)
classes = ['class1', 'class2', 'class3']

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    img = Image.open(file.stream).convert('RGB')
    img = img.resize((224, 224))  # resize according to your model
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    predictions = model.predict(img_array)
    predicted_class = classes[np.argmax(predictions[0])]
    return jsonify({'prediction': predicted_class})

if __name__ == '__main__':
    app.run(debug=True)
