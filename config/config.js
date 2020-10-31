let environment = {
    development: {
        "db_host": "localhost",
        "db_username": "root",
        "db_password": "Nopass!111",
        "db_name": "jkasdnjksd",
        "jwt_token_secret": "bdaksbdjak",
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
