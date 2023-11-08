import { useState, useCallback, useEffect,useRef } from 'react'


import './App.css'

function App() {
  const [Lenght,setLenght] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [Chr,setChr] =useState(false);
  const [Password,setPassword] =useState("");
  const PasswordRef =useRef(null);




  const copyToClipboard = useCallback(()=>{
    PasswordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
    },[Password])
  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz";
    if(NumberAllowed) str += "0123456789"
    if(Chr) str += "!@#$%^&*()_+~`=><?\/"

    for(let i = 1; i<= Lenght; i++)
    {
       let char = Math.floor(Math.random() *str.length +1);
      //  console.log(char);  
       pass  += str.charAt(char);
          }
    setPassword(pass);   
  },
  [Lenght, NumberAllowed, Chr, setPassword])
  
  useEffect(() => {
    passwordGenerater()
  }, [Lenght, NumberAllowed, Chr,passwordGenerater])
  
  return (
    <>
    <div className='p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg mt-5'>
    <h1 className="text-xl font-medium text-black text-center mt-2">Password Generater</h1>
      <div className=" flex items-center space-x-4">
  <div className="shrink-0">
    <img clasNames="h-5 w-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JwVjqMCin0TiS-3SkyQCF2KQ7MW6v6zPtWdsRYE&s" alt="ChitChat Logo" />
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChatPwd..</div>
    {/* <p className="text-xl text-bold font-medium text-red-500">
    {Password}
    
    </p> */}
    <input type='text' className="outline-none text-xl text-bold font-medium text-red-500" value={Password} ref={PasswordRef} />
    <p className="text-slate-500">! Copy to ClipBoard</p>
  </div>
</div>
<div className='flex gap-x-2'>
<input type="range"
  min={6}
  max={33}
  value={Lenght}
  onChange ={(e)=>{setLenght(e.target.value)}}
/>
<label>Lenght:{Lenght}</label>
<input type="checkbox"
  onChange ={()=>{setNumberAllowed((prev) => !prev)}}
/>
<label>Numbers</label>
<input type="checkbox"
   onChange ={()=>{setChr((prev) => !prev)}}
/>
<label>Characters</label>
</div>

<button onClick={copyToClipboard} className='mt-2 text-xl font-semibold
              outline-none bg-blue-700 text-white
              px-4 py-2 shrink-0 rounded-lg shadow-xl
              hover:bg-fuchsia-600'>
             Copy</button>


    </div>
      
  
    </>
  )
}

export default App
