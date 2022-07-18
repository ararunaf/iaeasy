import Botoesnotificacao from '../Botoesnotificacao'
import './styles.css'

function Salescard() {
  return (
    <div className="gen-card">
      <h2 className="font-gen-card-titulo">Encontre seu Produto</h2>
      <div className="gen-form-control-container">
        <h4>Produto</h4>
        <input className="gen-form-control" type="text" />

      </div>
      <div className="gen-form-control-container">
        <h4>Volume</h4>
        <input className="gen-form-control" type="text" />
      </div>

      <div>
        <table className="gen-produtos-table">
          <thead className="gen-produtos-table-thead">
            <tr className="gen-produtos-table-thead-tbody-tr">
              <th className="show576">Código</th>
              <th className="show992">Pedido</th>
              <th className="show992">Data</th>
              <th className="show992">Status</th>
              <th>Nome</th>
              <th>Volume(ml)</th>
              <th>Preço</th>
              <th>Apresentação</th>

            </tr>
          </thead>
          <tbody className="gen-produtos-table-thead-tbody">
            <tr>
              <td className="show576">Codigo</td>
              <td className="show992">Pedido</td>
              <td className="show992">Data</td>
              <td className="show992">Status</td>
              <td>NomeProduto</td>
              <td>Ml</td>
              <td>Preço</td>
              <td>
                <div className="gen-red-btn-container" >
                  <Botoesnotificacao/>
                </div>
              </td>
              <td></td>

            </tr>

          </tbody>
        </table>
      </div>

    </div>

  )
}

export default Salescard