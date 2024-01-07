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
- Add a specified set of characters to the left (LPAD) / right (RPAD) of a string until it reaches a desired length.

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
- [LPAD - Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/LPAD.html)
- [RPAD - Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/RPAD.html)

## LTRIM & RTRIM
- Remove specified set of characters from the left (LTRIM) / right (RTRIM) of a string.

```
LTRIM(string1, [, trim_string])
RTRIM(string1, [, trim_string])
```

### Semantics
| ARGUMENT      | DESCRIPTION                                                                | DATATYPE         | OPTIONAL? |
|---------------|----------------------------------------------------------------------------|------------------|-----------|
| _string1_     | the string to trim the characters from the left/right-hand side            | Any String value | ❌         |
| _trim_string_ | the string that will be removed from the left/right-hand side of _string1_ | Any String value | ✅         |

### Notes
- Default value for *trim_string* is blank space.
- If *string1* and/or *trim_string* are NULL, the function returns NULL.

### Examples & Documentation
- [Examples](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/LOWER.html)
- [LTRIM - Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/LTRIM.html)
- [RTRIM - Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/RTRIM.html)

## TRIM
- Removes specified characters from both the beginning (left) and end (right) of a string.

```
TRIM([[LEADING | TRAILING | BOTH] trim_character FROM] string1)
```

### Semantics
| KEYWORD OR ARGUMENT |                                      DESCRIPTION                                     |     DATATYPE     | OPTIONAL? |
|:-------------------:|:------------------------------------------------------------------------------------:|:----------------:|:---------:|
|       `LEADING`       |         the function will remove _trim_character_ from the left of _string1_.        |         -        |     ✅     |
|       `TRAILING`      |        the function will remove _trim_character_ from the right of _string1_.        |         -        |     ✅     |
|         `BOTH`        | the function will remove _trim_character_ from both the left and right of _string1_. |         -        |     ✅     |
|   _trim_character_  |                  the character that will be removed from _string1_.                  | Any String value |     ✅     |
|      _string1_      |                                  the string to trim.                                 | Any String value |     ❌     |

### Notes
- If you do not specify any keyword between LEADING, TRAILING or BOTH the default option will be BOTH.
- _trim_character_ allows **only** one character.
	- Having more than one character raises the error `ORA-30001: trim set should have only one character`.
- If _string1_ and/or _trim_character_ are NULL, the function returns NULL.

### Examples & Documentation
- [Examples](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/LOWER.html)
- [Oracle Documentation](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/TRIM.html)