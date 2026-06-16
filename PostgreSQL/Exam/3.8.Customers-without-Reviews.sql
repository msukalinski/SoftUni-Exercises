SELECT
	c.id AS customer_id,
	CONCAT(first_name, ' ', last_name) AS full_name,
	COUNT(DISTINCT o.id) AS total_orders,
	CASE
		WHEN c.loyalty_card = TRUE THEN 'Loyal Customer'
		ELSE 'Regular Customer'
	END AS loyalty_status
FROM
	customers AS c
JOIN
	orders AS o
ON
	c.id = o.customer_id
LEFT JOIN
	reviews AS r
ON
	r.customer_id = c.id
WHERE
	r.customer_id IS NULL
GROUP BY
	c.id
ORDER BY
	total_orders DESC,
	customer_id ASC;