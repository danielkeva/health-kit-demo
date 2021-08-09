import style from './Bandage.module.scss';
import Divider from '@material-ui/core/Divider';
const Bandage = ({ task, userData, currentDate }) => {
    return (
        <div className='card'>
            <h2>{task.title}</h2>
            <Divider />
            <div>
                {userData.map(({ date, results }) => (
                    <>
                        {date === currentDate && (
                            <>
                                {results !== undefined ? (
                                    <div className={style.content}>
                                        <p>
                                            {/* <span>דופק מינימלי</span> */}
                                            <span>{results ? 'בוצע' : 'לא בוצע'}</span>
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

export default Bandage;
