import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function FormUser () {

    const [user, setUser] = useState({
        name: "",
        gender: "",
        cpf: "",
        birthDate: "",
        email: "",
        phone: "",
        profession: ""
        
    });

    const onChangeInput = e => setUser ({...user, [e.target.name]: e.target.value});

    console.log(setUser)

    const sendData = () => {
        axios.post("http://localhost:3001/register", {
            name: user.name,
            gender: user.gender,
            cpf: user.cpf,
            birthDate: user.birthDate,
            email: user.email,
            phone: user.phone,
            profession: user.profession
        })
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="name" 
                    placeholder="Nome" 
                    onChange={onChangeInput}
                    value={user.name}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sexo</Form.Label>
                    <Form.Select aria-label="Sexo">
                        <option>Selecione o gênero</option>
                        <option value="1">Masculino</option>
                        <option value="2">Feminino</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control 
                    type="cpf" 
                    placeholder="cpf" 
                    onChange={onChangeInput}
                    value={user.cpf}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="birthdate" 
                    placeholder="Data de Nascimento" 
                    onChange={onChangeInput}
                    value={user.birthDate}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Email" 
                    onChange={onChangeInput}
                    value={user.email}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="phone" 
                    placeholder="Telefone" 
                    onChange={onChangeInput}
                    value={user.phone}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Profissão</Form.Label>
                    <Form.Control type="profession" 
                    placeholder="Profissão" 
                    onChange={onChangeInput}
                    value={user.profession}
                    />
                </Form.Group>

                <Button onClick={sendData}>Cadastrar</Button>
            </Form>
        </div>
    )
}