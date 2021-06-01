let reqSending = false;
let valueStore = '';
let valueNew   = '';
const delay    = 50;

export const trottler = (send:CallableFunction, value:string) => {
    valueNew = value;
    if( !reqSending ) {
        reqSending = true;
        valueStore = value;
        send();
        setTimeout(() => {
            reqSending = false;
            if ( valueNew === valueStore ) return;
            send();
        }, delay )
    }
}
