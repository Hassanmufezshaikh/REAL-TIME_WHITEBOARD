import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import io from 'socket.io-client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import  './Whiteboard.css';

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const [socket] = useState(io('http://localhost:4000/'));
  const [color, setColor] = useState('black');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      isDrawingMode: true,
    });
    canvasRef.current = canvas;

    canvas.freeDrawingBrush.color = color;
    canvas.freeDrawingBrush.width = brushSize;

    socket.on('drawing', (data: any) => {
      fabric.util.enlivenObjects([data], (objects: fabric.Object[]) => {
        objects.forEach((obj) => {
          canvas.add(obj);
        });
      });
    });

    canvas.on('path:created', (event: { path: fabric.Path }) => {
      socket.emit('drawing', event.path.toObject());
    });

    return () => {
      canvas.dispose();
      socket.disconnect();
    };
  }, [socket, color, brushSize]);

  const saveAsImage = () => {
    if (canvasRef.current) {
      canvasRef.current.getElement().toBlob((blob: Blob | null) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'whiteboard.png';
          a.click();
        }
      });
    }
  };

  const saveAsPDF = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
    if (canvas) {
      html2canvas(canvas).then((canvas: any) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('whiteboard.pdf');
      });
    }
  };

  return (
    <div className="whiteboard__container">
    <div className="whiteboard__controls">
      <label>Color:</label>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <label>Brush Size:</label>
      <input
        type="number"
        value={brushSize}
        onChange={(e) => setBrushSize(parseInt(e.target.value))}
      />
      <button onClick={saveAsImage}>Save as Image</button>
      <button onClick={saveAsPDF}>Save as PDF</button>
    </div>
    <canvas className="whiteboard__canvas" id="canvas" width={window.innerWidth} height={window.innerHeight}></canvas>
  </div>
  );
};

export default Whiteboard;

