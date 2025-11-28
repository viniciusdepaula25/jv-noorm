import { createMigration } from 'jv-noorm'
;(async () => {
  await createMigration()

  process.exit(0)
})()
