let reqSending  = false;
let storedValue = '';
let newValue    = '';
let newSender:CallableFunction;
const delay     = 1000 / 10;

export const trottler = (send:CallableFunction, value:string) => {
    newValue  = value;
    newSender = send;

    if( !reqSending ) {
        reqSending = true;
        storedValue = value;
        send();
        setTimeout(() => {
            reqSending = false;
            if ( newValue === storedValue ) return;
            newSender();
        }, delay )
    }
}
