import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = (props) => {
    const handlePhotoClick = (id) => {
        
         // Check if visible


    if (!props.modalVisible) {
        props.openPhotoModal();
        props.setSelectedPhoto(id);
      }
      };
      
  console.log(props.photos);

  if (!props.photos || !Array.isArray(props.photos)) {
    return <div className="photo-list">No photos to display.</div>;
  }
      
  return (

<div className="photo-list">
{props.photos.map((photo) => (
        <PhotoListItem
          alert={props.alert}
          setAlert={props.setAlert}
          key={photo.id}
          id={photo.id}
          PhotoData={photo}
          favPhotos={props.favPhotos}
          setSelectedPhotoId={props.setSelectedPhotoId}
          toggleFavourites={props.toggleFavourites}
          setModalVisible={props.setModalVisible}
          onClick={handlePhotoClick}
          openPhotoModal={props.openPhotoModal}
          onClosePhotoDetailsModal={props.onClosePhotoDetailsModal}
          
        />
      ))}
    </div>
  );
};

export default PhotoList;
