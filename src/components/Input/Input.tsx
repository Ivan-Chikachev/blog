import React from "react";
import './Input.scss'
import classNames from "classnames";
import {useTheme} from "../../theme/useTheme";

type PropType = {
    placeholder: string
    type: string
    errors: string
    registerInput: object
    errorMessage?: string
    inputLabel: string
    className?: string
    value?: string
}

const Input = (props: PropType) => {

    const {
        placeholder, type, errors,
        registerInput, errorMessage,
        inputLabel, className, value
    } = props

    const {theme} = useTheme()

    return (
        <div className={classNames({
            "input-wrap": true,
            className: className
        })}
        >
            <p className='input-label'>
                {inputLabel}
            </p>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                className={classNames({
                    "input": true,
                    'input-error': errors
                })}
                data-theme={theme}
                {...registerInput}
            />
            {errors && <span className='error-label'>
                {errorMessage}
            </span>}
        </div>
    )
}

export default Input
