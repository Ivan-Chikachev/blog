import React from "react";
import './Theme.scss'
import {useTheme} from "../../theme/useTheme";
import {Selector} from "../Selector/Selector";
import {useTranslation} from "react-i18next";

export const Theme = () => {

    const { t } = useTranslation();
    const {setTheme, theme} = useTheme()

    const themeValue = t(theme)

    const selectors = [
        {
            value: t('light'),
            onClickHandler: () => {
                setTheme('light')
            }
        },
        {
            value: t('dark'),
            onClickHandler: () => {
                setTheme('dark')
            }
        }
    ]

    return (
        <div className='theme'>
            <Selector value={themeValue} selectors={selectors} />
        </div>
    )
}