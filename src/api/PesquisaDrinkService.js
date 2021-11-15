import { URL_API } from "@env";

export const requestPesquisaDrink = async (pesquisa) => {
  try {
    const response = await fetch(`${URL_API}search.php?s=${pesquisa}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
