const scope = {
    // 填写需要翻译的 i18n 语言文件键值对
    hello: '你好',
}

const hans = require('./locales/hans')
const hant = require('./locales/hant')

const translateHansToHant = (scope) => (
    Object.entries(scope).reduce((acc, cur) => {
        const key = cur[0]
        const value = cur[1]
        let newValue = ''
        for (let index = 0; index < value.length; index++) {
            const currentChar = value.charAt(index)
            const foundIndex = hans.indexOf(currentChar)
            if (foundIndex != -1) newValue += hant.charAt(foundIndex)
            else newValue += currentChar
        }
        acc[key] = newValue
        return acc
    }, {})
)

console.log(translateHansToHant(scope))