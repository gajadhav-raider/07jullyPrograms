  const fs= require('fs');
 // fs.mkdir('Asynchfolder',(err)=>{console.log("Folder Created")});
//  fs.writeFile("Asynchfolder/data.txt","Today is awesome day how are you I am fine ",(error)=>{console.log
// // ("File is Created")});
// fs.appendFile("Asynchfolder/data.txt"," My name is Gaurav Jadhav ",
// (error)=>{console.log(" Update the information ")});
 //fs.readFile("Asynchfolder/data.txt","UTF-8",(err,data)=>{console.log(data)});
 
fs.unlink("Sample/mydata.txt",(error)=>{console.log("file is Deleted")});
 