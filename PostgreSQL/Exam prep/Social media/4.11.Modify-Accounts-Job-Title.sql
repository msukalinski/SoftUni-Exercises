CREATE OR REPLACE PROCEDURE udp_modify_account(
	address_street VARCHAR(30),
	address_town VARCHAR(30)
)
LANGUAGE plpgsql
AS
$$
BEGIN
	UPDATE accounts AS ac
	SET job_title = '(Remote) ' || ac.job_title
	FROM
		addresses AS ad
	WHERE
		ad.account_id = ac.id
			AND
		ad.street = address_street
			AND
		ad.town = address_town;
END;
$$;
