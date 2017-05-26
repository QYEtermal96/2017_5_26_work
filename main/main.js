// Write your cade below:
function caclRemaindar( i ,n) {
    return i%n;
};

function caclSum(array) {
    var sum = 0;
    for( var i = 0;i < array.length;i++)
    {
        sum +=array[i];
    }
    return sum
};

function caclSumInConditon(array, num) {
    var sum = 0;
    for(var i = 0;i <array.length ;i++)
    {
        if(array[i] < num)
        {
            sum += array[i];
        }
    }
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}