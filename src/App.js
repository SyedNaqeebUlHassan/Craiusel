
import React,{useState,useEffect} from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  color: 'white',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'red',
};
function App() {
  const [image,setImage]=useState();
 useEffect(()=>{
   fetch("https://www.reddit.com/r/aww/top/.json?t=all")
   .then(res=>res.json())
   .then(data=>{
     console.log(data.data.children,'formated')
     console.log(data.data.children[0].data.url_overridden_by_dest,'formated')

     setImage(data.data.children)
   });
 },[])

  console.log(image);
  return (
    <div className='bg-black h-screen' >    
      <Carousel autoplay>
        {image && image.map((img,i)=>(
          <div key={i}>
            <img
            src={img.data.url_overridden_by_dest}
            style={contentStyle}
            className='w-full h-[400px] mt-12'
            alt='img'
            />
          </div>
        ))} 
      </Carousel>

    </div>
  );
}

export default App;
