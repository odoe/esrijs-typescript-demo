// oh man, look at this sweet type signature
var formatter: (i: number) => (n: number) => { x: number }
  = (i: number) => {
  return (n: any) => {
    if (n === undefined) {
      return 0;
    }
    return n.toFixed(i);
  }
};

export = formatter;
