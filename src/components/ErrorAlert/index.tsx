import errorAlertCss from './styles/index.scss'
const ErrorAlert = ({text}:{text:string}) => (
    <div className={errorAlertCss['error-alert-runtime']}>
        <span className={errorAlertCss['error-alert-runtime__text']}>{text}</span>
    </div>
)

export default ErrorAlert;
