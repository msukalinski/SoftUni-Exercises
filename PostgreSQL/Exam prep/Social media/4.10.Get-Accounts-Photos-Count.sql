CREATE OR REPLACE FUNCTION udf_accounts_photos_count(
account_username VARCHAR(30)
)RETURNS INT
LANGUAGE plpgsql
AS
$$
DECLARE p_count INT;
BEGIN
	SELECT
		COUNT(p.id)
	INTO
		p_count
	FROM
		photos AS p
	JOIN
		accounts_photos AS ap
	ON
		ap.photo_id = p.id
	JOIN
		accounts AS a
	ON
		ap.account_id = a.id
	WHERE
		a.username = account_username;
	RETURN p_count;
END;
$$;
