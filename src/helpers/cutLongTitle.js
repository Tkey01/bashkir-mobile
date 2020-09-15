const deleteLastWord = (str) => {
  const arrStr = str.split(' ')
  arrStr.pop()
  return arrStr.join(' ')
}

const MAX_LENGTH = 27

export const cutLongTitle = (str) => {
  let result = str

  while (result.length > MAX_LENGTH) {
    result = deleteLastWord(result)
  }

  return str.length > MAX_LENGTH ? `${result}...` : result
}
