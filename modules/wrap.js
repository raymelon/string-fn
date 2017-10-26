
export default function wrap (str, wrapLimit, flag = false) {
  wrapLimit = wrapLimit <= 0 ?
    1 :
    wrapLimit

  const strAsArr = str.split('')
  const willReturn = []
  let counter = 0

  Array(str.length).fill()
    .map((val, key) => {
      if (key === counter) {
        const nextCellKey = key + wrapLimit

        if (nextCellKey > strAsArr.length) {
          willReturn.push(str.substr(key))
        } else {
          const shortString = str.substr(key, wrapLimit)

          if (strAsArr[ nextCellKey ] === ' ') {
            willReturn.push(shortString)
            counter = nextCellKey + 1
          } else {
            let spaceCellKey = shortString.lastIndexOf(' ')

            if (spaceCellKey > -1) {
              willReturn.push(shortString.substring(0, spaceCellKey))
              counter = spaceCellKey + key + 1
            } else {
              const longSubstring = str.substr(key)

              spaceCellKey = longSubstring.indexOf(' ')

              if (spaceCellKey > -1) {
                if (flag) {
                  willReturn.push(longSubstring.substring(0, spaceCellKey))
                }
                counter = spaceCellKey + key + 1
              } else {
                if (flag) {
                  willReturn.push(longSubstring)
                }
                counter = str.length
              }
            }
          }
        }
      }
    })

  return willReturn
}
