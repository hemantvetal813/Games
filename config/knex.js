process.env.NODE_ENV='development'
let config = require('./config').get(process.env.NODE_ENV);
console.log(process.env.NODE_ENV)
module.exports.knex1 = require('knex')({
    client: 'mysql',
    connection: {
        host: config.db_host,
        user: config.db_username,
        password: config.db_password,
        database: config.db_name,
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: 300000
});
module.exports.knex2 = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Nopass!111',
        database: "Tenant_Master",
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: 300000
});