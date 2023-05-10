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
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState("");
  const [anni, setAnni] = useState("");
  const [genere, setGenere] = useState("");
  function elimina(s: String) {
    setStudent(student.filter((obj) => obj.name !== s));
  }
  function aggiungi() {
    student.push({ name: nome, age: parseInt(anni), gender: genere });
    setStudent(student);
    setShowForm(false);
  }
  return (
    <>
      <center>
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
        <br />
        <button onClick={() => setShowForm(true)}>
          Inserisci uno studente
        </button>
        <div className="inserimeto">
          {showForm && (
            <form onSubmit={() => aggiungi()}>
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                onChange={(e) => setNome(e.target.value)}
              />
              <br /> <br />
              <label>Anni:</label>
              <input
                type="text"
                name="anni"
                onChange={(e) => setAnni(e.target.value)}
              />
              <br /> <br />
              <label>Genere: </label>
              <select name="genere" onChange={(e) => setGenere(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <br /> <br />
              <br />
              <input type="submit" value="Aggiungi" />
            </form>
          )}
        </div>
      </center>
    </>
  );
}

export default Tabella;
