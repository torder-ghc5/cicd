import './Sidebar.css';

import { useRouter } from '../../hooks/useRouter';

function Sidebar() {
    const router = useRouter();

    const onClickPage = (to: string) => {
        router.push({ to })
    };

    return (
        <ul className="Sidebar_Wrapper">
            <li onClick={() => onClickPage('/')}>First Page</li>
            <li onClick={() => onClickPage('/second')}>Second Page</li>
            <li onClick={() => onClickPage('/third')}>Third Page</li>
        </ul>
    )
};

export default Sidebar;