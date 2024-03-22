const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "ThousifX@6361",
  database: process.env.DB_DATABASE || "Apartment",
  insecureAuth: true,
  protocol: "mysql",
}; 

module.exports = config;
