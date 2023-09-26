SELECT 
    constraint_name AS foreign_key_name,
    table_name AS source_table,
    column_name AS source_column,
    r_table_name AS referenced_table,
    r_column_name AS referenced_column
FROM (
    SELECT 
        cons.constraint_name,
        cons.table_name,
        cols.column_name,
        cons.r_constraint_name,
        cons.r_owner,
        r_cols.table_name AS r_table_name,
        r_cols.column_name AS r_column_name
    FROM
        all_constraints cons
    JOIN
        all_cons_columns cols
    ON
        cons.owner = cols.owner
        AND cons.constraint_name = cols.constraint_name
    LEFT JOIN
        all_constraints r_cons
    ON
        cons.r_owner = r_cons.owner
        AND cons.r_constraint_name = r_cons.constraint_name
    LEFT JOIN
        all_cons_columns r_cols
    ON
        r_cons.owner = r_cols.owner
        AND r_cons.constraint_name = r_cols.constraint_name
    WHERE
        cons.constraint_type = 'R' -- Foreign Key constraint
        AND cons.table_name = UPPER('TABLE_NAME_HERE') -- Set table name
) ORDER BY
    table_name, constraint_name, column_name;