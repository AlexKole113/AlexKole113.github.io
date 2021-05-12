import menuStyles from "@/components/Menu/styles/index.scss";

const PageTitle = ({value}:{value:string}) => (
    <h1 className={menuStyles['page-title']}>{value}</h1>
)

export default PageTitle;
