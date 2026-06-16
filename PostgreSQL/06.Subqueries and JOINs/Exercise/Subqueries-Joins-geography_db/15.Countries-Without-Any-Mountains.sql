SELECT
	COUNT(c.id)
FROM
	countries c
LEFT JOIN
	mountains_countries m_c
USING(country_code)
WHERE
	m_c.mountain_id IS NULL;


-- SELECT
-- 	COUNT(c.id) as countries_without_mountains
-- FROM
-- 	countries c
-- FULL JOIN
-- 	mountains_countries m_c
-- USING(country_code)
-- WHERE
-- 	m_c IS NULL;