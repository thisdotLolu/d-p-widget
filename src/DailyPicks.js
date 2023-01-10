import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import AnimatedRoutes from './AnimatedRoutes';
import './DailyPicks.css'
// import {useState} from 'react'




const DailyPicks=()=>{

    const {arrowbtc1,arrowbtc2,arrowusd2,arrowusd1,arrowsp1,arrowsp2,setArrowbtc1,setArrowbtc2,setArrowusd1,setArrowusd2,setArrowsp1,setArrowsp2}=useContext(UserContext)
    return(
    <>
    <AnimatedRoutes>
    <div className='dailyPicks'>
    <img src='/Playfair Soft Logo 2022.png'
    alt='playfair_logoo'
    className='playfair_logoo'
    />
    <h2 className='dailyPicks_text'>Daily Picks</h2>
        <div className='stocks'>
            <div className='stock'>
                <img 
                className='stock_img'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png'
                alt='Bitcoin Logo'
                />
                <p>BTC</p>
                <div className='arrow_container'>
                    {/* <div className='arrow_down'></div> */}
                    <img
                        onClick={()=>{
                            setArrowbtc2(!arrowbtc2)
                            setArrowbtc1(!arrowbtc1)
                        }}
                        className={arrowbtc1?'arrow_active arrow_up':'arrow_inactive'}
                        src='http://www.clker.com/cliparts/8/8/2/2/11949856011357057871arrow-up-green_benji_par_01.svg.hi.png'
                        alt='rise'/>
                    
                    <img 
                      onClick={()=>{
                        setArrowbtc1(!arrowbtc1)
                        setArrowbtc2(!arrowbtc2)
                    }}
                      className={arrowbtc2?'arrow_active arrow_down':'arrow_inactive'}
                    //   className='arrow_down'
                      src='https://storage.needpix.com/thumbs/down-24813_1280.png'
                      alt='fall'/>
                </div>
            </div>
            <div className='stock'>
                <img 
                className='stock_img'
                src='https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-dollar-symbol-signs-icons-1.png'
                alt='USD Logo'
                />
                <p>USD</p>
                <div className='arrow_container'>
                    {/* <div className='arrow_down'></div> */}                 
                        <img
                        onClick={()=>{
                            setArrowusd2(!arrowusd2)
                            setArrowusd1(!arrowusd1)
                        }}
                        className={arrowusd1?'arrow_active arrow_up':'arrow_inactive'}
                        src='http://www.clker.com/cliparts/8/8/2/2/11949856011357057871arrow-up-green_benji_par_01.svg.hi.png'
                        alt='rise'/>
                    
                    <img 
                      onClick={()=>{
                        setArrowusd1(!arrowusd1)
                        setArrowusd2(!arrowusd2)
                    }}
                      className={arrowusd2?'arrow_active arrow_down':'arrow_inactive'}
                    //   className='arrow_down'
                      src='https://storage.needpix.com/thumbs/down-24813_1280.png'
                      alt='fall'/>
                    
                          
                </div>
            </div>
            <div className='stock'>
                <img 
                className='stock_img'
                src='https://hindiallkuchh.com/wp-content/uploads/2022/05/sp-logo.png'
                alt='S and P Logo'
                />
                <p>S&P 500</p>
                <img
                        onClick={()=>{
                            setArrowsp2(!arrowsp2)
                            setArrowsp1(!arrowsp1)
                        }}
                        className={arrowsp1?'arrow_active arrow_up':'arrow_inactive'}
                        src='http://www.clker.com/cliparts/8/8/2/2/11949856011357057871arrow-up-green_benji_par_01.svg.hi.png'
                        alt='rise'/>
                    
                    <img 
                      onClick={()=>{
                        setArrowsp1(!arrowsp1)
                        setArrowsp2(!arrowsp2)
                    }}
                      className={arrowsp2?'arrow_active arrow_down':'arrow_inactive'}
                    //   className='arrow_down'
                      src='https://storage.needpix.com/thumbs/down-24813_1280.png'
                      alt='fall'/>

            </div>
        </div>
        <Link to='/form'>
        <button
        className='submit'
        >
            Submit
        </button>
        </Link>
    </div>
    </AnimatedRoutes>
    
    </>
    )
}


export default DailyPicks;