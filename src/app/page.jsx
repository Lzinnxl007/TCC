'use client'

import Footer from "@/components/Default/Footer"
import Header from "@/components/Default/Header"
import ScrollToTop from "@/components/Default/ScrollToTop"
import Intro from "@/components/Initial/Intro"
import Main from "@/components/Initial/Main"
import Modal from "@/components/Initial/Modal"
import ReviewCard from "@/components/Initial/ReviewCard"
import VideoApresentation from "@/components/Initial/VideoApresentation"
import React, { useEffect } from 'react';
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from "@/utils/firebase/firebase"
import useFcmToken from "@/utils/hooks/useFcmToken"
export default function Home() {

  const { fcmToken, notificationPermissionStatus } = useFcmToken()

  fcmToken && console.log('FCM token:', fcmToken)


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if ("Notification" in window) {
      if (Notification.permission !== "granted" && Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
          if (permission === "granted") {
            Notification.requestPermission()
          }
        })
      }
    }

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log('Foreground push notification received:', payload)
       
      })
      return () => {
        unsubscribe() 
      }
    }
  }, [])


  return (
      <div className="min-h-screen bg-[var(--orange)] overflow-hidden">
          <Header/>
          <Main/>
          <VideoApresentation/>
          <div className="w-full h-auto py-28 lg:gap-y-28 flex items-center lg:flex-col justify-evenly bg-[var(--light-grey)] dark:bg-zinc-800">
            <ReviewCard
            name="Vanessa A."
            career="Nutricionista"
            image="/nutri.jpg"
            text="O Desperdício Zero é uma fonte nutricional abrangente, oferecendo receitas detalhadas com tabelas nutricionais e cálculos de IMC. Essa plataforma promove escolhas alimentares conscientes, sendo uma valiosa aliada para uma abordagem saudável e sustentável."/>

            <ReviewCard
            name="Priscila N."
            career="Psicologa"
            image="/psico.jpg"
            text="O site Desperdício Zero é uma abordagem psicologicamente consciente que, ao explorar temas como a compulsão alimentar, oferece informações valiosas e promove a conexão emocional com práticas sustentáveis, tornando-se um aliado no processo de transformação pessoal e coletiva."/>
          </div> 
          <Footer/>
          <ScrollToTop/>
          <Modal/>
      </div>
  )
}
/*<div className="w-full h-[80vh] flex items-center justify-around py-10 bg-[var(--light-grey)] dark:bg-zinc-800">
            <ReviewCard
            name="Julia Dias"
            career="Nutricionista"
            image="https://img.freepik.com/free-photo/young-woman-holding-two-green-red-apple_23-2148076020.jpg?size=626&ext=jpg&uid=R66330385&ga=GA1.2.1125086435.1688662802&semt=ais"
            text="[citação]"/>

            <ReviewCard
            name=""
            career="Nutricionista"
            image=""
            text=""/>
          </div> */