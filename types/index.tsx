export interface AddEmailProps {
    email: string;
    setEmail:(email:string)=> void
    handleCreateEmail : ()=>void
}

export interface IEmail {
    _id: string,
    email: string,
    completed: boolean
}