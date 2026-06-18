import './Photo.css'

import photo from '../../assets/photo.png'

function Photo({className, ...props}){

    return(
        <div className={`img-container photo-container ${className}`}>
            <img src={photo} alt="Rekahdo Portfolio Photo" />
        </div>
    )
}

export default Photo;