import React from 'react';
import {useTranslation} from 'react-i18next';
import {Selector} from "../Selector/Selector";

export const Internationalization = () => {
    const { i18n, t } = useTranslation();
    const language = i18n.language === 'ru' ? t('ru') : t('en')

    const selectors = [
        {
            value: t('en'),
            onClickHandler: () => {
                i18n.changeLanguage('en')
            }
        },
        {
            value: t('ru'),
            onClickHandler: () => {
                i18n.changeLanguage('ru')
            }
        }
    ]

    return (
        <div>
            <Selector
                value={language}
                selectors={selectors}
            />
        </div>
    );
}
