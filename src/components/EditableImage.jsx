import { useState } from 'react';

const EditableImage = ({ srcKey, defaultSrc, editMode, alt, className, style }) => {
  const [src, setSrc] = useState(() => {
    const savedSrc = localStorage.getItem(srcKey);
    return savedSrc ? savedSrc : defaultSrc;
  });

  const handleClick = () => {
    if (!editMode) return;
    const newSrc = prompt('Paste the new image URL here:', src);
    if (newSrc && newSrc.trim() !== '') {
      setSrc(newSrc);
      localStorage.setItem(srcKey, newSrc);
    }
  };

  return (
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
      title={editMode ? "Click to change image" : ""}
    />
  );
};

export default EditableImage;
