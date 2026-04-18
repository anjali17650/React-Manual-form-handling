import React from 'react'
import {useState} from 'react'

const App = () => {
  const[data,setData] = useState({
    firstName: '',
    lastName: '',
    postalCode:'',
    email: '',
    message: '',

  });
  const[error,setError] = useState({})

  const handleChange = (e)=>{
    const {name, value} =e.target;
    setData({
      ...data,
      [name]: value
    });
  }
  const validate = ()=>{
    let errors={};
    if(!data.firstName){
      errors.firstName = 'First name is required!';
    }
    if(!data.lastName){
      errors.lastName = 'Last name is required!';
    }
    if(!data.postalCode){
      errors.postalCode = 'Postal Code is required!';
    }
    if(!data.email.includes('@')){
      errors.email='Invalid Email!';
    }
    if(!data.message){
      errors.message='Message is required!'
    }
    return errors;
  }

  const submitHandler= (e) =>{
    e.preventDefault();
    const validation = validate ();
    setError(validation);

    if(Object.keys(validation).length===0){
      console.log('Form submitted',data);
      setData({
        firstName:'',
        lastName:'',
        postalCode:'',
        email:'',
        message:''
      });
    }
    
    
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-[#30c5d2] via-[#471069] to-[#471069]'>
      <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-x-0.5 
              bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6'>
        <div className=' p-2  px-2 mt-2 mb-2  '>
          <div className='h-8 w-20 mx-5 my-3 px-3 py-1 bg-white/5  text-white rounded'>Contact</div>
          <h1 className='text-4xl text-white mx-3 my-3 px-3 py-1'>Get in touch with us!</h1>
          <p className='font-serif font-xs text-white mx-3 my-3 px-3 py-1'>Have questions or ideas? We'd love to hear you from you. Reach out anytime and let's connect.</p>
          <button className='mx-5 my-3 px-3 py-0.5  h-7 w-30 bg-teal-400 rounded'>Contact Us</button>
        </div>
        
      
        <div className='p-4 m-2 bg-black/50 text-white rounded-2xl flex flex-col  '>
          <h1 className='text-xl font-semibold mb-6'>Contact Us</h1>
          <form 
            className="flex flex-col h-full"
            onSubmit={submitHandler}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4' >
              <div>
              <input 
              name='firstName'
              value={data.firstName}
              className='w-full py-1 bg-transparent border-b border-gray-400 text-white outline-none' 
              type='text' 
              placeholder='First Name'
              onChange={handleChange}
              />
            {error.firstName && <p className="text-red-300 text-sm mt-1 h-4">{error.firstName}</p>}
            </div>
            <div>
              <input 
              name='lastName'
              value={data.lastName}
              className='w-full py-1 bg-transparent border-b border-gray-400 text-white outline-none' 
              type='text' 
              placeholder='Last Name'
              onChange={handleChange}
              />
            {error.lastName && <p className="text-red-300 text-sm mt-1 h-4">{error.lastName}</p>}
            </div>
            <div>
              <input 
              name='postalCode'
              value={data.postalCode}
              className='w-full py-1 bg-transparent border-b border-gray-400 text-white outline-none' 
              type='number' 
              placeholder='Postal Code'
              onChange={handleChange}
              />
            {error.postalCode && <p className="text-red-300 text-sm mt-1 h-4">{error.postalCode}</p>}
            </div>
            <div>
              <input 
              name='email'
              value={data.email}
              className='w-full py-1 bg-transparent border-b border-gray-400 text-white outline-none' 
              type='email' 
              placeholder='Email Address'
              onChange={handleChange}
              />
            {error.email && <p className="text-red-300 text-sm mt-1 h-4">{error.email}</p>}
            </div>
            <div>
              <input 
              name='message'
              value={data.message}
              className='w-full py-3 bg-transparent border-b border-gray-400 text-white outline-none' 
              type='text' 
              placeholder='Message'
              onChange={handleChange}
              />
            {error.message && <p className="text-red-300 text-sm mt-1 h-4">{error.message}</p>}
            </div>
            </div>
            <div className='mt-auto pt-6'>
              <button 
              className='mx-2 my-4 px-3 py-1 bg-teal-400 text-black cursor-pointer rounded'
              
              >Submit</button>
            </div>
            
            
          </form>
          
        </div>
      </div>
    </div>
   
  )
}

export default App
