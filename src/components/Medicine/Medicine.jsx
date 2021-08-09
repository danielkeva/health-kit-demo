import style from './Medicine.module.scss';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import Divider from '@material-ui/core/Divider';
const Medicine = ({ task, userData, currentDate, onRemoveElement }) => {
    return (
        <div className={'card'}>
            <h2>{task.title}</h2>
            <Divider />
            <div>
                <p className='subTitle'>
                    <span>תכנית טיפול:</span> <span>{task.instructions}</span>
                </p>
            </div>
            <div className={style.results}>
                {userData.map(({ date, results }) => (
                    <>
                        {date === currentDate && (
                            <>
                                {/* <p>{date}</p> */}
                                {results ? (
                                    Object.entries(results).map(([key, value]) => (
                                        <div className={style.timeWrapper}>
                                            {value ? (
                                                <CheckCircleRoundedIcon className={style.icon} style={{ color: '#4CAF50' }} />
                                            ) : (
                                                <RadioButtonUncheckedRoundedIcon className={style.icon} color='secondary' />
                                            )}
                                            <p>{key.replaceAll('"', '')}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div> אין נתוני מטופל</div>
                                )}
                            </>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Medicine;
