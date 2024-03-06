import { Helmet } from 'react-helmet-async'

import { SearchBar } from '@/components/SearchBar'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div>
        <SearchBar />
      </div>
    </>
  )
}
