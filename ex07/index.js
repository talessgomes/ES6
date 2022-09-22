const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  
  console.log(sum(0, 1, 2)); //3
  console.log(sum(1, 2, 3, 4)); // 10
  
  /*Passando ...args, eu vou usar um rest parameter
  onde eu posso passar quantos valores eu quiser
  assim eu não tenho um número limite que posso passar para fazer a soma */