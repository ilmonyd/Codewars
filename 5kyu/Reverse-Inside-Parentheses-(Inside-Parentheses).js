function reverseInParens(str) {
  const toStr = (node, lvl = 0) => {
    const result = (lvl % 2 < 1 ? node.items : node.items.reverse()).map(i => (i.items ? toStr(i, lvl + 1) : i)).join("");
    return lvl > 0 ? `(${result})` : result;
  };
  let current = { items: [] };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      let nested = { parent: current, items: [] };
      current.items.push(nested);
      current = nested;
    }
    else if (str[i] === ")") current = current.parent;
    else current.items.push(str[i]);
  }
  return toStr(current);
}