var formatter: Function = ((i: number) => {
  return (n: any) => {
    if (n === undefined) {
      return 0;
    }
    return n.toFixed(i);
  }
});

export default formatter;
