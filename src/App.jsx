import './App.css'
import Footer from './layouts/appLayout/Footer'
import Header from './layouts/appLayout/Header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'


function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
     
    </>
  )
}

export default App;
