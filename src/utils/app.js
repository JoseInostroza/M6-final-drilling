import express, { json } from "express"
import {readDoc, writeDoc} from "../utils/actions.js"
import { stringify, v4 as uuid } from 'uuid';

//setings


//instancia
const app= express();

//port
app.set("port", process.env.port || 3500)
app.use( express.json() )


//endpoints anime
app.get("/api/v1/anime", async(req,res)=>{
    let data = await readDoc('animes.json')
    res.send(data)
});

app.post("/api/v1/anime", async(req,res)=>{
    let id= uuid().slice(0,4);
    let {nombre, autor, genero, año} = (req.body);
    let data = await readDoc('animes.json');
    let nuevoAnime=  {
        "nombre": nombre,
        "genero": genero,
        "año": año,
        "autor": autor
    };
    data[id]= nuevoAnime;
    writeDoc('animes.json',data);
    res.send(data)
});

app.put("/api/v1/anime/:id", async(req,res)=>{
    let id = req.params.id;
    let {nombre, autor, genero, año}= (req.body);
    let data = await readDoc('animes.json');
    let animeEdit = data[id];
    animeEdit.nombre = nombre || animeEdit.nombre
    animeEdit.autor = autor || animeEdit.autor
    animeEdit.genero = genero || animeEdit.genero
    animeEdit.año = año || animeEdit.año
    writeDoc('animes.json',data)
    res.send(data)

});

app.delete("/api/v1/anime/:id", async(req,res)=>{
    let id = req.params.id;
    let data = await readDoc('animes.json')
    delete data[id]
    writeDoc('animes.json', data)
    res.send(data)
});

//export
export default app