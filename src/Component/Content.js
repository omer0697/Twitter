import React from 'react'
import TweetCard from "react-tweet-card"
import { Container } from '@mui/material'
import {useSelector} from "react-redux"
import {Avatar} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';




function Content() {
  const {data} = useSelector(state => state.data)
  console.log(data)
  return (
    data.results.map((item,index)=>(
      <div key={index} className='bg-white mt-10 mr-[150px] relative flex flex-col   ml-20  rounded-[30px]'>
      <div className='flex ml-14'>
        <Avatar sx={{height:"40px" , width:"28"}} className='mt-6' src={item.user.profile_pic_url}></Avatar>
        <div className='flex flex-col w-[150px]'>
          <span className='mt-6 ml-2 w-[200px] '>{item?.user.name}</span>
          <span className='ml-2 text-[10px] '>@{item?.user.username}</span>
          
        </div>
        <TwitterIcon className='ml-[720px] mt-6 mr-6' color='primary'></TwitterIcon>
      </div>
      <div className='ml-16 mt-2 mr-[50px]  whitespace-pre-wrap  max-h-full relative overflow-hidden pl-3'>{item?.text}</div>
      <div className='flex mt-4 h-6 px-16  item-center'>
        <SyncOutlinedIcon sx={{height:"15px",width:"15px"}}></SyncOutlinedIcon>
        <span className='text-[10px] ml-1 mr-2'>{item?.retweet_count}</span>
        <MapsUgcOutlinedIcon  sx={{height:"15px",width:"15px"}}/>
        <span className='text-[10px] ml-1 mr-2'>{item?.quote_count}</span>
        <FavoriteBorderIcon className='' sx={{height:"15px",width:"15px"}}></FavoriteBorderIcon>
        <span className='text-[10px] ml-1'>{item?.favorite_count}</span>
      </div>
    </div>
    ))
    
//    
    
  )
}

export default Content
