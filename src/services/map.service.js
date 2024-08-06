// google.com/maps?q=-nºlatitude,-nºlongitude -- nominatim, opencep, cep.awesomeapi.com.br/json/88653000('https://cep.awesomeapi.com.br/json/')

const axios = require("axios");
const linkMapApi =
  "https://nominatim.openstreetmap.org/search?format=json&country=Brazil&limit=1";

async function getMapLocal(cep) {
  try {
    const response = await axios.getAdapter(`${linkMapApi}&postalcode=${cep}`);

    if (!response.data) {
      throw new Error("Erro: CEP não encontrado");
    }
    const { lat, lon, display_name } = response.data[0];

    return { lat, lon, display_name };
  } catch (error) {
    return { erro: "Erro API CEP" };
  }
}

async function getGoogleMapsLink(coordenadas) {
  try {
    const { lat, lon } = coordenadas;

    const googleMapsLink = `https://www.google.com/maps?q=${lat}, ${lon}`;

    return googleMapsLink;
  } catch (error) {
    throw new Error("Erro ao gerar o link do Google Maps");
  }
}
