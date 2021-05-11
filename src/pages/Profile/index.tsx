//@ts-nocheck
import InputControl from "@/components/InputControl";
import CategoryList from "@/components/CategoryList";
import profileCss from './styles/index.scss';
import commonCss from '@/styles/_common.scss'



const Profile = () => {

    return (
        <div className={profileCss['profile-group']}>

            <CategoryList/>

            <section className={profileCss['profile-group-transition']}>
                <section
                    className={`${profileCss['profile-group']} ${profileCss['profile-group-hidden']}`}>

                    <div className={commonCss['container']}>
                        <div className={profileCss['profile-group__group']}>

                            <section className={profileCss['profile-group__title-block']}>
                                <h3 className={profileCss['profile-group__title-block_title']}>
                                    Address
                                </h3>
                            </section>

                            <section className={profileCss['profile-group__profile-collection']}>

                                <InputControl state={'received'} />
                                <InputControl state={'received'} />
                                <InputControl state={'invalid'} />

                            </section>
                        </div>
                    </div>

                </section>
                <section
                    className={`${profileCss['profile-group-transition-group']} ${profileCss['profile-group']} ${profileCss['profile-group-current']}`}>

                    <div className={commonCss['container']}>
                        <div className={profileCss['profile-group__group']}>

                            <section className={profileCss['profile-group__title-block']}>
                                <h3 className={profileCss['profile-group__title-block_title']}>
                                    Address
                                </h3>
                            </section>

                            <section className={profileCss['profile-group__profile-collection']}>

                                <InputControl state={'loading'} />
                                <InputControl state={'success'} />
                                <InputControl state={'received'} />

                            </section>
                        </div>
                    </div>

                </section>
            </section>
        </div>
    );

}

export default Profile;
