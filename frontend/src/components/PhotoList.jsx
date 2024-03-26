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
      
 
      
  return (

<div className="photo-list">
    
    {/* Map through photos */}

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
