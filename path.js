const path= require("path");
console.log(path.dirname(" C:/Users/gajadhav/Documents/DailyPrograms/7-07-2021Programs/path.js"));//Return directory
console.log(path.extname(" C:/Users/gajadhav/Documents/DailyPrograms/7-07-2021Programs/path.js"));//file extension
console.log(path.basename(" C:/Users/gajadhav/Documents/DailyPrograms/7-07-2021Programs/path.js"));//file name with extention
console.log(path.parse("C:/Users/gajadhav/Documents/DailyPrograms/7-07-2021Programs/path.js"));//return object
  const obj=path.parse("C:/Users/gajadhav/Documents/DailyPrograms/7-07-2021Programs/path.js");
  console.log(obj.name);
  console.log(obj.root);
  console.log(obj.ext);
  console.log(obj.base);
