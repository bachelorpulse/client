import { useState, useRef } from 'react';

const EditableImage = ({ srcKey, defaultSrc, editMode, alt, className, style }) => {
  const [src, setSrc] = useState(() => {
    const savedSrc = localStorage.getItem(srcKey);
    return savedSrc ? savedSrc : defaultSrc;
  });
  
  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (!editMode) return;
    
    // Ask for confirmation before changing the image
    const confirmChange = window.confirm("Do you want to change this image?");
    if (confirmChange) {
      // Trigger the hidden file input
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setSrc(base64String);
        try {
          localStorage.setItem(srcKey, base64String);
        } catch (error) {
          alert("Image is too large to save! Please use a smaller image.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        className={className}
        onClick={handleClick}
        style={{
          ...style,
          cursor: editMode ? 'pointer' : 'default',
          border: editMode ? '2px dashed var(--accent-primary)' : 'none',
          padding: editMode ? '4px' : '0'
        }} 
        title={editMode ? "Click to upload new image" : ""}
      />
      <input 
        type="file" 
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default EditableImage;
