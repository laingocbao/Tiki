module.exports = {
    "port": 3600,
    "environment": "dev",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    },
    "DATABASE": {
        "HOST": 'localhost',
        "USER": 'root',
        "PASSWORD": '',
        "DATABASE_NAME": 'ListBookTiki'
    },
    "time_interval": 12 * (60 * 60)
};
