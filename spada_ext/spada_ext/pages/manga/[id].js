import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { useState } from 'react'

export default function Reader(){
  const router = useRouter()
  const { id } = router.query
  const [page,setPage]=useState(1)
  const totalPages = 5

  return (
    <Layout title={`Reading ${id}`}>
      <h2 style={{color:'white'}}>Reader: {id}</h2>

      <div style={{marginTop:20}}>
        <img 
          src={`https://placehold.co/800x1200?text=${id}+Page+${page}`} 
          style={{width:'100%',borderRadius:12}}
        />
      </div>

      <div style={{marginTop:20,display:'flex',gap:10}}>
        <button disabled={page<=1} onClick={()=>setPage(page-1)}>Prev</button>
        <button disabled={page>=totalPages} onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </Layout>
  )
}
