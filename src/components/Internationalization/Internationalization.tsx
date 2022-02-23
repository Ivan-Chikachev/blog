import React, {useEffect, useRef, useState} from 'react';
import { useTranslation } from 'react-i18next';
import './Internationalization.scss'

export const Internationalization = () => {
    const { i18n, t } = useTranslation();
    const language = i18n.language === 'ru' ? t('ru') : t('en')

    const [isOpen, setIsOpen] = useState(false);

    const valueClick = () => {
        setIsOpen(!isOpen)
    }
    const clickRus = () => {
        i18n.changeLanguage('ru')
            .then(()=> setIsOpen(false))
    }
    const clickEn = () => {
        i18n.changeLanguage('en')
            .then(()=> setIsOpen(false))
    }
    type selector = React.RefObject<HTMLDivElement>
    const selectorEl: selector = useRef(null);

    useEffect(() => {

        const onClick = (e: any) => {
            if(!selectorEl?.current?.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', onClick);

        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <div
            ref={selectorEl}
            className='language'>
            <span
                onClick={valueClick}
                className='language__value'>
                {language}
            </span>
            {isOpen &&
                <div
                    className='language__selector'>
                    <button
                        className='language__en language__btn'
                        onClick={clickEn}>
                        {t('en')}
                    </button>
                    <button
                        className='language__ru language__btn'
                        onClick={clickRus}>
                        {t('ru')}
                    </button>
                </div>
            }
        </div>
    );
}
