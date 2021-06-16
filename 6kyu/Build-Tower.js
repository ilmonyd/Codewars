function towerBuilder(num) {
    let temp = [];
    for (let i = 0; i < num; i++) temp.push(' '.repeat(num - i - 1) + '*'.repeat(1 + i*2) + ' '.repeat(num - i - 1));
    return temp;
}
