function fizzbuzz (num) {
  for(i=0;i <= num;i++) {
    if (i%3 === 0 && i%5 === 0) {
      console.log('fizzbuzz');
      continue;
    }

    if (i%3 === 0) {
      console.log(`fizz`);
      continue;
    }

    if (i % 5 === 0) {
      console.log(`buzz`);
      continue;
    }
    console.log(i);
  }
}

fizzbuzz(30);