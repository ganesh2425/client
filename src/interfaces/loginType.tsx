export interface ILoginForm {
    username:string
    //email:  string
    password: string
    //isCaptchaVerified: number
}

export interface IFormStatus {
    message: string
    type: string
}

export interface IFormStatusProps {
    [key: string]: IFormStatus
}