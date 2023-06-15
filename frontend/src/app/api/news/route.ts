import { db } from '@lib/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const sqlQuery = 'SELECT * FROM news'
    const valueParams = []
    const data = await db({ query: sqlQuery, values: valueParams })

    return NextResponse.json({ news: data })
  } catch (error) {
    NextResponse.json({ error: error.message })
  }
}
