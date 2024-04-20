import CoreConcept from "../CoreConcept/CoreConcept";
import "../../App.css";
import logo from '../../images/logo.svg';

export default function CoreConcepts(props) {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                <CoreConcept
                    title="Components"
                    description="핵심 UI 빌딩블록"
                    image={logo} />
            </ul>
        </section>
    );
}