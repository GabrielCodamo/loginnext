"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import { useState } from "react"

import { GithubFilled } from "@ant-design/icons"
import { Divide, Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

interface UserInter {
  email: string
  password: string
}

export function UserLoginForm() {

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [data, setData] = useState<UserInter>({
    email: "",
    password: "",
  }
  )

  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {

    event.preventDefault()

    setIsLoading(true)

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password, redirect: false
    })

    if (res?.error) {
      toast.error('"Ooops..."', {
        description:
          <div className="font-medium text-red-600">
            {res.error}
          </div>
      })
    } else {
      router.push("/");
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardContent className="space-y-6">
          <div className="flex mt-5 items-center gap-3">
            <Label className="p-1 " htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              placeholder="jonhdee@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={handleChange}
              name="email"
              value={data.email}
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
              value={data.password}
              onChange={handleChange}
              className="mt-1 w-full font-light"
              name="password"
            />
          </div>
          <div className="flex justify-center">
            <Button type="submit" disabled={isLoading} className="w-screen rounded-lg ml-1 mt-1 bg-cyan-400
              shadow-lg shadow-cyan-500/100
            hover:bg-cyan-300">
              {isLoading && (
                <Loader2 className="mr-4 h-4 w-4 animate-spin" />
              )
              }
              Entrar
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
          <div className="flex justify-center">
            <Button
              onClick={() => signIn('github', { callbackUrl: "/" })}
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
      </Card>
    </form>
  )
}
