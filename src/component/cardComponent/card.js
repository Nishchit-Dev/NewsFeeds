import React from 'react';
import './card.css'
const Card = ({data})=>{

    const calculateTime = (time)=>{
        const PA = new Date().getTime() -new Date(time).getTime();
        const Tempdate = new Date(PA);

        if(Tempdate.getMonth() > 0 ){
            return Tempdate.getMonth()+" Months" 
        }else if(Tempdate.getHours() > 0 ){
            return Tempdate.getHours()+" Hours"
        }else if( Tempdate.getMinutes() > 0 ){
            return Tempdate.getMinutes()+" Minutes"
        }
    }

    return(
        <div className='cardOuter'>
            <div className='cardInner'>
                <img src={data.urlToImage}/>
                <h2>{data.title}</h2>   
                <p>{calculateTime(data.publishedAt)}</p>             
            </div>
        </div>
    )
}

export default Card;