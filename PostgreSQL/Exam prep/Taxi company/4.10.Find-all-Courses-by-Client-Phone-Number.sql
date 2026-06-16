CREATE OR REPLACE FUNCTION fn_courses_by_client(
	phone_num VARCHAR(20)
)RETURNS INT
LANGUAGE plpgsql
AS
$$
DECLARE
	courses_int INT;
BEGIN
	SELECT
		COUNT(co.id)
	INTO
		courses_int
	FROM
		clients AS cl
	JOIN
		courses AS co
	ON
		cl.id = co.client_id
	WHERE
		cl.phone_number = phone_num;
	RETURN courses_int;
END;
$$;