import Header from "../widgets/Header/Header.tsx";
import Container from "../widgets/Container/Container.tsx";
import {NewsContainer} from "../widgets/NewsContainer/NewsContainer.tsx";

function Home() {
    return (
        <>
            <Header></Header>
            <main>
                <section>
                  <Container>
                      <NewsContainer></NewsContainer>
                  </Container>
                </section>
            </main>
            <footer></footer>
        </>
    );
}

export default Home;