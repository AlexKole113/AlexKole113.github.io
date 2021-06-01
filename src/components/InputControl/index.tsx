import ClearIcon from "@/components/InputControl/components/ClearIcon";
import SuccessIcon from "@/components/InputControl/components/SuccessIcon";
import {FormEvent, useState} from "react";
import {validateProfileInput} from "@/utils/validators/validateProfileInput";
import {sendDataFromInput} from "../../../mocks/sendDataFromInput";
import InvalidIcon from "@/components/InputControl/components/InvalidIcon";
import {trottler} from "@/utils/trottler";

import profileCss from "@/pages/Profile/styles/index.scss";
import inputCss from './styles/index.scss'
import buttonSpinner from './assets/preloader-for-btn.gif'

const InputControl = ({name,type,placeholder}:{ name:string, type:string, placeholder:string }) => {

    const [ state, setState ] = useState({ state : '', message: '' , value: '' } );

    const sendAndChooseState = ( newState:{ state : string, message: string , value: string } ) => {
        setState((prevState) => ({...prevState, ...newState }));
        sendDataFromInput( newState.value )
            .then(( value ) => {
                if( !value ) {
                    setState({ state: '',  message: '', value: '' });
                    return;
                }
                setState((state) => ({ ...state, state : 'received', message: '' }));

                //  SHOW SUCCESS STATUS

                // if( state.state === 'success' ) return;
                // new Promise((res)=>{
                //     setState((state) => ({ ...state, state : 'success', message: '' }));
                //     setTimeout(res,2000);
                // })
                // .then(()=>{
                //     setState((state) => ({ ...state, state : 'received', message: '' }));
                // })

            })
            .catch((message)=>{
                setState((state) => ({...state, state : 'invalid', message }));
            })
    }


    const clear = () => { sendAndChooseState({ state : 'loading', message: '', value: '' }) }

    const enteredValue = ( e:FormEvent ) => {
        const value = ( e.target as HTMLInputElement ).value;

        if( !value ) {
            sendAndChooseState({ state : 'loading', message: '', value: '' });
            return;
        }

        if( !validateProfileInput( value ) ) {
            setState((state)=>({...state, state : 'invalid', message : 'invalid value'}));
            return;
        }

        trottler( ()=>{ sendAndChooseState({ state : 'loading', message : '', value } ) }, value );
    }

    const focus = () => {
        if( state.value ) setState( (state) => ({...state, state: 'received' }) );
    }

    // visualisation
    const iconsCollection = new Map([
        ['received', <ClearIcon onClickFunc={clear} />],
        ['success', <SuccessIcon />],
        ['invalid', <InvalidIcon /> ],
        ['loading', <img src={buttonSpinner} alt={'loader'} />],
    ]);
    const icon = iconsCollection.get( state.state ) ?? '';
    const cssStateClass = inputCss[`state-${state.state}`] ?? '' ;
    const labelClassName = ( state.state !== '' ) ? inputCss['field-has-content'] : '';

    return (
        <label className={`${inputCss['input-control']} ${inputCss['with-placeholder-movement']} ${inputCss['profile-input']} ${profileCss['profile-input']} ${cssStateClass}`} >
            <input name={name} className={inputCss['input-control__input']} value={state.value} type={type} onChange={enteredValue} onFocus={focus} />
            <span className={`${inputCss['input-control__placeholder']}  ${labelClassName} `}>{ (state.message) ? state.message : placeholder}</span>
            <span className={inputCss['input-control__state']} >
                {icon}
            </span>
        </label>
    )
}

export default InputControl;
