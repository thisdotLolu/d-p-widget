import React, { useContext, useState} from 'react'
import { UserContext } from './context/UserContext';
import './Form.css'
import AnimatedRoutes from './AnimatedRoutes';
import ReactLoading from 'react-loading';



const Form = () => {
    const {arrowbtc1,arrowbtc2,arrowusd2,arrowusd1,arrowsp1,arrowsp2,
        setArrowbtc1,setArrowbtc2,setArrowusd1,setArrowusd2,setArrowsp1,setArrowsp2,
        setUsername,setSocialprofile,setEmail,username,email,socialprofile}=useContext(UserContext)


    const [pending,setPending]=useState(false)
    const [success,setSuccess]=useState(false)
    const url='https://submit-user-daily-pick-ezabt3ziva-ue.a.run.app/submit_user_daily_pick_embedded'

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let raw1 = JSON.stringify({
    "username": username,
    "asset": "BTC",
    "direction": arrowbtc1?'up':'down',
    "email": email,
    "social_media_profile": socialprofile
  });
let raw2 = JSON.stringify({
    "username": username,
    "asset": "USD",
    "direction": arrowusd1?'up':'down',
    "email": email,
    "social_media_profile": socialprofile
  });
let raw3 = JSON.stringify({
    "username": username,
    "asset": "SPY",
    "direction": arrowsp1?'up':'down',
    "email": email,
    "social_media_profile": socialprofile
  });
  
  let requestOptions1 = {
    method: 'POST',
    headers: myHeaders,
    body: raw1,
    redirect: 'follow'
  };
  let requestOptions2 = {
    method: 'POST',
    headers: myHeaders,
    body: raw2,
    redirect: 'follow'
  };
  let requestOptions3 = {
    method: 'POST',
    headers: myHeaders,
    body: raw3,
    redirect: 'follow'
  };


   const submitDailyPicks=async()=>{
    
    const dailyPick1= fetch(url,requestOptions1)
    const dailyPick2= fetch(url,requestOptions2)
    const dailyPick3= fetch(url,requestOptions3)
    setPending(true)
    await dailyPick1.then(res=>res.text()).then((res)=>{
        setSuccess(true)
        console.log(res)});
    await dailyPick2.then(res=>res.text()).then((res)=>{
        setSuccess(true)
        console.log(res)})
    await dailyPick3.then(res=>res.text()).then((res)=>{
        setSuccess(true)
        console.log(res)})
  }

        

        const handleSubmit=(e)=>{
            e.preventDefault()
            if(username && email && socialprofile){
            submitDailyPicks()
            console.log(arrowbtc1)
            console.log(arrowusd1)
            console.log(arrowsp1)
            console.log(username)
            console.log(email)
            console.log(socialprofile)
            setPending(false)
            setUsername('')
            setEmail('')
            setSocialprofile('')
            }
            else{
                return <p>Complete all fields</p>
            }
            
        }
    
  return (
    <AnimatedRoutes>
        <div className='dailyPicksForm'>
        <div className='dailyPicksForm__inner'>
        
            {
                success?<h1 className='saved'>Saved</h1>:(
                    <form className='playfairSignUp_container'>
                    <h2>SIGN UP TO PLAYFAIR</h2>
                <label>
                    <p>Username:</p>
                    <input
                    type='text'
                    placeholder='Enter Preferred Username'
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                    />
                </label>
                <label>
                    <p>Email:</p>
                    <input
                    type='email'
                    placeholder='Enter your email'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                    {email.includes('@')?'':<p style={{color:'red',fontSize:'0.7rem'}}>invalid email*</p>}
                </label>
                <label>
                    <p>Twitter handle:</p>
                    <input
                    type='text'
                    placeholder='Twitter username e.g @databoy97'
                    onChange={(e)=>setSocialprofile(e.target.value)}
                    value={socialprofile}
                    />
                </label>
               {
                email && username && socialprofile &&
                <button
                onClick={handleSubmit}
                className='submitData'
                type='submit'>
                    Save
                </button>
                }
               <div>{pending && <ReactLoading type='spin' color='red' height={20} width={20}/>}</div>
               
                {/* <div></div> */}

                </form>
                )
                     
            }      
            
        </div>
    </div>
    </AnimatedRoutes>
  )
}

export default Form