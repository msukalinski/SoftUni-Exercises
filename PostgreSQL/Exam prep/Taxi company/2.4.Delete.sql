DELETE FROM
	clients AS c
WHERE
	LENGTH(c.full_name) > 3
		AND
	NOT EXISTS(
		SELECT co.client_id
		FROM
			courses AS co
		WHERE
			c.id = co.client_id
	);