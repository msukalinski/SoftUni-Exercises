SELECT
	b.booking_id,
	b.apartment_id,
	c.companion_full_name
FROM
	bookings AS b
JOIN
	customers AS c
USING (customer_id)
WHERE
	b.apartment_id IS NULL;


-- SELECT
-- 	b.booking_id,
-- 	a.apartment_id,
-- 	c.companion_full_name
-- FROM
-- 	bookings AS b
-- FULL JOIN
-- 	apartments AS a
-- USING (apartment_id)
-- JOIN
-- 	customers AS c
-- USING (customer_id)
-- WHERE
-- 	a.apartment_id IS NULL;