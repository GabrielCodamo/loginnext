import Link from "next/link"
import { Button } from "@/components/ui/button"
import TelaHomeLayoutAutenticacao from "@/components/layouttela"


export default function TelaSemAutenticação(
) {
  return (
    <TelaHomeLayoutAutenticacao>
      <Link href={"/login"} passHref>
        <Button>
          Entrar
        </Button>
      </Link>
    </TelaHomeLayoutAutenticacao>
  )
}

