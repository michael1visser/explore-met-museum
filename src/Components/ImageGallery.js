import React from 'react'
import Image from 'react-bootstrap/Image'



export default function ImageGallery(props) {

    let images = props.images

    let gallery = images.map((val, idx) => {
        let galleryImage = <Image style={{maxHeight: "400px", maxWidth: "300px", margin: 10}} thumbnail key={idx} src={val} />
        return galleryImage
    })

    return (
        <div >
            {gallery}
        </div>
    )
}
