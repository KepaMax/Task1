import { useState } from 'react'

function LoginCard({ setAuthorized, setEmail, email }) {
  const [isValid, setValidation] = useState(false)

  return (
    <form className='flex flex-col items-center justify-center w-[700px] h-[310px] shadow-md shadow-zinc-300 rounded-[13px]'>
      <h2 className='text-3xl font-bold mb-5'>Login Form</h2>
      <div className='flex flex-col'>
        <label>Email</label>
        <input required value={email} type="email"
          onChange={(e) => {
            setEmail(e.target.value)
            setValidation(e.target.checkValidity())
          }}
          className='border border-zinc-300 rounded-[6px] my-2 px-2' />
      </div>
      <button type='submit' disabled={!isValid}
        onClick={() => setAuthorized(isValid)}
        className={`${isValid ? 'bg-[#f6b819] hover:bg-yellow-700' : 'bg-[#d7d7d7] pointer-events-none'} px-5 py-2 rounded-[7px] `}>Submit</button>
    </form>
  )
}

export default LoginCard