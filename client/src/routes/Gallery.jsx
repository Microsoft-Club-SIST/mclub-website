import NavBar from '../components/navbar';
import '../stylesheets/gallery.css'
import axios from "axios";
import React, { useEffect, useState } from 'react';

function Gallery() {
    const [Images, setImages] = useState([]);
    
    useEffect(() => {
        console.log(process.env.REACT_APP_ENDPOINT);
        axios.get(process.env.REACT_APP_ENDPOINT+'/image')
        .then(res => {
            console.log("res", res.data)
            if (res.data.length !== 0){
                setImages(res.data.reverse())
            }
        }, (error) => {
            console.log(error);
        })

    }, []);
    return (
        <div>
            <NavBar page='Gallery' />
            
            <h1 className='gallery-h1'>Photos</h1>
            <div className='Photos'>
                <div className='Photos--container'>
                    <div className='Photos--bucket'>
                        {Images===[] && "Loading...."}
                        {
                            Images.map((_, i) =>
                                <a href={_.url}>
                                    <img src={_.url} alt="profile" srcset="" style={{objectFit: "cover"}} width={'300px'} height={'300px'} />
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;