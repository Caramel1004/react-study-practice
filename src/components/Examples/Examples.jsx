import TabButton from "../Button/TabButton";
import { EXAMPLES } from '../../mock/data.jsx';
import { useState } from 'react';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('리액트 개념');

    function onClickHandler(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="core-concepts">
            <h2>{selectedTopic}</h2>
            <ul>
                <TabButton onClick={() => onClickHandler('components')}>components</TabButton>
                <TabButton onClick={() => onClickHandler('jsx')}>jsx</TabButton>
                <TabButton onClick={() => onClickHandler('props')}>props</TabButton>
                <TabButton onClick={() => onClickHandler('state')}>state</TabButton>
            </ul>
            <div id="example-box">
                {!selectedTopic ? <p>리액트 개념을 선택하세요~!</p> : null}
                <h2>{EXAMPLES[selectedTopic].title}</h2>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre id="code-box">
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        </section>
    );
}