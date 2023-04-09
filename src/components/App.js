import { useEffect, useState } from "react";

import Students from "./Students";

import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [err, setError] = useState(false);

  useEffect(() => {
    fetch("/data/students.json")
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się pobrać danych ...");
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setStudents(data.students);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  console.log(students)
  
  return (
    <>
        <section>
          <h1 className= "center colorPurple">Lista uczniów</h1>
        </section>
        <section className="grid-container">
          {err
          ? 'Nie udało się wczytać danych ...'
          :  students.map((student) => (
              <section key={student.id}>
                <Students
                  id={student.id}
                  name={student.name}
                  surname={student.surname}
                  class={student.class}
                  mail={student.mail} />
              </section>
            ))
          }
        </section>
    </>
  );
};

export default App;
