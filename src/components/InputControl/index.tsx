import ClearIcon from "@/components/InputControl/components/ClearIcon";
import SuccessIcon from "@/components/InputControl/components/SuccessIcon";
import {ChangeEvent, useState} from "react";
import {validateProfileInput} from "@/utils/validators/validateProfileInput";
import {sendDataFromInput} from "../../../mocks/sendDataFromInput";
import InvalidIcon from "@/components/InputControl/components/InvalidIcon";

import profileCss from "@/pages/Profile/styles/index.scss";
import inputCss from './styles/index.scss'
import buttonSpinner from './assets/preloader-for-btn.gif'

const InputControl = ({name,type,placeholder}:{ name:string,type:string,placeholder:string }) => {

    const [ state, setState ] = useState({ state : '', message: '' , value: '' } );

    const clear = () => {
        console.log('click')
        setState({ state : '', message: '', value: '' });

        // sendDataFromInput('')
        //     .then((value)=>{
        //         if(typeof value === 'string' ){
        //             setState({ state : '', message: '', value: '' });
        //         } else {
        //             throw new Error('value not string')
        //         }
        //     })
        //     .catch((message)=>{
        //         setState({...state, state : 'invalid', message });
        //     })

        console.log(state)
    }



    const enteredValue = ( e:ChangeEvent ) => {
        const value = (e.target as HTMLInputElement).value;
        if ( value ) {
            setState({ state : 'received', message: '', value: value });
        } else {
            setState({ state : '', message: '', value: '' });
        }
    }

    const sendData = () => {
        const { value }  = state;
        if( state.state === 'loading' || !value ) return;
        if( !validateProfileInput( value ) ) {
            setState({...state, state : 'invalid', message : 'invalid value'});
            return;
        }

        setState({...state, state : 'loading', message: '' });
        sendDataFromInput(value)
            .then(()=>{
                setState({ ...state, state : 'success', message: '' });
            })
            .catch((message)=>{
                setState({...state, state : 'invalid', message });
            })

    }

    const focus = () => {
        if( state.value ) {
            setState({...state, state: 'received' })
        }
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
    const labelClassName = (state.state !== '' ) ? inputCss['field-has-content'] : '';


    return (
        <label className={`${inputCss['input-control']} ${inputCss['with-placeholder-movement']} ${inputCss['profile-input']} ${profileCss['profile-input']} ${cssStateClass}`} >
            <input name={name} className={inputCss['input-control__input']} value={state.value} type={type} onChange={enteredValue} onBlur={sendData} onFocus={focus} />
            <span className={`${inputCss['input-control__placeholder']}  ${labelClassName} `}>{ (state.message) ? state.message : placeholder}</span>
            <span className={inputCss['input-control__state']} >
                {icon}
            </span>
        </label>
    )
}

export default InputControl;
