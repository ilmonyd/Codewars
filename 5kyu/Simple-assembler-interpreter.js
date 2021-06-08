function simple_assembler(opt) {
  let register = {};
  for (let i = 0; i < opt.length; i++) {
    let c = opt[i].split(' ');
    switch(c[0]) {
      case "mov":
        if (/[a-z]/g.test(c[2])) register[c[1]] = register[c[2]];
        else register[c[1]] = parseInt(c[2]);
        break;
      case "inc":
        register[c[1]] += 1;
        break;
      case "dec":
        register[c[1]] -= 1;
        break;
      case "jnz":
        if (register[c[1]] != 0) {
          i += parseInt(c[2]);
          i--;
        }
        break;
    }
  }
  return register;
}