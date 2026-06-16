SELECT
	p.id AS photo_id,
	p.capture_date,
	p.description,
	COUNT(c.id) AS comments_count
FROM
	photos AS p
JOIN
	comments AS C
ON
	c.photo_id = p.id
WHERE
	p.description IS NOT NULL
GROUP BY
	p.id
ORDER BY
	comments_count DESC,
	p.id ASC
LIMIT 3;