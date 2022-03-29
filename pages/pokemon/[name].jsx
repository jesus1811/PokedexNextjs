import { getPokemon, getPokemonId } from "../../api";
import { Main } from "../../components/layouts";
import { PokemonDetalle } from "../../components/PokemonDetalle";

const PokemonPage = ({
  pokemonUrlImage,
  types,
  name,
  stats,
  pokemonUrlImagedetalle,
}) => {
  return (
    <Main title={"JesuDev - " + name}>
      <PokemonDetalle
        pokemonUrlImage={pokemonUrlImage}
        types={types}
        name={name}
        stats={stats}
        pokemonUrlImagedetalle={pokemonUrlImagedetalle}
      />
    </Main>
  );
};

export const getStaticPaths = async (ctx) => {
  const { data } = await getPokemon();
  const pokemones = [...data.results];
  return {
    paths: pokemones.map((pokemon, index) => ({
      params: { name: pokemon.name },
    })),

    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { data } = await getPokemonId(ctx.params.name);
  const pokemonUrlImage = data.sprites.other.dream_world.front_default;
  const pokemonUrlImagedetalle = data.sprites;
  const types = data.types;
  const name = data.forms[0].name;
  const stats = data.stats;

  return {
    props: {
      pokemonUrlImage,
      types,
      name,
      stats,
      pokemonUrlImagedetalle,
    },
  };
};

export default PokemonPage;
