export function userLoggin(data) {
    console.log(data)
    return {
        type: 'USER_LOGGIN',
        data
    }
}