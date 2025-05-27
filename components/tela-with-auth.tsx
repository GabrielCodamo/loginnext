import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import CardAuth from "@/components/card-auth";
import TelaHomeLayoutAutenticacao from "@/components/layouttela";

export default function TelaComAutenticacao() {
  return (
    <>
      <TelaHomeLayoutAutenticacao>
        <section className="flex justify-center dark:bg-transparent">
          <CardAuth />
        </section>
      </TelaHomeLayoutAutenticacao>
    </>
  )
}