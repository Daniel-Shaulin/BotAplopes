db.get("key").then(value => {});
const Database = require("@replit/database");


module.exports.run = async(client, message, args) =>{
  const db = new Database();
  console.log(args);
  db.set(args, args);
  
  db.get(args).then(value => {
    value.add("testando");
    console.log(value);
  });
}

