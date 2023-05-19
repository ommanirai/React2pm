import React from 'react'
// import {toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-hot-toast'

const ShowError = (msg) => {
    toast.error(msg);
}

const ShowWarning = msg => {
    toast.warn(msg);
}

const ShowSuccess = msg => {
    toast.success(msg);
}

// const ShowInfo = msg =>{
//     toast.info(msg)
// }

export const error = {
    ShowError,
    // ShowInfo,
    ShowSuccess: ShowSuccess,
    ShowWarning: ShowWarning
}