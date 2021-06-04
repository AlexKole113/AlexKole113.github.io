import profileCss from "@/pages/Profile/styles/index.scss";
import commonCss from "@/styles/_common.scss";
import InputControl from "@/components/InputControl";
import {classNameAnimationSwitcher} from "@/utils/classNameAnimationSwitcher";
import {useEffect} from "react";
import {IProfilePageState} from "@/pages/Profile/interface";

const ProfileGroup = ( { name, fields, active, updatePageState  }:{name:string, fields:{name:string, type:string, placeholder: string}[], active:string, updatePageState:CallableFunction, pageState:IProfilePageState } ) => {

    useEffect(() => {
      classNameAnimationSwitcher(name, active, updatePageState,1000 );
    },[ active ] );

    return(
        <section data-fields-group={name} className={profileCss['profile-group-hidden']} >

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
