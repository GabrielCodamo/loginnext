import { UserLoginForm } from "@/components/user-login-auth"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>

      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8  bg-gradient-to-tr
      from-purple-500 
      to-yellow-600">
        <div className="mx-auto w-full max-w-md space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground text-white sm:text-4xl">Entrar</h1>
            <p className="mt-2 text-white text-muted-foreground">Informe os seus dados para logar.</p>
          </div>
          <UserLoginForm />
          <div className="mt-2 text-white text-center text-muted-foreground">
            Não tem uma conta?{" "}
            <Link href="/register" className="font-bold underline underline-offset-4" prefetch={false}>
              Inscreva-se
            </Link>
            {/* <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p> */}
          </div>
        </div>
      </div>
    </>
  )
}