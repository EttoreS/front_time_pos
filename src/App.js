import './App.css';
import React from 'react';
function App() {

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/get_time_br")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Nota: é importante lidar com errros aqui
        // em vez de um bloco catch() para não receber
        // exceções de erros reais nos componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  console.log('aaa', items[0].mon )
  return (
    <div className="App">
      <header className="App-header">
        {
          items.length>0 
          ?(
            <>
              <p>
                {items[0].day}/{items[0].mon}/{items[0].year}
              </p>
              <p>
                {items[0].hour}:{items[0].min}
              </p>
            </>
          )
          :(
            <p>
              Espere um momento
            </p>
            )
        }
        
      </header>
    </div>
  );
}

export default App;
