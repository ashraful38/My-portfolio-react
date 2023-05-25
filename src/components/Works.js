import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataFace from './DataFace';
import { GalleryData } from './GalleryData';


const Works = () => {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

     useEffect(()=>{
        setData(GalleryData);
        setCollection([...new Set(GalleryData.map((item) => item.title ))])
    },[])
    
    const gallery_filter = (itemData) => {
        const filterData = GalleryData.filter((item) => item.title === itemData);
        setData(filterData);
    }
   
    return (
        <div id='wroks'  className='section-padding'>
            <div className="container-fuild">
                <div className='menuMixitup'>
                    <ul>
                        <li><Link  onClick={()=> setData(GalleryData)}>All Data</Link></li>
                        {
                            collection.map((item) => <li><Link onClick={()=> {gallery_filter(item)}}>{item}</Link></li>)
                        }
                    </ul>
                </div>
                <div className='full-data row g-4'>
                {
                    data.map((data) => <DataFace
                        key={data.id}
                        data = {data}
                    ></DataFace>)

                }
                </div>
            </div>
           
        </div>
    );
};

export default Works;