import './TabButton.css';

export default function TabButton(props) {
    return <li><button id="tab-content" onClick={props.onClick}>{props.children}</button></li>;
}