SELECT
	CONCAT_WS(' - ', o.name, a.name) AS "owners - animals",
	o.phone_number,
	c.id
FROM
	owners AS o
JOIN
	animals AS a
ON
	a.owner_id = o.id
JOIN
	animals_cages AS ac
ON
	ac.animal_id = a.id
JOIN
	cages AS c
ON
	ac.cage_id = c.id
JOIN
	animal_types AS at
ON
	at.id = a.animal_type_id
WHERE
	at.animal_type = 'Mammals'
ORDER BY
	o.name ASC,
	a.name DESC;