-- init.sql
CREATE TABLE wishes (
  id SERIAL PRIMARY KEY,
  wish VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

-- Create the postgres user with the correct password
-- CREATE USER postgres WITH PASSWORD 'password';
-- GRANT ALL PRIVILEGES ON DATABASE wishlist TO postgres;
