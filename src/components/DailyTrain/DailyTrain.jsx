import Divider from '@material-ui/core/Divider';
import style from './DailyTrain.module.scss';

const DailyTrain = ({ task, userData, currentDate }) => {
    return (
        <div className='card'>
            <h2>{task.title}</h2>
            <Divider />
            <div>
                {userData.map(({ date, results }, index) => (
                    <>
                        {date === currentDate && (
                            <>
                                {results !== undefined ? (
                                    <div className={style.content} key={index}>
                                        <p>
                                            {/* <span>דופק מינימלי</span> */}
                                            <span>{results ? 'בוצע אימון יומי' : 'לא בוצע אימון יומי'}</span>
                                        </p>
                                    </div>
                                ) : (
                                    <p style={{ textAlign: 'center' }}>אין נתוני מטופל</p>
                                )}
                            </>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default DailyTrain;
