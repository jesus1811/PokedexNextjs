import { getPokemon } from "../api";
import { Main } from "../components/layouts";
import { Pokemon } from "../components/pokemon/";

const Home = ({ pokemones }) => {
  return (
    <Main
      title="JesuDev"
      description="Aplicacion creado de forma estatica por JesuDev"
    >
      <Pokemon pokemones={pokemones} />
    </Main>
  );
};

export const getStaticProps = async () => {
  const { data } = await getPokemon();
  const pokemones = data.results;
  return {
    props: {
      pokemones: pokemones,
    },
  };
};
export default Home;
