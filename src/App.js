import style from'./css/App.module.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Route, Routes } from 'react-router-dom';
import { Builder } from './components/Builder';

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Body>
        <Routes >
            <Route path="/" element={<Builder/>}/>
        </Routes >
      </Body>

    </div>
  );
}

export default App;
