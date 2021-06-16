const expandedForm = num => num.toString()
                                .split('')
                                .map((val, i) => val += '0'.repeat(num.toString().length - i - 1))
                                .filter(n => eval(n) !== 0)
                                .join(' + ');