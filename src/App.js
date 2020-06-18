import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`http://backend-sample-project-dl-f73-sandbox.apps.ocp3.eu-west-1.stable.aws.vwdl.de/api/product`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        setProducts(res)
        return res;
      })
      .catch(error => {
        console.log("error")
      });
  }, [])

  return (
    <div className="App">
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {`${p.name} - ${p.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
