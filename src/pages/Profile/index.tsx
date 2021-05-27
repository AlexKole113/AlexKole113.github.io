//@ts-nocheck
import InputControl from "@/components/InputControl";
import CategoryList from "@/components/CategoryList";
import profileCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'
import ProfileGroup from "@/components/ProfileGroup";
import {useState} from "react";



const Profile = () => {

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
                {name: 'card_cvv', type: 'password', placeholder: 'Card CVV'},
            ],
        },
        Address: {
            id: 4,
            fields: [
                {name: 'address_str_house', type: 'text', placeholder: 'Street, house'},
                {name: 'address_country_city', type: 'text', placeholder: 'Country, City'},
                {name: 'address_zip_code', type: 'number', placeholder: 'Zip Code'},
            ],
        },
    }


    const[state, setState] = useState( categories );

    const getProfileGroups = ( fields , activeID ) => {
        const groups = [];
        for(let groupName in fields ) groups.push(<ProfileGroup key={groupName} name={groupName} fields={ fields[groupName].fields } active={ (activeID === fields[groupName].id) ? 'active' : ''} />);

        return groups;
    }

    const getActiveID = ( categories ) => categories.filter(({ active }) => active && active === 'active' )[0].id

    const setActive = ( id ) => {
        const updState = state.map((item) => {
            item.active = undefined;
            if(item.id === id) item.active = 'active'
            return item;
        })
        setState( updState )
    }

    return (
        <div className={profileCss['profile-group']}>

            <CategoryList categories={state} updateActiveItem={setActive} />

            <section className={profileCss['profile-group-transition']}>

                { getProfileGroups(fields, getActiveID( state ) ) }

            </section>
        </div>
    );

}

export default Profile;
