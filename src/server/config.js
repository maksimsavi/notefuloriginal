module.exports = {
NODE_ENV: process.env.NODE_ENV  || 'development',
DB_URL: process.env.DB_URL || "postgresql://postgres@localhost/noteful-data",
PORT: process.env.PORT || 8000,
API_TOKEN: process.env.API_TOKEN || "supercrazytoken"
}