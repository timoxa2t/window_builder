import style from'./css/App.module.css';
import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {
  return (
    <div className={style.App}>
      <Header/>
      <Body/>

    </div>
  );
}

export default App;
