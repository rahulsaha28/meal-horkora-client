import { Notification } from 'rsuite';
const message = (name, error)=>{
    Notification[name]({
        title:name,
        description:error
    })
}

export { message }