/**
 * Clean data, and convert strings to int
 * @param {*} data
 * @returns
 */
const sanitizeData = (data) => {
  return {
    arbeidsreiser: data["arbeidsreiser"].map((record) => {
      return { km: parseInt(record.km), antall: parseInt(record.antall) };
    }),
    besoeksreiser: data["besoeksreiser"].map((record) => {
      return { km: parseInt(record.km), antall: parseInt(record.antall) };
    }),
    utgifterBomFergeEtc: parseInt(data["utgifterBomFergeEtc"]),
  };
};

const getData = async (data) => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sanitizeData(data)),
  };
  try {
    const fetchResponse = await fetch(
      `https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag`,
      settings
    );
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};

export default getData;
