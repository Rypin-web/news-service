import Header from "../widgets/Header/Header.tsx";
import Container from "../widgets/Container/Container.tsx";
import {NewsContainer} from "../widgets/NewsContainer/NewsContainer.tsx";
import {Filters} from "../widgets/Filters/Filters.tsx";
import {useState} from "react";

function Home() {
    const [filersIsOpened, setFiltersIsOpened] = useState(false)

    return (
        <>
            <Header></Header>
            <main>
                <section>
                    <Container>
                        {/*<NewsContainer></NewsContainer>*/}
                    </Container>
                </section>
                <button onClick={()=>setFiltersIsOpened(true)}>open</button>
                {filersIsOpened &&
                  <section>
                    <Filters close={setFiltersIsOpened}></Filters>
                  </section>}
            </main>
            <footer></footer>
        </>
    );
}

export default Home;