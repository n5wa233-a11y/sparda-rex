import { useState } from 'react'
import Layout from '../components/Layout'

export default function Login(){
  const [user,setUser]=useState('')
  const [pass,setPass]=useState('')
  const [msg,setMsg]=useState('')

  function submit(e){
    e.preventDefault()
    if(user==='admin' && pass==='123'){
      setMsg('Login Successful')
    } else {
      setMsg('Invalid credentials')
    }
  }

  return (
    <Layout title="Login">
      <h2 style={{color:'white'}}>Login</h2>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:10,maxWidth:300}}>
        <input placeholder="Username" value={user} onChange={e=>setUser(e.target.value)} />
        <input placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
        <button>Login</button>
      </form>
      <p>{msg}</p>
    </Layout>
  )
}
