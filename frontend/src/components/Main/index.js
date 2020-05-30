import React from "react";
import "./styles.css";

function Main() {
  return (
    <>
      <div className="main">
        <section className="section-form">
          <form>
            <input className="input-task" placeholder="Tarefa"></input>

            <div>
              <input
                className="input-time"
                placeholder="Horario de Início:"
              ></input>
              <input
                className="input-time"
                placeholder="Horário de termino:"
              ></input>
            </div>
            <div>
              <button>ADD</button>
            </div>
          </form>
        </section>

        <div>Local de Renderização</div>
      </div>
    </>
  );
}

export default Main;
