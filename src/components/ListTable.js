import { Table } from 'react-bootstrap';

function ScanTable({scanIdentities}) {
  return (
    <div className="table-page">
      <Table responsive hover >
        <thead>
        <tr className='table-header'>
          <th>ID</th>
          <th>ПОЛНОЕ ИМЯ КЛИЕНТА</th>
          <th>ПОЧТОВЫЙ КОД</th>
          <th>ГОРОД</th>
          <th>ШТАТ</th>
          <th>ПОЛ</th>
          <th>РОСТ</th>
          <th>ДАТА РОЖДЕНИЯ</th>
          <th>СТАТУС ПОЛЬЗОВАТЕЛЯ</th>
        </tr>
        </thead>
        <tbody>
          {
            scanIdentities.map((data, key) => {
              return (
                <tr key={key}>
                  <td className="column-gray">{data.ID}</td>
                  <td>{data.FullName}</td>
                  <td className="column-gray">{data?.PostalCode}</td>
                  <td>{data.City}</td>
                  <td>{data.State}</td>
                  <td>{data.Gender}</td>
                  <td>{data.Height}</td>
                  <td className="column-gray">{data.Birthday}</td>
                  <td style={{color: data.VerdictName === 'Fake'? 'red': 'green'}}>{data.VerdictName}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ScanTable