import {auth} from "@clerk/nextjs/server";


const adminIds =[
    "user_2j25d9MbX7h9fRVQsnMsF26ZxVR"
];

export const IsAdmin =  () => {
const {userId} =  auth();

if (!userId) {
    return false;
}

return adminIds.indexOf(userId) !== -1;
}