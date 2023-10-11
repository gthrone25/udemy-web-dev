// DEFINE YOUR FUNCTION BELOW:

function lastElement(arrayarg) {
    if (arrayarg.length === 0) {
        return null;
    } else {
        return arrayarg[arrayarg.length - 1];
    }
}