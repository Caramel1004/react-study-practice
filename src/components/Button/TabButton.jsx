import './TabButton.css';

export default function TabButton(props) {
    return (
        <li>
            <button className={props.isSelected? "tab-content active" : 'tab-content'} onClick={props.onClick}>{props.children}</button>
        </li>
    );
}