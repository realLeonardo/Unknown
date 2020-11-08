import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'

(()=>{
  const pathname: string = location.pathname
  const origin: string = location.origin

  let BASE_PATHNAME: string = '/Unknown/dist'

  // NOTE: dev
  if(origin === 'http://localhost:8080'){
    BASE_PATHNAME = ''
  }

  switch(pathname){
    case BASE_PATHNAME + '/': {
      MainPage.init()
      break
    }
    case BASE_PATHNAME + '/about': {
      AboutPage.init()
      break
    }
    default: {
      window.location.href = '/'
    }
  }

})()
