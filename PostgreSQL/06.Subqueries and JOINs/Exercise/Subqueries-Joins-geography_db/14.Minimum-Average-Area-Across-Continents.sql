SELECT
	MIN(avg_area) AS minimum_average_area
FROM(
	SELECT AVG(c.area_in_sq_km) AS avg_area
	FROM
		countries c
	JOIN
		continents co
	USING(continent_code)
	GROUP BY co.continent_name
) AS cont_average;