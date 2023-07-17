import fs from "fs";
const readDoc = (file)=>{ 
    return new Promise((resolve, reject)=>{
        fs.readFile(`src/db/${file}`, "utf8", (error, data)=>{
            if (error){
                console.log(error);
                reject("Data it's impossible to read, please refresh and try later");
            }
            resolve(JSON.parse(data));
        })
    })
};

const writeDoc = (file, data)=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(`src/db/${file}`, JSON.stringify(data, null, 2),"utf8",(error)=>{
            if(error){
                console.log(error);
                reject("Sorry you don't have permission to edit the document or are unreachable at this moment")
            }
            resolve("All changes have been saved")
        } )
    })
}
export{readDoc, writeDoc}