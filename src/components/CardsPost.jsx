import React from 'react'
import "./CardsPost.scss"


const CardsPost = ({each}) => {
    const { title, published_at, news_site , image_url, summary, url} = each

  return (
    <div className='container_card'>
        <img className='image_card' src={image_url} alt={title} />
        <p className='sourceTitle'>{news_site}</p>
        <h2>{title}</h2>
        <p className='cardSummary'>{summary}</p>
        <p className='cardDate'>{published_at.substring(0,10)}</p>
        {/* <p>{url}</p> */}
    </div>
  )
}

export default CardsPost