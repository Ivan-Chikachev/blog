import {Alert} from "antd";
import React from "react";
import './SuccessAlert.scss'

type props = {
    message: string
}

const SuccessAlert = ({message}: props) => {

    return (
        <div className='success-alert'>
            <Alert
                banner
                message={message}
                type="info"
                closable
                style={{width: '400px', height: '50px'}}
            />
        </div>
    )
}

export default SuccessAlert
