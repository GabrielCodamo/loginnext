import { UserRegisterForm } from "@/components/user-register-auth"
import { Metadata } from "next"



export const metadata: Metadata = {
  title: "Register",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>

      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-tr
      from-purple-500 
      to-yellow-600">
        <div className="mx-auto w-full max-w-md space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground text-white sm:text-4xl">Criar Conta</h1>
            <p className="mt-2 text-white text-muted-foreground">Cadastre seus dados de login.</p>
          </div>
          <UserRegisterForm />
        </div>
      </div>
    </>
  )
}