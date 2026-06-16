SELECT
	last_name as "Last Name",
	TO_CHAR(born, 'DD (Dy) Mon YYYY') AS "Date Of Birth"
FROM
	authors;