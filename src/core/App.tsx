import React from 'react'

import Layout from './Layout'

import Playground from '../containers/Playground'
import Main from '../components/Main'

const App: React.FC = () => {
  return (
    <Layout>
      <Main>
        <Playground />
      </Main>
    </Layout>
  )
}

export default App
