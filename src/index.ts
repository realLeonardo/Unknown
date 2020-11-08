import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'

(()=>{
  const pathname: string = location.pathname

  switch(pathname){
    case '/': {
      MainPage.init()
      break
    }
    case '/about': {
      AboutPage.init()
      break
    }
    default: {
      window.location.href = '/'
    }
  }

})()
