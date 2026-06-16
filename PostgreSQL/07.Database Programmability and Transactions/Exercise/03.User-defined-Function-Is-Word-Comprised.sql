CREATE OR REPLACE FUNCTION fn_is_word_comprised(
	set_of_letters VARCHAR(50),
	word VARCHAR(50)
) RETURNS BOOLEAN
LANGUAGE plpgsql
AS
$$
DECLARE
	i INT;
	letter CHAR(1);
BEGIN
	FOR i IN 1..LENGTH(word) LOOP
		letter := SUBSTRING(LOWER(word), i, 1);
		IF POSITION (letter IN LOWER(set_of_letters)) = 0 THEN
			RETURN FALSE;
		END IF;
	END LOOP;
	RETURN TRUE;
END;
$$;


-- CREATE OR REPLACE FUNCTION fn_is_word_comprised(
-- 	set_of_letters VARCHAR(50),
-- 	word VARCHAR(50)
-- ) RETURNS BOOLEAN
-- LANGUAGE plpgsql
-- AS
-- $$
-- BEGIN
-- 	RETURN TRIM(LOWER(word), LOWER(set_of_letters)) = '';
-- END;
-- $$;



-- CREATE OR REPLACE FUNCTION fn_is_word_comprised(set_of_letters VARCHAR(50), word VARCHAR(50))
-- RETURNS BOOLEAN
-- LANGUAGE plpgsql
-- AS
-- $$
-- DECLARE
-- 	current_char CHAR(1);
-- 	i INT := 1;
-- 	cleaned_word VARCHAR(50);
-- BEGIN
-- 	set_of_letters := LOWER(set_of_letters);
-- 	cleaned_word := LOWER(REGEXP_REPLACE(word, '[^a-z]', '', 'g'));
-- 	WHILE
-- 		i <= LENGTH(cleaned_word)
-- 	LOOP
-- 		current_char := SUBSTRING(cleaned_word, i, 1);
-- 		IF
-- 			POSITION(current_char IN set_of_letters) = 0
-- 		THEN
-- 			RETURN FALSE;
-- 		END IF;
-- 		i := i + 1;
-- 	END LOOP;
-- 	RETURN TRUE;
-- END;
-- $$;