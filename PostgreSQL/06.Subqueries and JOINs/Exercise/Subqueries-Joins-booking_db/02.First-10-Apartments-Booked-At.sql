SELECT
	a.name AS name,
	a.country AS country,
	to_char (b.booked_at, 'YYYY-MM-DD')
FROM
	apartments AS a
LEFT JOIN
	bookings AS b
USING (apartment_id)
LIMIT 10;