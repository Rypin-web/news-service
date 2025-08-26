import Header from "../widgets/Header/Header.tsx";
import Container from "../widgets/Container/Container.tsx";
import {TestComponent} from "../widgets/TestComponent.tsx";

function Home() {
    return (
        <>
            <Header></Header>
            <main>
                <Container>
                    work
                    <TestComponent></TestComponent>
                </Container>
            </main>
            <footer></footer>
        </>
    );
}

export default Home;