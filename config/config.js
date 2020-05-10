let environment = {
    development: {
        //        "db_host": "vernostdevuat.cz7vnhsdptrh.us-east-1.rds.amazonaws.com", //
        // "db_username": "bespoke",
        // "db_password": "b3$p0k3",
        // "db_name": "BeSpokesitdb",
        // "jwt_token_secret": "bespoke",
        "db_host": "localhost",
        "db_username": "root",
        "db_password": "Nopass!111",
        "db_name": "Tenant_Master",
        "jwt_token_secret": "bespoke",
        port: 3000,
        expireTime: 60 * 60 * 24,
        }
};

exports.get = function(env) {
    try {
        return environment[env];
    } catch (err) {
        console.log(err)
    }
};