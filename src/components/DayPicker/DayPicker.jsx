import React, { useEffect, useState } from 'react';
import style from './DayPicker.module.scss';
import IconButton from '@material-ui/core/IconButton';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import cx from 'classnames';
const DayPicker = ({ dates, onSelectDate, selectedDate }) => {
    const [currentDates, setCurrDates] = useState([]);
    const [currentPage, setPage] = useState(1);

    useEffect(() => {
        setCurrDates(paginate(dates, 7, currentPage));
        onSelectDate(dates[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const updatedDates = paginate(dates, 7, currentPage);
        setCurrDates(updatedDates);
        onSelectDate(updatedDates[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const paginate = (array, page_size, page_number) => {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    };

    return (
        <div className={style.wrapper}>
            {currentPage - 1 > 0 && (
                <IconButton color='secondary' edge={'end'} onClick={() => setPage(currentPage - 1)}>
                    <ArrowForwardIosIcon />
                </IconButton>
            )}
            <div className={style.days}>
                {currentDates.length > 0 &&
                    currentDates.map((date, index) => (
                        <span
                            key={index}
                            onClick={() => onSelectDate(date)}
                            className={cx(style.day, {
                                [style.selected]: date === selectedDate,
                            })}
                        >
                            {date.slice(date.length - 2, date.length) + '/' + date.slice(date.length - 5, date.length - 3)}
                        </span>
                    ))}
            </div>
            {currentPage * 7 < dates.length && (
                <IconButton variant='contained' edge={'start'} color='secondary' onClick={() => setPage(currentPage + 1)}>
                    <ArrowBackIosIcon />
                </IconButton>
            )}
        </div>
    );
};

export default DayPicker;
