CREATE OR REPLACE PROCEDURE udp_update_loyalty_status(min_orders INT)
LANGUAGE plpgsql
AS
$$
BEGIN
	UPDATE
		customers AS c
	SET
		loyalty_card = TRUE
	WHERE(
		SELECT
			COUNT(*)
		FROM
			orders AS o
		WHERE
			o.customer_id = c.id
	) >= min_orders;
END;
$$