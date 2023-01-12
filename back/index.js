const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
require("dotenv").config();

const serverHost = process.env.host;
const serverDb = process.env.db;
const serverUser = process.env.user;
const serverPassword = process.env.password;

const db = mysql.createConnection({
    host: serverHost,
    database: serverDb,
    user: serverUser,
    password: serverPassword
});

db.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Connected");

        const dbName = "dz_dev_test";

        db.query(`USE ${dbName}`, (err) => {
            if(err) throw err;
        });
    }
})

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    const userCpf = req.body.cpf;
    const birthDate = req.body.birthDate;
    const userEmail = req.body.email;
    const phone = req.body.phone;
    const profession = req.body.profession;

    let saveDb = "INSERT INTO users (name, gender, userCpf, birthDate, userEmail, phone, profession) VALUES ( ?, ?, ?, ? )";
    db.query(saveDb, [nome, sexo, cpf, nascimento, cpf , email, telefone], (err, result) => {
        if (err) res.send(err);
        res.send(result);
    });
});

app.get("/return", (req, res) => {
    console.log("Teste")
    let dbReturnData = "SELECT * FROM pessoas WHERE sexo LIKE 'Feminino'";
    db.query(dbReturnData, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result)
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    let dbDelete = "DELETE FROM pessoas WHERE id = ?";
    db.query(dbDelete, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("server rodando")
});