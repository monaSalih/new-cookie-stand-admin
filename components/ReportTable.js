import { hours } from "../data";
export default function ReportTable(props) {
  let total_cookie = 0
  
  return (
    <>
      <p className="flex justify-center">Report Table Coming Soon ...</p>
      <table className="p-2 mx-auto bg-green-400 rounded">
        <thead className="p-2 bg-green-600 rounded">
          <tr className="">
            <th>location</th>
            {hours.map((hour) => {
              return <th className="pl-2 pr-2 text-center">{hour}</th>;
            })}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {props.store.map((item, key) => {
            total_cookie = 0
            return (
            <tr key={`${key}`}>
            <td className="px-2 border-2 border-gray-600 rounded">{item.location}</td>
            
            {item.hourly_sales.map((item, key) => {
              total_cookie += item
              return (
                <td className="px-2 border-2 border-gray-600">{item}</td> 
              )
            })}
            <td className="px-2 border-2 border-gray-600 rounded">{total}</td>
            </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="px-2 border-2 border-gray-600">Totals</td>
            {hours.map((hour, key) => {
              return <td className="px-2 border-2 border-gray-600">{hour}</td>;
            })}
            <td className="px-2 border-2 border-gray-600">Totals</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}