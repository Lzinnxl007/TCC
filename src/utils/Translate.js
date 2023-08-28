export const Translate = async (text) => {
    try {
      const response = await fetch(
        `https://translate.yandex.net/api/v1.5/tr.json/translate?key=pdct.1.1.20230827T170544Z.4af01df5d09b2d1f.a7e7edf632ac2c561ca8d0536bcbe93a28c2a5f9&text=${text}&lang=pt`
      )

      const data = await response.json()
      const translation = data.text[0]

      console.log(translation)

      return translation
    } catch (error) {
      console.log(error)
    }
  }