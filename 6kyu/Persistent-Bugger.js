function persistence(num) {
    let temp = num, iter = 0;
    while (temp > 9) {
        temp = temp.toString().split('').reduce((acc, val) => acc * eval(val), 1);
        iter++;
    }
    return iter;
}