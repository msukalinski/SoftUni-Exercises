SELECT
	id,
	TO_CHAR(created_at, 'DD-MM-YYYY') AS created_at,
	customer_id
FROM
	orders
WHERE
	customer_id BETWEEN 15 AND 30
		AND
	created_at > '01-01-2025'
ORDER BY
	created_at ASC,
	customer_id DESC,
	id ASC
LIMIT 5;