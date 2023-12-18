SELECT 
    ui.index_name AS IndexName,
    LISTAGG(tc.column_name, ', ') WITHIN GROUP (ORDER BY uic.column_position) AS ColumnNames
FROM 
    ALL_INDEXES ui
JOIN 
    ALL_IND_COLUMNS uic ON ui.index_name = uic.index_name AND ui.table_name = uic.table_name AND ui.table_owner = uic.table_owner
JOIN 
    ALL_TAB_COLUMNS tc ON ui.table_name = tc.table_name AND uic.column_name = tc.column_name AND ui.table_owner = tc.owner
WHERE 
    ui.uniqueness = 'UNIQUE'
    AND ui.table_name = UPPER('TABLE_NAME')
GROUP BY 
    ui.index_name;