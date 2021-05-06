import axios from "axios";

// TODO настроить env

const notAuthInstance = axios.create({
    baseURL: `http://localhost:4000/api`,
    headers: {
        "Content-Type": "application/json"
    }
})

export const auth = {
    async login() { },
    async registration(firstName: string, secondName: string, email: string, password: string) {
        return (await notAuthInstance.post(`/user/registration`, { email, firstName, password, secondName, }))
    }
}