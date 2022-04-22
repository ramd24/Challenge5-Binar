import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './Layouts/Layout';
import Home from './Pages/Home/Home';
import Car from './Pages/Car/Car';
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  return (
    <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/car/:id" element={<Car/>}/>
          </Routes>
        </Layout>
    </>
  );
}

export default App;
