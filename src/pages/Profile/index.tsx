//@ts-nocheck
import CategoryList from "@/components/CategoryList";
import profileCss from './styles/index.scss';
import ProfileGroup from "@/components/ProfileGroup";
import {useMemo, useState} from "react";


// data --- |||| ---
const categories = [
    {id: 1, value:'Profile', icon:'plant', styling: 'shadow-pink' , active: 'active' },
    {id: 3, value:'Payments', icon:'plant', styling: 'shadow-green'},
    {id: 4, value:'Address', icon:'plant', styling: 'shadow-blue' },
];
const fields = {
    Profile: {
        id: 1,
        fields: [
            {name: 'name', type: 'text', placeholder: 'Name and Surname'},
            {name: 'phone', type: 'number', placeholder: 'Phone'},
            {name: 'email', type: 'email', placeholder: 'Email'},
        ],
    },
    Payments: {
        id: 3,
        fields: [
            {name: 'card_number', type: 'number', placeholder: 'Card number'},
            {name: 'card_date', type: 'text', placeholder: 'Card Date'},
            {name: 'card_name_surname', type: 'text', placeholder: 'Name Surname'},
             {name: 'card_cvv', type: 'password', placeholder: 'Card CVV'},
        ],
    },
    Address: {
        id: 4,
        fields: [
            {name: 'address_str_house', type: 'text', placeholder: 'Street, house'},
            {name: 'address_country_city', type: 'text', placeholder: 'Country, City'},
            //{name: 'address_zip_code', type: 'number', placeholder: 'Zip Code'},
        ],
    },
}
// -------- |||| ---

const Profile = () => {


    const[ actualCategories, updateActualCategories] = useState( categories );
    const[ state, setState] = useState( { loading: false, error: false, init: true } );
    const singleFieldSize = 100;

    const getProfileGroups = ( fields , activeID ) => {
        const groups = [];
        for(let groupName in fields ) groups.push(<ProfileGroup key={groupName} name={groupName} fields={ fields[groupName].fields } active={ (activeID === fields[groupName].id) ? 'active' : ''} pageState={state} updatePageState={ setState } />);

        return groups;
    }

    const getActiveID = ( categories ) => categories.filter(({ active }) => active && active === 'active' )[0].id

    const setActive = ( id ) => {
        if( state.loading ) return;
        const currentActualID = actualCategories.filter(({active}) => active === 'active' )[0].id;
        if( id === currentActualID ) return;

        setState({
            ...state,
            init: false,
            loading: true
        })

        const updState = actualCategories.map((item) => {
            item.active = undefined;
            if(item.id === id) item.active = 'active'
            return item;
        })

        updateActualCategories( updState )

    }

    const componentHeight = useMemo(() => {
        let maxFieldsCount = 0;
        for( let fieldGroup in fields ) {
            maxFieldsCount = ( fields[fieldGroup]['fields']?.length > maxFieldsCount) ? fields[fieldGroup]['fields']?.length : maxFieldsCount;
        }
        return Math.round( maxFieldsCount * singleFieldSize );
    }, [ categories.length ]);

    return (
        <div className={profileCss['profile-group']}>

            <CategoryList categories={actualCategories} updateActiveItem={setActive} pageState={state} />

            <section style={{minHeight: `${componentHeight}px`}} className={profileCss['profile-group-transition']}>

                { getProfileGroups( fields, getActiveID( actualCategories ) ) }

            </section>
        </div>
    );

}

export default Profile;
