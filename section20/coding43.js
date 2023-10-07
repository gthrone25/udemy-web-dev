// DEFINE YOUR FUNCTION BELOW:

function returnDay(numDay) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (numDay >= 1 && numDay <= 7) {
        return days[numDay - 1];
    } else {
        return null;
    }
}