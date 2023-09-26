SET SERVEROUTPUT ON;

DECLARE
    v_table_name VARCHAR2(30) := 'TABLE_NAME_HERE';
    v_level NUMBER := 1;
    
    PROCEDURE FindRelatedTables(p_table_name VARCHAR2, p_level NUMBER) IS
    BEGIN
        FOR c IN (SELECT DISTINCT ac.table_name
                  FROM all_constraints ac
                  WHERE ac.constraint_type = 'R' AND ac.r_constraint_name IN (
                      SELECT constraint_name
                      FROM all_constraints
                      WHERE table_name = p_table_name
                  ))
        LOOP
            DBMS_OUTPUT.PUT_LINE('Level ' || p_level || ': Table ' || p_table_name || ' deletes rows in Table ' || c.table_name);
            FindRelatedTables(c.table_name, p_level + 1);
        END LOOP;
    END FindRelatedTables;
BEGIN
    FindRelatedTables(v_table_name, v_level);
END;
/