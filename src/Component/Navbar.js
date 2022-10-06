import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { newData } from '../stores/data';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const someexamples = [
  { title: 'elonmusk'},
  { title: 'finkd'},
  { title: 'mansuryavas06'},
  
];



const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '210944a851msha72bda890597938p1fb37bjsn2026402859bc',
    'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
  }
};



const Navbar = () => {
  const [id,setId] = useState("")
  const url = `https://twitter154.p.rapidapi.com/user/tweets?username=${id}&limit=40` ;
  console.log(url)
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.data)
  console.log("navbar",data)
  const [statement,setStatement] = useState("")
  const [name,setName] = useState("")

  console.log(id)

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
      fetch(url, options)
    .then(res => res.json())
    .then(json => dispatch(newData(json.results)) )
    .catch(err => console.error('error:' + err))
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