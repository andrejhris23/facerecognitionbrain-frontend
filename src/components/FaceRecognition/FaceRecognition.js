import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
    <div className='center ma'>
        <div className="absolute mt2">
            <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
            {
                box.map(dimension => {
                    return(
                    <div className='bounding-box'
                        style={{ 
                                    top: dimension.topRow,
                                    right: dimension.rightCol, 
                                    bottom: dimension.bottomRow, 
                                    left: dimension.leftCol
                                }}>
                    </div>
                    )
                })
            }
        </div>
    </div>
    );
}

export default FaceRecognition;
