export const getTemplateStringArray = (str) => {
  let i = 0
  let res = []
  let current = 0
  let insideB = false
  let insideA = false

  if (str[0] === '<' && str[1] === 'a' && str[2] === '>') {
    res[current] = {
      type: 'link',
      text: '',
    }
    insideA = true
    i += 3
  } else if (str[0] === '<' && str[1] === '>') {
    res[current] = {
      type: 'bold',
      text: '',
    }
    insideB = true
    i += 2
  } else {
    res[current] = {
      type: 'normal',
      text: '',
    }
  }

  while (i < str.length) {
    if (str[i] === '<' && str[i + 1] === 'a' && str[i + 2] === '>') {
      insideA = !insideA
      current++
      i += 3
      res[current] = {
        type: insideA ? 'link' : 'normal',
        text: '',
      }
    }

    if (str[i] === '<' && str[i + 1] === '>') {
      insideB = !insideB
      current++
      i += 2
      res[current] = {
        type: insideB ? 'bold' : 'normal',
        text: '',
      }
    }
    res[current].text += str[i] || ''
    i++
  }

  console.log(res)
  return res
}
