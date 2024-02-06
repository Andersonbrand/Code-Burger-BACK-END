module.exports = {
  dialect: "postgres",
  url: 'PGPASSWORD=eE3eDea-FG5aEcE2acedfgFg4G*g5Fb3 psql -h monorail.proxy.rlwy.net -U postgres -p 39917 -d railway',
  define: {
    timespamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

//module.exports = {
  //dialect: "postgres",
  //host: "localhost",
  //username: "postgres",
  //password: "postgres",
  //database: "codeburger",
  //define: {
    //timespamps: true,
    //underscored: true,
    //underscoredAll: true,
  //},
//}