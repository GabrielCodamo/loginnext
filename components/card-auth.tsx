
"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { UserOutlined } from "@ant-design/icons"

import { useSession, signOut } from "next-auth/react"
import Image from "next/image"

export default function CardAuth() {
  const { data: session } = useSession()

  return (
    <div>
      {/* <Card>
        <CardContent className="max-w-md items-start"> */}
      <div className="flex flex-col justify-center items-center gap-4 mt-5">
        <Avatar className="h-24 w-24">
          <AvatarFallback>
            {
              session?.user?.image ? <Image className="rounded-full" src={
                session?.user?.image
                ?? ""} width={92} height={92} alt="Imagem de Logado" />
                :
                <UserOutlined style={{ fontSize: '24px', color: 'gray' }} />
            }
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-xl ">Bem Vindo, <span className="font-bold">{session?.user?.name}</span></div>
          <div className="text-sm ml-1 font-bold">{session?.user?.email}</div>
          {/* <div className="text-sm ml-1 "> and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div> */}
        </div>
      </div>
      <div className="flex justify-center mt-7 ">
        <Button onClick={() => signOut()} className="w-40 bg-neutral-950 shadow-md hover:bg-neutral-700">
          Sair
        </Button>
      </div>
      {/* </CardContent>
        </Card> */}
    </div>
  )
}