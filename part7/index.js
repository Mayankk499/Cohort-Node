import "dotenv/config";
import db from './db/index.js';

import { userTable } from './drizzle/schema.js';

async function getAllUsers(){
    const users = await db.select().from(userTable);
    console.log(`Users in db`, users);
    return users;
};

async function createUser({id, name, email}){
    await db.insert(userTable).values({
        id,
        name,
        email,
    });
}

getAllUsers();
// createUser({id: 1, name: 'mayank', email: 'mk@mk.com'});
// createUser({id: 2, name: 'aman', email: 'ok@vk.com'});