'use client'

import { useChat } from 'ai/react'
import { useEffect, useState } from 'react'

export default function Home() {

  const [translatedText, setTranslatedText] = useState('')
  const [food, setFood] = useState(null)

  const { messages } = useChat({
    api: '/api/chat'
  })

  console.log(messages)

  const translate = async(text) => {
    

  }
  translate("pasta")

  const getNutritionData = async(food) => {
    const url = `https://api.api-ninjas.com/v1/nutrition?query=${food}`
    const options = {
      headers: {
      'X-Api-Key': 'rAgMPMibBFeHTYLmKmT8+Q==3nHC5anU2vr0352F'
    },
  }

  const res = await fetch(url, options)
  setFood(await res.json())

}



  useEffect(() => {
    if(translatedText) {
      getNutritionData(translatedText)
    }
  }, [translatedText])

  
  return (
    <>
        {food && JSON.stringify(food)}
    </>
  )
}
