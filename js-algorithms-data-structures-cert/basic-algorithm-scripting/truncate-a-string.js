// // Truncate a string (first argument) 
// if it is longer than the given maximum string 
// length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length > num) {

        let dots = '...'
        let newString = str.substring(0, num)
        // console.log(str.substring(0, num));
        let string = newString.concat(dots);
        // console.log(string);
        return string;
    } else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));