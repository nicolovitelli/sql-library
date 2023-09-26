SELECT 
    cols.column_name AS primary_key_column,
    cols.constraint_name AS constraint_name
FROM
    all_constraints cons
JOIN
    all_cons_columns cols
ON
    cons.owner = cols.owner
    AND cons.constraint_name = cols.constraint_name
WHERE
    cons.constraint_type = 'P' -- Primary Key constraint
    AND cons.table_name = UPPER('TABLE_NAME_HERE') -- Set table name