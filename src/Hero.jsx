import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className='row'>
        <div className="col">
        <div className="left">
        <h1 className='intro1'>Hello Guys</h1>
        <h1 className='intro2'>I'm <span>Sneha</span></h1>
        <h1 className='intro3'> Web Designer/Developer</h1>
        <p className="i-desc">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
          </p>
          <button className="arrow-button">
            HIRE ME  <img src="https://th.bing.com/th/id/R.79a8ecc8e0064345cf64683ccca3c418?rik=uXA7J48cGGZCAA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7Ta%2f6eR%2f7Ta6eRqLc.png&ehk=%2bS6BzWU7Cohv2P0Y8gD%2bdsomiRTl%2fyF3xsGbi7Rlbkk%3d&risl=&pid=ImgRaw&r=0" alt="img" height={40} width={30}/>
          </button>
        </div>
        </div>
        <div className="col">
        <div className="right"> 
            <img src="https://img.freepik.com/free-vector/3d-cartoon-young-woman-sitting-using-laptop-character-illustration-vector-design_40876-3101.jpg" />
        </div>
        </div>
        <div className='banner'>
          <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Emblem.jpg" alt=""  /> 
          <img src="https://i.pinimg.com/564x/df/82/e5/df82e50a43a7b13a37eb837b6a4f6add.jpg"  alt="" />
          <img src="https://i.pinimg.com/564x/0b/6c/5a/0b6c5a385c87b5eb5e638b7d41fde8b4.jpg"  alt="" />
          <img src="https://i.pinimg.com/564x/8d/bc/eb/8dbcebf213790acd366b5b08b26cd353.jpg"  alt="" />
          <img src="https://i.pinimg.com/564x/11/e4/c8/11e4c8171604c0d32f080fd5bdc2c13b.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero