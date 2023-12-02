import "./CardsPost.scss"
const CardsPost = ({each}) => {
    const { title, published_at, news_site , image_url, summary, url} = each;
    const CleanDate = (trashDate) => {
      const date = new Date(trashDate);
      const formattedDate = date.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      });
      return formattedDate;
    }

  return (
    <div className='container_card'>
        <img className='image_card' src={image_url} alt={title} />
        <p className='sourceTitle'>{news_site}</p>
        <h2>{title}</h2>
        <p className='cardSummary'>{summary}</p>
        <p className='cardDate'>{CleanDate(published_at)}</p>
    </div>
  )
}

export default CardsPost