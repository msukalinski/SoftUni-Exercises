CREATE VIEW view_continents_countries_currencies_details
AS
SELECT
	CONCAT_WS(': ', c.continent_name, c.continent_code) AS continent_details,
	CONCAT(co.country_name, ' - ', co.capital, ' - ', area_in_sq_km, ' - ', 'km2') AS country_information,
	CONCAT_WS(' ', cu.description, CONCAT('(', cu.currency_code, ')')) AS currencies
FROM
	continents c
JOIN
    countries co
ON
    c.continent_code = co.continent_code
JOIN
    currencies cu
ON
    co.currency_code = cu.currency_code
ORDER BY
    country_information ASC, currencies ASC;