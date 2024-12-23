/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://uginterview_owner:oYdh5rzm0gPf@ep-curly-meadow-a52ojb61.us-east-2.aws.neon.tech/mockInterview?sslmode=require',
    }
};