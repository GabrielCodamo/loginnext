"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { GithubFilled } from "@ant-design/icons"

import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";



interface InterUser {
  name: string
  email: string
  password: string
}

export function UserRegisterForm() {

  const [data, setData] = useState<InterUser>({
    name: "",
    email: "",
    password: ""
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()
  
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()

    setIsLoading(true);

    const request = await fetch("api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    })

     const response = await request.json()

    console.log("Indo Do front para a API users", response)

    if (!request.ok) {
      toast.error('', {
        description:
          <div className="font-medium text-red-600">
            {response.error}
          </div>
      })
     
    } else {
      toast.success("Cadastrado realizado com sucesso");
      setData({
        name: "",
        email: "",
        password: ""
      })
      router.push("/login")
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <Card>
      {/* {JSON.stringify(data)}
      comando para verificar os dados desse formulario */}
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-6">
          <div className=" mt-4 flex items-center gap-3">
            <Label className="pl-1 pt-3" htmlFor="name">Nome:</Label>
            <Input
              id="name"
              type="text"
              placeholder="jonhdee"
              className="mt-3 w-full font-light"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="name"
              value={data.name}
              onChange={handleChange} />
          </div>
          <div className="flex items-center gap-3">
            <Label className="p-1 " htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              placeholder="jonhdee@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              name="email"
              value={data.email}
              disabled={isLoading}
              onChange={handleChange}
              className="mt-1 w-full  font-light " />
          </div>
          <div className="flex items-center gap-3">
            <Label
              className="min-w-10 pl-1 pr-1.5"
              htmlFor="password">Senha: </Label>
            <Input
              id="password"
              type="password"
              placeholder="*************"
              autoCapitalize="none"
              autoCorrect="off"
              className="mt-1 w-full font-light"
              value={data.password}
              name="password"
              disabled={isLoading}
              onChange={handleChange} />
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-screen rounded-lg ml-1 mt-1 bg-cyan-400
              shadow-lg shadow-cyan-500/100
            hover:bg-cyan-300"
              disabled={isLoading}>
              {isLoading && (
                <Loader2 className="mr-4 h-4 w-4 animate-spin" />
              )
              }
              Registrar
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          <div className="flex">
            <Button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              variant="outline"
              type="button"
              disabled={isLoading}
              className="w-screen gap-2 font-light rounded-lg shadow-lg ml-1 hover:bg-slate-100"
            >
              {isLoading ? (
                <Loader2 className="mr-4 h-4 w-4 animate-spin" />
              ) : (
                <GithubFilled />
              )}{" "}
              Login com Github
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}
