import style from'./css/App.module.css';
import { BarcodeInfo } from './components/BarcodeInfo';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Route, Routes } from 'react-router-dom';
import { Builder } from './components/Builder';
import { Main } from './components/Main';
import { Profile } from './components/Profile';


function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Body>
        <Routes >
            <Route path="/" element={<Main/>}/>
            <Route path="/builder" element={<Builder/>}/>
            <Route path="/details/:barcode" element={<BarcodeInfo />} />   
            <Route path="/profile" element={<Profile/>}/>        
        </Routes >
      </Body>

    </div>
  );
}

export default App;
