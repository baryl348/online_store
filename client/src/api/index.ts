import axios from "axios";

// TODO настроить env

export const notAuthInstance = axios.create({
    baseURL: `http://localhost:4000/api`,
    headers: {
        "Content-Type": "application/json"
    }
})

const authInstance = axios.create({
    baseURL: `http://localhost:4000/api`,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "bearer" + window.localStorage.getItem('token')
    }
})


export const auth = {
    async login(email: string, password: string) {
        return (await notAuthInstance.post(`/user/login`, { email, password })).data
    },
    async registration(firstName: string, secondName: string, email: string, password: string) {
        return (await notAuthInstance.post(`/user/registration`, { email, firstName, password, secondName, })).data
    },

}

export const devices = {
    async typeDevice() {
        return (await notAuthInstance.get(`/type`)).data
    },
    async brand() {
        return (await notAuthInstance.get(`/brand`)).data
    },
}