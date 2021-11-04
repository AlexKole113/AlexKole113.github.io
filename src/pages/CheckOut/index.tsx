import InputControl from '@/components/InputControl';
import commonCss from '@/styles/_common.scss';
import btnCss from '@/components/Button/styles/index.scss';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import checkOutCss from './styles/index.scss';
import withUserData from "@/hocs/withUserData";

const CheckOut = ({ userData }:{userData:{[key:string]:any}}) => {
  useThemeSwitcher('cart-theme');
  return (
    <>
      <section className={checkOutCss['check-out-group']}>
        <div className={commonCss.container}>
          <div className={checkOutCss['check-out-group__group']}>
            <section className={checkOutCss['check-out-group__title-block']}>
              <h3 className={checkOutCss['check-out-group__title-block_title']}>
                User details
              </h3>
            </section>
            <section className={checkOutCss['check-out-group__profile-collection']}>
              <InputControl groupName={'profile'} name={'name'} type={'text'} placeholder={'Name and Surname'} userData={userData.data} dataUpdate={()=>{}} />
              <InputControl groupName={'profile'} name={'phone'} type={'number'} placeholder={'Phone'} userData={userData.data} dataUpdate={()=>{}} />
              <InputControl groupName={'profile'} name={'email'} type={'email'} placeholder={'Email'} userData={userData.data} dataUpdate={()=>{}} />
            </section>
          </div>
          <div className={checkOutCss['check-out-group__group']}>
            <section className={checkOutCss['check-out-group__title-block']}>
              <h3 className={checkOutCss['check-out-group__title-block_title']}>
                Delivery address
              </h3>
            </section>
            <section className={checkOutCss['check-out-group__profile-collection']}>
              <InputControl groupName={'address'} name={'streetHouse'} type={'text'} placeholder={'Street, house'} userData={userData.data} dataUpdate={()=>{}} />
              <InputControl groupName={'address'} name={'countyCity'} type={'text'} placeholder={'Country, City'} userData={userData.data} dataUpdate={()=>{}} />
            </section>
          </div>
          <div className={checkOutCss['check-out-group__group']}>
            <section className={checkOutCss['check-out-group__title-block']}>
              <h3 className={checkOutCss['check-out-group__title-block_title']}>
                Payment details
              </h3>
            </section>
            <section className={checkOutCss['check-out-group__profile-collection']}>
              <InputControl groupName={'payments'} name={'cc-card'} type={''} placeholder={''} userData={userData.data} dataUpdate={()=>{}} />
            </section>
          </div>
        </div>
      </section>
      <section className={checkOutCss['check-out-group']}>
        <div className={commonCss.container}>
          <div className={checkOutCss['check-out-group__group']}>
            <a href="#" className={`${btnCss['app-btn']} ${btnCss['check-out-btn']}`}>
              Pay and Check Out
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default withUserData(CheckOut);
