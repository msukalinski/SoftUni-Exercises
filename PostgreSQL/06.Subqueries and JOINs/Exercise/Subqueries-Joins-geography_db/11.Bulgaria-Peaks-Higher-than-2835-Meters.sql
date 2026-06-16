SELECT
	m_c.country_code,
	m.mountain_range,
	p.peak_name,
	p.elevation
FROM
	mountains m
JOIN
	peaks p
ON
	m.id = p.mountain_id
JOIN
	mountains_countries m_c
ON
	m_c.mountain_id = m.id
WHERE
	p.elevation > 2835
		AND
	m_c.country_code = 'BG'
ORDER BY
	p.elevation DESC;