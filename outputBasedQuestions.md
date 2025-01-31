# JavaScript Type Coercion Examples

## String and Number Operations in JavaScript

### Example 1: String + Number
```javascript
"2" + 1  // Result: "21"
```
**Explanation:**
- When `+` operator is used with a string and number, JavaScript performs string concatenation
- Number `1` is converted to string "1"
- Strings "2" and "1" are concatenated
- Result is string "21"

### Example 2: String - Number
```javascript
"2" - 1  // Result: 1
```
**Explanation:**
- When `-` operator is used, JavaScript attempts numeric conversion
- String "2" is converted to number 2
- Subtraction is performed: 2 - 1
- Result is number 1

### Additional Examples:
```javascript
"5" + 3   // "53" (string concatenation)
"5" - 3   // 2 (numeric subtraction)
"10" + 5  // "105" (string concatenation)
"10" - 5  // 5 (numeric subtraction)
```

## Key Points:
- `+` operator favors string concatenation when one operand is a string
- `-` operator only works with numbers, forcing numeric conversion
- This demonstrates JavaScript's type coercion rules



