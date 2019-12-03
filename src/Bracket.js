function bracket(brackets) {

  let openingBracket = 0

  for (i = 0; i < brackets.length; i++) {
    brackets[i] === '(' ? openingBracket += 1 : openingBracket -= 1

    if (openingBracket === -1) {
      return false
    }
  }

  return openingBracket === 0 ? true : false

}