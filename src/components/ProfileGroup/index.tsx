import profileCss from "@/pages/Profile/styles/index.scss";
import commonCss from "@/styles/_common.scss";
import InputControl from "@/components/InputControl";
import {classNameAnimationSwitcher} from "@/utils/classNameAnimationSwitcher";
import {useEffect} from "react";

const ProfileGroup = ( { name, fields, active }:{name:string, fields:{name:string, type:string, placeholder: string}[], active?:string } ) => {

    useEffect(()=>{
        classNameAnimationSwitcher(name, active,900)
    },[ active ] );

    return(
        <section data-fields-group={name} >

            <div className={commonCss['container']}>
                <div className={profileCss['profile-group__group']}>

                    <section className={profileCss['profile-group__title-block']}>
                        <h3 className={profileCss['profile-group__title-block_title']}>
                            {name}
                        </h3>
                    </section>

                    <section className={profileCss['profile-group__profile-collection']}>

                        {fields.map( ({name,type,placeholder}) => <InputControl key={name} name={name} type={type} placeholder={placeholder} /> )}


                        {/*<InputControl state={'received'} />*/}
                        {/*<InputControl state={'invalid'} />*/}

                    </section>
                </div>
            </div>

        </section>
    )
}

export default ProfileGroup;
