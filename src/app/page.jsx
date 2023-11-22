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