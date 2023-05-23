CREATE TABLE IF NOT EXISTS languages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO languages (name)
VALUES
  ('JavaScript'),
  ('Python'),
  ('Java');
