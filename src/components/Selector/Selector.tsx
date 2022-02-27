import React, {useEffect, useRef, useState} from 'react';
import './Selector.scss'
import {SelectorsType} from "../../types/types";
import {useTheme} from "../../theme/useTheme";

type Props = {
    value: string
    selectors: Array<SelectorsType>
}

export const Selector = ({value, selectors}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {theme} = useTheme()

    const valueClick = () => {
        setIsOpen(!isOpen)
    }
    const selectorEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClick = (e: any) => {
            if (
                selectorEl.current &&
                !selectorEl.current.contains(e.target)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', onClick);

        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <div
            ref={selectorEl}
            className='selector'>
            <span
                onClick={valueClick}
                className='selector__value'>
                {value}
            </span>
            {isOpen &&
            <div
                data-theme={theme}
                className='selector__pop-up'>
                {
                    selectors.map(i =>
                        <button
                            data-theme={theme}
                            key={i.value}
                            className='selector__btn'
                            onClick={() => {
                                i.onClickHandler()
                                setIsOpen(false)
                            }}>
                            {i.value}
                        </button>
                    )
                }
            </div>
            }
        </div>
    );
}
