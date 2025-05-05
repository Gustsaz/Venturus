USE venturus;
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(70),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email_verification_token VARCHAR(64),
    email_verified BIT DEFAULT 0
);


SELECT * from user

