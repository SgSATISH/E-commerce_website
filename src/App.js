
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/Store'
import Footer from './components/Footer';


function App() {
  return (
    <>

      <Provider store={store}>

        <Navbar />

        <Home />
        <Cart />
        <Footer />

      </Provider>

    </>
  );
}

export default App;
