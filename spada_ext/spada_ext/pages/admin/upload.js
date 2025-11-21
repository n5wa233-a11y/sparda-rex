import { useState } from 'react'
import Layout from '../../components/Layout'

export default function Upload(){
  const [title,setTitle]=useState('')
  const [chapter,setChapter]=useState('')
  const [msg,setMsg]=useState('')

  function send(e){
    e.preventDefault()
    setMsg(`Uploaded: ${title} - Chapter ${chapter}`)
  }

  return (
    <Layout title="Admin Upload">
      <h2 style={{color:'white'}}>Upload Manga Chapter</h2>
      <form onSubmit={send} style={{display:'flex',flexDirection:'column',gap:10,maxWidth:300}}>
        <input placeholder="Manga Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Chapter Number" value={chapter} onChange={e=>setChapter(e.target.value)} />
        <button>Upload</button>
      </form>
      <p>{msg}</p>
    </Layout>
  )
}
