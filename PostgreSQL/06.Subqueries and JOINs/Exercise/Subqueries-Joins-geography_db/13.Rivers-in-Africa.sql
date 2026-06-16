SELECT
	c.country_name,
	r.river_name
FROM
	countries c
LEFT JOIN
	countries_rivers c_r
USING(country_code)
LEFT JOIN
	rivers r
ON
	r.id = c_r.river_id
WHERE
	c.continent_code = 'AF'
ORDER BY
	c.country_name
LIMIT 5;


-- SELECT
-- 	c.country_name,
-- 	r.river_name
-- FROM
-- 	countries c
-- FULL JOIN
-- -- JOIN
-- 	countries_rivers c_r
-- USING (country_code)
-- FULL JOIN
-- -- JOIN
-- 	rivers r
-- ON
-- 	c_r.river_id = r.id
-- WHERE
-- 	c.continent_code = 'AF'
-- ORDER BY
-- 	c.country_name ASC
-- LIMIT 5;