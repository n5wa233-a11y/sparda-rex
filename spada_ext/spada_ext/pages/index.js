import Layout from '../components/Layout'
import MangaCard from '../components/MangaCard'
import useSWR from 'swr'
const fetcher=url=>fetch(url).then(r=>r.json())

export default function Home(){
  const {data}=useSWR('/api/manga',fetcher)
  const list = data?.manga || []
  return (
    <Layout title="Spada Home">
      <h1 style={{color:'white'}}>Latest Manga</h1>
      <div className="grid">
        {list.map(m => <MangaCard key={m.id} m={m} />)}
      </div>
    </Layout>
  )
}
