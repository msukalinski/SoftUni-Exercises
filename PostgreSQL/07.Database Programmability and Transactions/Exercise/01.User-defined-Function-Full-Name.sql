CREATE OR REPLACE FUNCTION fn_full_name( first_name VARCHAR, last_name VARCHAR) 
RETURNS VARCHAR(101)
LANGUAGE plpgsql
AS
$$
BEGIN
	RETURN INITCAP(LOWER(first_name)) || ' ' || INITCAP(LOWER(last_name));
END;
$$;

SELECT fn_full_name('fred', 'sanford');


-- CREATE FUNCTION fn_full_name(first_name VARCHAR, last_name VARCHAR)
-- RETURNS VARCHAR
-- AS
-- $$
-- BEGIN
-- 	IF
-- 		first_name IS NULL AND last_name IS NULL THEN
-- 			RETURN NULL;
-- 	END IF;

-- 	IF
-- 		first_name IS NULL THEN
-- 		RETURN INITCAP(last_name);
-- 	END IF;
	
-- 	IF
-- 		last_name IS NULL THEN
-- 		RETURN INITCAP(first_name);
-- 	END IF;

-- 	RETURN INITCAP(first_name) || ' ' || INITCAP(last_name);
-- END;
-- $$
-- LANGUAGE plpgsql;