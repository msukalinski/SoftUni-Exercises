UPDATE
	countries c
SET
	country_name = 'Burma'
WHERE
	country_name = 'Myanmar';

INSERT INTO
	monasteries (monastery_name, country_code)
VALUES
	('Hanga Abbey', (SELECT country_code FROM countries WHERE country_name = 'Tanzania')),
	('Myin-Tin-Daik', (SELECT country_code FROM countries WHERE country_name = 'Myanmar'));

SELECT
	con.continent_name,
	cou.country_name,
	COUNT(m.id) AS monasteries_count
FROM
	continents con
JOIN
	countries cou
USING (continent_code)
LEFT JOIN
	monasteries m
USING (country_code)
WHERE
	cou.three_rivers = 'FALSE'
GROUP BY
	cou.country_name,
	con.continent_name
ORDER BY
	monasteries_count DESC,
	cou.country_name ASC;



-- UPDATE
-- 	countries c
-- SET
-- 	country_name = 'Burma'
-- WHERE
-- 	country_name = 'Myanmar';

-- INSERT INTO
-- 	monasteries (monastery_name, country_code)
-- SELECT
-- 	'Hanga Abbey',
-- 	country_code
-- FROM
-- 	countries
-- WHERE
-- 	country_name = 'Tanzania';

-- INSERT INTO
-- 	monasteries (monastery_name, country_code)
-- SELECT
-- 	'Myin-Tin-Daik', country_code
-- FROM
-- 	countries
-- WHERE
-- 	country_name = 'Myanmar';

-- SELECT 
--     cont.continent_name,
--     c.country_name,
--     COUNT(m.id) AS number_of_monasteries
-- FROM
-- 	continents cont
-- JOIN
-- 	countries c
-- ON
-- 	c.continent_code = cont.continent_code
-- LEFT JOIN
-- 	monasteries m
-- 		ON
-- 	m.country_code = c.country_code
-- WHERE
-- 	c.three_rivers = FALSE
-- GROUP BY
-- 	c.country_name,
-- 	cont.continent_name
-- ORDER BY
-- 	number_of_monasteries DESC,
-- 	c.country_name ASC;