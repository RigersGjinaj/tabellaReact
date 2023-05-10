import { useState } from "react";
import "./table.css";
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
  { name: "Pippo", age: 25, gender: "Male" },
  { name: "Paperino", age: 25, gender: "Male" },
];

function Tabella() {
  const [student, setStudent] = useState(data);
  function elimina(s: String) {
    setStudent(student.filter((obj) => obj.name !== s));
  }
  return (
    <>
      <table>
        <tr>
          <th>Nome</th>
          <th>Anni</th>
          <th>Genere</th>
          <th>Azione</th>
        </tr>
        {student.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>
                <button onClick={() => elimina(val.name)}>Elimina</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Tabella;
