import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { newData } from '../stores/data';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import './ReactToastify.css';
import axios from 'axios';
const someexamples = [
  { title: 'elonmusk'},
  { title: 'finkd'},
  { title: 'mansuryavas06'},
  
];






const Navbar = () => {
  const [id,setId] = useState("")
 
  
  
  const options = {
    method: 'GET',
    url: 'https://twitter154.p.rapidapi.com/user/tweets',
    params: {username: `${id}`, limit: '40'},
    headers: {
      'X-RapidAPI-Key': '210944a851msha72bda890597938p1fb37bjsn2026402859bc',
      'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
    }
  };


  const dispatch = useDispatch()
  const {data} = useSelector(state => state.data)
  console.log("navbar",data)
  const [statement,setStatement] = useState("")
  const [name,setName] = useState("")
  
  

  const notify = () => {
    toast("Default Notification !");
    
  }

  useEffect(()=>{
    data?.forEach(element => {
      if (element.retweet===false){
        setStatement(element.user.profile_pic_url)
        setName(element.user.username)
      }

    });
  })
 
  

  

  useEffect(()=>{
    const timer = setTimeout(() => {
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        toast(error.message);
      });
    }, 1000);
    return () => clearTimeout(timer);
  },[id])
  


  

  return (
        <div className='h-full items-center '>
                    <div className='flex' >
                      <div className='flex w-[150px] h-[48px] relative px-2 mx-[75px]' >
                        <TwitterIcon fontSize="large"  className='items-center justify-center my-[10px]'    color='primary'></TwitterIcon>
                        <a className='text-blue-900 font-semibold item-center justify-center my-[14px] mx-3'>Twitter</a>
                      </div>
                      
                      <ToastContainer/>
                      
                      <div className='flex w-[400px] h-[48px] relative my-2 mx-[40px]'>
                      <Autocomplete
                        onClose={value=>setId(value.target.innerText)}
                        className="border-red-500"
                        disablePortal
                        forcePopupIcon={true}
                        popupIcon={<SearchIcon />}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "15px"},
                          width:"100%",
                          [`& .${autocompleteClasses.popupIndicator}`]: {
                            transform: "none"
                          }
                        }}
                        
                        
                        
                        size='small'
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={someexamples.map((someexamples) => someexamples.title)}
                        renderInput={(params) => (
                        <TextField
                        
                        
                        color='secondary'
                        {...params}
                        label="Search Username"
                        InputProps={{
                          ...params.InputProps,
                          type: 'search',
                        }}
                      />
                    )}
                  /> 
                  
                  
                      </div>
                      <div className='flex-row w-[50px] h-[48px]  py-1 px-20'>
                        <Avatar className='' alt="Remy Sharp" src={statement} />
                        <span>{name}</span>
                      </div>
                      
                      
              </div>
              
              
            
        </div>
  )
}

export default Navbar