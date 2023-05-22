import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long to stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO - add data seeding
  },
  lists: createSchema({
    // schema items go in here
    // schema is description of our data would look like, field/rltnships
    User,
  }),
  ui: {
    // TODO - change this for roles,
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});
