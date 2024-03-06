import { Helmet } from 'react-helmet-async'

import { Loading } from '../components/Loading'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <div>
        <h1>Home</h1>

        <Loading />
      </div>
    </>
  )
}
