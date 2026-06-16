CREATE TABLE accounts(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	username VARCHAR(30) NOT NULL UNIQUE,
	password VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
	gender CHAR(1) NOT NULL,
	age INT NOT NULL,
	job_title VARCHAR(40) NOT NULL,
	ip VARCHAR(30) NOT NULL,

	CONSTRAINT chk_gender_char
	CHECK(gender IN ('M', 'F'))
);

CREATE TABLE addresses(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	street VARCHAR(30) NOT NULL,
	town VARCHAR(30) NOT NULL,
	country VARCHAR(30) NOT NULL,
	account_id INT NOT NULL,

	CONSTRAINT fk_accounts_addresses
	FOREIGN KEY(account_id)
	REFERENCES accounts(id)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);

CREATE TABLE photos(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	description TEXT,
	capture_date TIMESTAMP NOT NULL,
	views INT DEFAULT 0 NOT NULL,

	CONSTRAINT chk_views_positive
	CHECK(views >= 0)
);

CREATE TABLE comments(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	content VARCHAR(255) NOT NULL,
	published_on TIMESTAMP NOT NULL,
	photo_id INT NOT NULL,

	CONSTRAINT fk_photos_comments
	FOREIGN KEY (photo_id)
	REFERENCES photos(id)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);

CREATE TABLE accounts_photos(
	account_id INT NOT NULL,
	photo_id INT NOT NULL,

	CONSTRAINT pk_accounts_photos
	PRIMARY KEY (account_id, photo_id),

	CONSTRAINT fk_accounts_photos_accounts
	FOREIGN KEY (account_id)
	REFERENCES accounts(id)
	ON UPDATE CASCADE
	ON DELETE CASCADE,
	
	CONSTRAINT fk_accounts_photos_photos
	FOREIGN KEY (photo_id)
	REFERENCES photos(id)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);

CREATE TABLE likes(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	photo_id INT NOT NULL,
	account_id INT NOT NULL,

	CONSTRAINT fk_photos_likes
	FOREIGN KEY (photo_id)
	REFERENCES photos(id)
	ON UPDATE CASCADE
	ON DELETE CASCADE,
	
	CONSTRAINT fk_accounts_likes
	FOREIGN KEY (account_id)
	REFERENCES accounts(id)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);