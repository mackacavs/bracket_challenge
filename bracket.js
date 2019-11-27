function bracket(brackets) {

  let opening = 0

  for (i = 0; i < brackets.length; i++) {
    brackets[i] === '(' ? opening += 1 : opening -= 1

    if (opening === -1) {
      return false
    }
  }

  return opening === 0 ? true : false

}













// () => the answer is true
//  ((())) => the answer is true
//  (()()()) => the answer is true
//  ((())()) => the answer is true
//  (((( => the answer is false
//  )( => the answer is false
