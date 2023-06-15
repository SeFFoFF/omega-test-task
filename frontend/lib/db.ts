import { dbConnection } from '@lib/dbConnection'

export const db = async ({ query, values }: { query: string, values: unknown[] }) => {
  const mySql = await dbConnection()

  try {
    const [data] = await mySql.execute(query, values)
    mySql.end()
    return data
  } catch (error) {
    throw Error(error.message)
  }
}
