CREATE TABLE brands(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE classifications(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE customers(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    address VARCHAR(150) NOT NULL,
    phone VARCHAR(30) NOT NULL UNIQUE,
    loyalty_card BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE items(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(12, 2) NOT NULL,
    description TEXT,
    brand_id INT NOT NULL,
    classification_id INT NOT NULL,

    CONSTRAINT chk_qty
    CHECK (quantity >= 0),

    CONSTRAINT chk_price
    CHECK (price > 0.00),

    CONSTRAINT fk_items_brands
    FOREIGN KEY (brand_id)
    REFERENCES brands(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    CONSTRAINT fk_items_classifications
    FOREIGN KEY (classification_id)
    REFERENCES classifications(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE orders(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    customer_id INT NOT NULL,

    CONSTRAINT fk_orders_customers
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE reviews(
    customer_id INT NOT NULL,
    item_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    rating DECIMAL(3, 1) NOT NULL DEFAULT 0.0,

    CONSTRAINT fk_reviews_customers
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    CONSTRAINT fk_reviews_items
    FOREIGN KEY (item_id)
    REFERENCES items(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    CONSTRAINT pk_customers_items
    PRIMARY KEY (customer_id, item_id),

    CONSTRAINT chk_rating
    CHECK (rating <= 10.0)
);

CREATE TABLE orders_items(
    order_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,

    CONSTRAINT fk_orders_items_orders
    FOREIGN KEY (order_id)
    REFERENCES orders(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    CONSTRAINT fk_orders_items_items
    FOREIGN KEY (item_id)
    REFERENCES items(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

    CONSTRAINT pk_orders_items
    PRIMARY KEY (order_id, item_id),

    CONSTRAINT chk_quantity
    CHECK (quantity >= 0)
);