import React, { useEffect } from 'react';
import style from './DayPicker.module.scss';
import cx from 'classnames';
const DayPicker = ({ dates, onSelectDate, selectedDate }) => {
    useEffect(() => {
        console.log('dates', dates[0]);
        onSelectDate(dates[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={style.wrapper}>
            {dates.length > 0 &&
                dates.map((date, index) => (
                    <span
                        key={index}
                        onClick={() => onSelectDate(date)}
                        className={cx(style.day, {
                            [style.selected]: date === selectedDate,
                        })}
                    >
                        {date.charAt(date.length - 2) !== '0' ? date.charAt(date.length - 2) + date.charAt(date.length - 1) : date.charAt(date.length - 1)}
                    </span>
                ))}
        </div>
    );
};

export default DayPicker;
