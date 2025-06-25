// import { type Config } from "drizzle-kit";

// import { env } from "~/env";

// export default {
//   schema: "./src/server/db/schema.ts",
//   dialect: "sqlite",
//   dbCredentials: {
//     url: env.DATABASE_URL,
//   },
//   tablesFilter: ["drive-tutorial_*"],
// } satisfies Config;

// export default {
//   schema: "./src/server/db/schema.ts",
//   dialect: "singlestore",
//   tablesFilter: ["drive-tutorial_*"],
// } satisfies Config;

// import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   schema: "./src/server/db/schema.ts",
//   dialect: "singlestore",
//   tablesFilter: ["drive-tutorial_*"],
//   dbCredentials: {
//     host: env.SINGLESTORE_HOST,
//     port: parseInt(env.SINGLESTORE_PORT),
//     user: env.SINGLESTORE_USER,
//     password: env.SINGLESTORE_PASS,
//     database: env.SINGLESTORE_DB_NAME,
//     ssl: {},
//   },
// })

// import { defineConfig } from "drizzle-kit";
// export default defineConfig({
//     dialect: "singlestore",
//     schema: "<path/to/schema>",
//     dbCredentials: {
//         host: "svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com",
//         user: "nathan newton-ee17a",
//         password: "<nathan newton-ee17a Password>",
//         port: 3333,
// 	database: "DRIVE_NATHAN_DB",
// 	ssl: {},
//     },
// });

import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "singlestore",
  // tablesFilter: ["drive_tutorial_*"],
  dbCredentials: {
    host: env.SINGLESTORE_HOST,
    port: parseInt(env.SINGLESTORE_PORT),
    user: env.SINGLESTORE_USER,
    password: env.SINGLESTORE_PASS,
    database: env.SINGLESTORE_DB_NAME,
    ssl: {},
  },
} satisfies Config;
