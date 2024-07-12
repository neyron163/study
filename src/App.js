import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [id, setId] = useState(1);
  return (
    <div className="App">
      <div className='red'>
        <div className='orange'>
          <h1 className='yellow'>
            Выбирайте лучшее
          </h1>
          <div className='yellow2'>
            <button className={id === 1 ? `active green` : 'green'} onClick={() => setId(1)}>
              Для всех
            </button>
            <button className={id === 2 ? 'active green' : `green`} onClick={() => setId(2)}>
              Малому бизнесу
            </button>
            <button className={id === 3 ? 'active green' : `green`} onClick={() => setId(3)}>
              Крупному изнесу
            </button>
            
          </div>
        </div>

        {id === 1 && (
        <div className='blue'>
          <div className='violet1'>
            <h2 className='sky-title'>
              Дебетовые карты
            </h2>
            <p className='sky-dicription'>
              Суперкешбек
            </p>
            
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png' />

          </div>
          <div className='violet1'>
            <h2 className='sky-title'>
              Кредитные карты
            </h2>
            <p className='sky-dicription'>
              Кешбек за покупки
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/91/be/1449/D_CardPromo_267x298_230524.png'/>
          </div>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
        </div>
        )}

        {id === 2 && (
          <div className='blue'>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
        </div>
        )}
        

        {id === 3 && (
          
                    <div className='blue'>
                      <div className='violet1'>
                    <h2 className='sky-title'>
                      Накопления
                    </h2>
                    <p className='sky-dicription'>
                      Доход спервого месяца
                    </p>
                    <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
                  </div>
                  </div>
        )}
      </div>
    </div>

  )  ;
}

export default App;
