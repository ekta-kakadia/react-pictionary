import { Row, Card, Col } from "antd";

const Data = ({ searchData }) => {
  console.log(searchData);
  const word = searchData && searchData.dicData && searchData.dicData[0]?.word;
  const phonetic =
    searchData && searchData.dicData && searchData.dicData[0]?.phonetic;
  const origin =
    searchData && searchData.dicData && searchData.dicData[0]?.origin;
  const meaning =
    searchData && searchData.dicData && searchData.dicData[0]?.meanings;
  console.log(meaning);

  return (
    <>
      {!searchData ? (
        <div>
          <Card style={{ width: "1000px" }}>
            <h3>Word: {word}</h3>
            <h3>Phonetic: {phonetic}</h3>
            <p>origin: {origin}</p>
            <h3>Meaning</h3>
            <ol>
              {meaning?.map((item) => {
                return (
                  <li>
                    <h4>Parts Of Speech: {item.partOfSpeech}</h4>
                    <h4>Definitions: {item?.definitions[0]?.definition}</h4>
                    <h4>Definitions: {item?.definitions[0]?.example}</h4>
                  </li>
                );
              })}
            </ol>
          </Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Data;
