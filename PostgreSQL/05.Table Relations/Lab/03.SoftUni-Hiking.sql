SELECT
	start_point,
	end_point,
	leader_id,
	CONCAT_WS(' ', l.first_name, l.last_name) AS leader_name
FROM
	routes AS r
JOIN
	campers AS l
		ON
	r.leader_id = l.id;