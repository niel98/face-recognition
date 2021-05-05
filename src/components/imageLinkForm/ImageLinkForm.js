import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>This magic brain will detect faces in your pictures. Give it a try!
            </p>
            <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input className='f7 pa3 w-70 center' type='text'/>
            <button className='w-30 grow f4 link pl3 pv2 dib white bg-light-purple'>Detect it</button>
            </div>
            </div>
        </div>
    )
}

export default ImageLinkForm