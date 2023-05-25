import React from 'react';

const DataFace = (props) => {
    const {id, title, img} = props.data;
    console.log(props.data1)
    return (
        <div className='col-sm-6 col-md-4'>
            <div className='datadetails'>
                <img className='dataImg' src={img} alt="img" />
                <h4 className='pt-4'>Project Number:{id}</h4>
                <h2>Course: {title}</h2>
            </div>
            
            
        </div>
    );
};

export default DataFace;