import Header from './components/Header';
import Routes from './Routes/routes';
import GlobalStyle from './style/global';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Routes/>
      <ToastContainer autoClose={3000}/>
    </>
  );
}

export default App;
