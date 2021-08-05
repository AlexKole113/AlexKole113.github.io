import CategoryList from '@/components/CategoryList';
import ProfileGroup from '@/components/ProfileGroup';
import {
  FormEvent, useEffect, useMemo, useState,
} from 'react';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import withUserData from '@/hocs/withUserData';

import {
  fakeProfileCategories as categories, fakeProfileFields as fields, IFakeProfileFields, IFakeProfileCategories, IFakeProfileCategory,
} from '../../../mocks/fakeData/profile';

import profileCss from './styles/index.scss';

// TODO: profile:
//  1. How send updated data?
//  2. validation
//  3. fix label up and down
//  4. review
//  5. add tests

const Profile = ({ userData }:{userData:{[key:string]:any}}) => {
  const [actualCategories, updateActualCategories] = useState(categories);
  const [pageState, setPageState] = useState({ loading: false, error: false, init: true });
  const [userDataState, updateUserDataState] = useState({ ...userData.data });
  useEffect(() => {
    updateUserDataState(() => userData.data);
  }, [userData]);
  const updateUserDataField = (group:string, field:string, value:any) => {
    const dataUpdated = JSON.parse(JSON.stringify(userDataState));
    dataUpdated[group][field] = value;
    updateUserDataState((prevState:{[key:string]:any}) => ({
      ...prevState,
      ...dataUpdated,
    }));
  };

  const singleFieldSize = 100;
  const getProfileGroups = (fields:IFakeProfileFields, activeID:number) => {
    const groups = [];
    for (const groupName in fields) {
      groups.push(<ProfileGroup
        key={groupName}
        name={groupName}
        fields={fields[groupName].fields}
        active={(activeID === fields[groupName].id) ? 'active' : ''}
        updatePageState={setPageState}
        userData={userDataState}
        dataUpdate={updateUserDataField}
      />);
    }
    return groups;
  };
  const getActiveID = (categories:IFakeProfileCategories) => categories.filter(({ active }:IFakeProfileCategory) => active && active === 'active')[0].id;
  const setActive = (id:number) => {
    if (pageState.loading) return;
    const currentActualID = actualCategories.filter(({ active }) => active === 'active')[0].id;
    if (id === currentActualID) return;

    setPageState({
      ...pageState,
      init: false,
      loading: true,
    });

    const updState = actualCategories.map((item) => {
      item.active = undefined;
      if (item.id === id) item.active = 'active';
      return item;
    });

    updateActualCategories(updState);
  };
  const componentHeight = useMemo(() => {
    let maxFieldsCount = 0;
    for (const fieldGroup in fields) {
      maxFieldsCount = (fields[fieldGroup].fields?.length > maxFieldsCount) ? fields[fieldGroup].fields?.length : maxFieldsCount;
    }
    return Math.round(maxFieldsCount * singleFieldSize);
  }, [categories.length]);
  const sendDataToServer = (e:FormEvent) => {
    e.preventDefault();
    // send updated data
    // dispatch(userInfoAction.request({ params: { data: userDataState } }));
  };

  useThemeSwitcher('profile-theme');

  return (
    <form onSubmit={(e) => { sendDataToServer(e); }}>
      <div className={profileCss['profile-group']}>
        <CategoryList categories={actualCategories} updateActiveItem={setActive} pageState={pageState} />
        <section style={{ minHeight: `${componentHeight}px` }} className={profileCss['profile-group-transition']}>
          { getProfileGroups(fields, getActiveID(actualCategories)) }
        </section>
      </div>
      <input type="submit" className={profileCss['profile-group__save-btn']} value="save" />
    </form>
  );
};

export default withUserData(Profile);
