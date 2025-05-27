"use client"
// só pode ser usado como component client
import { SessionProvider } from "next-auth/react"
export default function AuthProvider({
    children,
  }:{
    children: React.ReactNode
  }) {
    return (
      <SessionProvider>
        {children}
      </SessionProvider>
    )
}