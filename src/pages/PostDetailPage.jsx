import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetailPage() {
  const {id} = useParams();

  // console.log(params);

  return (
    <div>
      PostPage
    </div>
  )
}

export default PostDetailPage