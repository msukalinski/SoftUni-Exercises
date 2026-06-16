SELECT
	m_c.country_code,
	COUNT(m.mountain_range) AS mountain_range_count
FROM
	mountains m
JOIN
	mountains_countries m_c
ON
	m.id = m_c.mountain_id
WHERE
	m_c.country_code IN ('BG', 'RU', 'US')
GROUP BY
	m_c.country_code
ORDER BY
	mountain_range_count DESC;