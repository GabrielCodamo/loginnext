// as está sendo usado para renomear o prisma com o nome prisma em vez de db
import { db as prisma } from "@/lib/db"

import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

  const data = await request.json()

  const { name, email, password } = data

  // console.log("ROUTE HANDLERS", data)

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Preencha todos os campos" }, { status: 400 })
  }

  const isUserExists = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  if (isUserExists) {
    return NextResponse.json({ error: "E-mail já existe no banco" }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword
    }
  })

  return NextResponse.json(user)
}