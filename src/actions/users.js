export const RECIEVE_USERS = 'RRECIEVE_USERS'

export function recieveUsers (users) {
    return {
        type: RECIEVE_USERS,
        users,
    }
}