import Header from "./componentes/Header"
import Salescard from "./componentes/Salescard"
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="produtos">
          <div className="gen-card-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>

  )
}

export default App
