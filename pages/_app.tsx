import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { GetServerSideProps } from 'next';
import { UserContext } from '../lib/context';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <UserContext.Provider value={{user: {}, username: 'Andrew'}}>
     <Navbar />
     <Component {...pageProps} />
     <Toaster/>
     </UserContext.Provider>
    </> 
  );
}

export default MyApp