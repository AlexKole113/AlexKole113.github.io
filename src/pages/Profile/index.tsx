import CategoryList from "@/components/CategoryList";
import profileCss from './styles/index.scss';
import ProfileGroup from "@/components/ProfileGroup";
import {useMemo, useState} from "react";
import { fakeProfileCategories as categories, fakeProfileFields as fields, IFakeProfileFields, IFakeProfileCategories, IFakeProfileCategory } from "../../../mocks/fakeData/profile";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const Profile = () => {
    const[ actualCategories, updateActualCategories] = useState( categories );
    const[ state, setState] = useState( { loading: false, error: false, init: true } );
    const singleFieldSize = 100;
    const getProfileGroups = ( fields:IFakeProfileFields , activeID:number ) => {
        const groups = [];
        for( let groupName in fields ) groups.push(<ProfileGroup key={groupName} name={groupName} fields={ fields[groupName].fields } active={ (activeID === fields[groupName].id) ? 'active' : ''} pageState={state} updatePageState={ setState } />);
        return groups;
    }
    const getActiveID = ( categories:IFakeProfileCategories ) => categories.filter(({ active }:IFakeProfileCategory ) => active && active === 'active' )[0].id
    const setActive = ( id:number ) => {
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
    useThemeSwitcher('profile-theme');
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
