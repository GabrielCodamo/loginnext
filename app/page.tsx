"use client"

import TelaSemAutenticacao from "@/components/tela-auth"
import TelaAutenticada from "@/components/tela-with-auth"

import { useSession } from "next-auth/react"

export default function HomePage() {

  const { data: session } = useSession()
  
 
  if (!session) {
    return (
      <>
        <TelaSemAutenticacao />
      </>
    )

  } else {
    return <TelaAutenticada />
  }
}
