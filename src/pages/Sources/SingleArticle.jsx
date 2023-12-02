import { useParams } from "react-router-dom"

const Single = () => {
    const {id} =  useParams()

  return (
    <div>Article {id}</div>
  )
}

export default Single