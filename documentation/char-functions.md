## CONCAT
- Concatenates two strings and returns the combined string.
- The arguments do not need to be the same data type.

```
CONCAT(string1, string2)
```

- [Examples](https://livesql.oracle.com/apex/livesql/s/szqr03dc8grt6k6ufa9kxkr9)
- [Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/CONCAT.html)

## INITCAP
- Capitalizes the first letter of each word in a string, while converting the rest of the letters to lowercase.
	- Also works with dates.

```
INITCAP(string)
```

- [Examples](https://livesql.oracle.com/apex/livesql/s/pl2zn2by4a1korbuy8qk7qlr)
- [Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/INITCAP.html)

## LOWER
- Converts all characters in a string to lowercase.
	- Also works with dates.

```
LOWER(string)
```

- [Examples](https://livesql.oracle.com/apex/livesql/s/pmgyzmxayl39j3l7uromtxht)
- [Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/LOWER.html)

## UPPER
- Converts all characters in a string to uppercase.
	- Also works with dates.

```
UPPER(string)
```

- [Examples](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/LOWER.html)
- [Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/LOWER.html)

## LPAD & RPAD
- Pads the left/right-side of a string with a specific set of characters.

```
LPAD(string1, padded_length, [, pad_string])
RPAD(string1, padded_length, [, pad_string])
```

### Semantics
| ARGUMENT        | DESCRIPTION                                                             | DATATYPE          | OPTIONAL? |
|-----------------|-------------------------------------------------------------------------|-------------------|-----------|
| _string1_       | the string to pad characters to (the left/right-hand side)              | Any String value  |     ❌     |
| _padded_length_ | the number of characters to return                                      | Any Integer value |     ❌     |
| _pad_string_    | the string that will be padded to the left/right-hand side of _string1_ | Any String value  |     ✅     |

### Notes
- Default value for *pad_string* is blank space.
- If *string1* is NULL, the function returns NULL.
- If *padded_length* is smaller than the original string, the function will truncate the string to the size of *padded_length*.

### Examples & Documentation
- [Examples](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/LOWER.html)
- [Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/LOWER.html)
