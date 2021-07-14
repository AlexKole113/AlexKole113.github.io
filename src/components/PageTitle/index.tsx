import menuStyles from '@/components/Menu/styles/index.scss';
import usePageTitle from '@/hooks/usePageTitle/usePageTitle';

const PageTitle = () => {
  const title = usePageTitle('Welcome');
  return (<h1 className={menuStyles['page-title']}>{title}</h1>);
};

export default PageTitle;
