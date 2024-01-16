import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Content from './components/Content';
import Header from './components/Header';
import More from './components/More';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Content/>
      <Aboutus/>
      <More/>
      <Forms/>
      <Footer/>
      
    </div>
  );
}

export default App;
