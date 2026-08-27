import React from 'react'
import './css/global.css'
import './css/style.css'
import { useState } from 'react'
import Header from './components/Header'
import Resultado from './components/Resultado'

const App = () => {

  //HOOKS - useState - manipula o estado da varável
  const [peso, setPeso]=useState(0);
  const [altura, setAltura]=useState(0);
  const [resultado, setResultado]=useState(0);

  //Função Calcular IMC
  const calcularImc=()=>{
    if (peso > 0 && altura > 0){
      //Formula do imc
      const imc = peso / (altura * altura)
      setResultado(imc)
    } else{
      alert("Preencha valores Válidos")
    }
  }

  //Mostrar o resultado se for maior que 0
  const mostrarResultado = resultado > 0;


  return (
    // FRAGMENTS <> </>
    <main className="container">
      <div className="box">
        <Header />
        <form>
          <div>
            <label htmlFor="altura">Altura <span className="span">(ex.1.80)</span></label>
            <input
              id="altura"
              type="number"
              step="0.01"// permite o usuaro de ponto/virgula decimais
              placeholder="Digite sua altura"
              onChange={({ target }) => setAltura(parseFloat(target.value) || 0)}
            />
          </div>

          <div>
            <label htmlFor="peso">Peso<span className="span">(ex. 80kg)</span></label>
            <input
              id="peso"
              type="number"
              step="0.01"// permite o usuaro de ponto/virgula decimais
              placeholder="Digite seu peso"
              onChange={({ target }) => setPeso(parseFloat(target.value) || 0)}
            />
          </div>
          <button type="button" onClick={calcularImc}>Calcular</button>
        </form>
      </div>

      {mostrarResultado && (
        //Envia o valor formatado com 2 casas decimais via destruct para o componente resultado
        <Resultado resultado={resultado.toFixed(2)} />
      )}
    </main>

  )
}

export default App