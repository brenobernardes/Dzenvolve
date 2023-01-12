import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import moment from 'moment';
import ToggleVisibility from './components/toggleVisibility/ToggleVisibility';
import FormUser from './pages/form';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

export default function App() {
  const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/return").then((res) => {
            setList(res.data);
            console.log(res.data)
        });
    }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>

      <ToggleVisibility>
        <FormUser />
      </ToggleVisibility>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Sexo</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Profissão</th>
          </tr>
        </thead>
        <tbody>
          {list.map((props, index) => {

            const handleDelete = (id) => {
              id = props.id;
              console.log(id)
              axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
                  window.location.reload();
              })
            }

            let date = props.nascimento;
            let test = moment(date, "MM-DD-YYYY")
            console.log(test)
            return(
              <tr key={index}>
                <td>{props.id}</td>
                <td>{props.nome}</td>
                <td>{props.sexo}</td>
                <td>{props.cpf}</td>
                <td>{props.nascimento}</td>
                <td>{props.email}</td>
                <td>{props.telefone}</td>
                <td>{props.profissao_id}</td>
                <td><DeleteIcon className="buttonDelete" onClick={handleDelete}></DeleteIcon></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}