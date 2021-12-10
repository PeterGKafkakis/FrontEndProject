CREATE TABLE customers
(
    cutomer_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL
);

INSERT INTO customers
    (first_name,
    last_name, email, phone)
VALUES
    ('Peter', 'Kafkakis', 'petergkafkakis@gmail.com', '4433073305');