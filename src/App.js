import React, { useState } from 'react';
import './App.css'; // Asegúrate de importar el archivo CSS

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', subject: '', grade: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newStudent.name && newStudent.subject && newStudent.grade) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: '', subject: '', grade: '' });
    }
  };

  return (
    <div className="App">
      <h1>Registro de Estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Materia:
          <input
            type="text"
            name="subject"
            value={newStudent.subject}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Calificación:
          <input
            type="text"
            name="grade"
            value={newStudent.grade}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Agregar Estudiante</button>
      </form>

      <h2>Lista de Estudiantes</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {student.name}, <strong>Materia:</strong> {student.subject}, <strong>Calificación:</strong> {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
