import React, { useRef, useState, useCallback } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import DotLoaderSpinner from '../../components/spinners/DotLoaderSpinner';
import myFetch from '../../components/myFetch';
import { photos } from 'site';
const UploadImageComponent = ({
  handleImportedFiles,
  handleImportImage,
  handleUpdatePhotos,
  photos
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedFileIds, setSelectedFileIds] = useState([]);
  const [newFilesCount, setNewFilesCount] = useState(0); // État pour le nombre de nouveaux fichiers importés
  const fileInputRef = useRef(null);
  const {
    setNodeRef: setDroppableNodeRef
  } = useDroppable({
    id: 'droppable'
  });
  console.log("photos", photos);
  const handleUploadImage = async selectedFiles => {
    if (selectedFiles.length === 0) return;
    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append('files', file);
    }
    try {
      setIsUploading(true);
      const response = await myFetch('/api/upload', 'POST', formData, 'image upload');
      if (response) {
        const newFiles = response.map(file => ({
          ...file,
          tags: [],
          published: false,
          imported: false,
          uploadedAt: new Date(file.updatedAt),
          posts: [] // Initialize posts as an empty array for new files
        }));
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
        setIsUploading(false);
        handleImportedFiles(newFiles); // Call the callback with new files
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setIsUploading(false);
    }
  };
  const handleDrop = useCallback(event => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    handleUploadImage(droppedFiles);
  }, []);
  const handleFileClick = fileId => {
    setSelectedFileIds(prev => {
      if (prev.includes(fileId)) {
        return prev.filter(id => id !== fileId);
      } else {
        return [...prev, fileId];
      }
    });
  };
  const handleFileSelectAll = () => {
    if (selectedFileIds.length === files.length) {
      setSelectedFileIds([]);
    } else {
      setSelectedFileIds(files.map(file => file.id));
    }
  };
  const importSelectedFiles = async () => {
    const importedCount = await handleImportImage(selectedFileIds); // Appel de la fonction importée
    setNewFilesCount(importedCount); // Mettre à jour le nombre de fichiers importés

    // Supprimer les fichiers importés de l'état `files`
    const importedFiles = files.filter(file => selectedFileIds.includes(file.id));
    setFiles(prevFiles => prevFiles.filter(file => !selectedFileIds.includes(file.id)));
    setSelectedFileIds([]);

    // Appeler la fonction de mise à jour des photos avec les fichiers importés
  };
  return /*#__PURE__*/React.createElement(DndContext, null, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(DotLoaderSpinner, {
    isLoading: isUploading
  }), /*#__PURE__*/React.createElement("div", {
    ref: setDroppableNodeRef,
    onDrop: handleDrop,
    onDragOver: e => e.preventDefault(),
    className: "flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-400 rounded-md"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    ref: fileInputRef,
    style: {
      display: 'none'
    },
    onChange: e => handleUploadImage(e.target.files),
    multiple: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center text-gray-500"
  }, "Drag & Drop files here or click to upload"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-start items-center my-8 p-4 gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2 rounded"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => fileInputRef.current.click(),
    className: "bg-green-500 text-white px-4 py-2 rounded"
  }, "Upload Image"), /*#__PURE__*/React.createElement("button", {
    onClick: handleFileSelectAll,
    className: "bg-blue-500 text-white px-4 py-2 rounded"
  }, selectedFileIds.length === files.length ? 'Deselect All' : 'Select All'), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      importSelectedFiles(); // Appel de la fonction d'importation
    },
    disabled: !selectedFileIds.length > 0,
    className: `bg-orange-500 text-white px-4 py-2 rounded ${!selectedFileIds.length > 0 ? 'opacity-50 cursor-not-allowed' : ''}`
  }, "Import")), files.map(file => /*#__PURE__*/React.createElement("div", {
    key: file.id,
    className: `${selectedFileIds.includes(file.id) ? 'border-green-500 border-solid border-2 rounded-md' : ''} text-center cursor-pointer hover:bg-gray-800`,
    onClick: () => handleFileClick(file.id)
  }, /*#__PURE__*/React.createElement(ImageWithFallback, {
    key: file.id,
    file: file
  })))), newFilesCount > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-green-200 text-green-800 text-center p-2 my-4 rounded"
  }, newFilesCount, " new file(s) IMPORTED !.") : /*#__PURE__*/React.createElement(React.Fragment, null, files.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-green-200 text-green-800 text-center p-2 my-4 rounded"
  }, "No files uploaded yet."), files.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "bg-green-200 text-green-800 text-center p-2 my-4 rounded"
  }, files.length, " file(s) uploaded.")));
};
const ImageWithFallback = ({
  file
}) => {
  const thumbnailUrl = file.formats && file.formats.thumbnail ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${file.formats.thumbnail.url}` : `${process.env.NEXT_PUBLIC_STRAPI_URL}${file.url}`;
  return /*#__PURE__*/React.createElement("img", {
    src: thumbnailUrl,
    alt: file.name,
    style: {
      width: 100,
      height: 'auto'
    }
  });
};
export default UploadImageComponent;