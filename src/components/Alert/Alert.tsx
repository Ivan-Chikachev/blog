import {Alert as AntAlert} from "antd";
import React from "react";
import {typesIsAlert} from "../../types/types";
import './Alert.scss'

type props = {
    message: string
    type: typesIsAlert
}

const Alert = ({message, type}: props) => {
    return (
        <div className='alert-wrap'>
            <AntAlert
                type={type}
                banner
                message={message}
                closable
                className='alert'
            />
        </div>
    )
}

export default Alert
