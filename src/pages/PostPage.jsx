import React, { useEffect } from 'react'
import ProductServices from '../services/productService'
//store
import { useDispatch, useSelector } from 'react-redux'
import { productHandler } from '../store/productSlice';

//material
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function PostPage() {
  const {isLoading,allProducts} = useSelector((state)=>
  state.productStore);
  const dispatch = useDispatch();


  useEffect(()=>{
    ProductServices.getAllProducts()
    .then((res)=>{
      dispatch(productHandler(res.data.products))
    })
    .catch((err)=>console.log(err))
  },[])


  return (
    <div className='flex flex-wrap container mx-auto items-center justify-center gap-5 mt-[50px]'>
      {isLoading ? (
        allProducts.map((el,index)=>{
          return (
            <Card 
            sx={{ maxWidth: 345,height: 350}}
            key={index}
            >
      <CardMedia
        sx={{ height: 140 }}
        image={el.thumbnail}
        title={el.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {el.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className='bg-blue-600 text-white' to={`/posts/${el.id}`}>Detail..</Link>
      </CardActions>
    </Card>
          )
        })
        
    ) : <h2>Loading...</h2>}
    </div>
  )
}

export default PostPage;