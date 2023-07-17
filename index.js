import app from "./src/utils/app.js"


app.listen(app.get("port"), ()=>{
    console.log(`app listening at http://localhost:${ app.get("port") }`);
})