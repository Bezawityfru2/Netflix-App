import Row from "../Row/Row";
import request from "../../../api/request";

const RowList = () => {
  return (
    <>
      <Row
        title="NEETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLageRow={true}
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}  />

      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="History Movies" fetchUrl={request.fetchHistoryMovies} />
      <Row title="Drama Movies" fetchUrl={request.fetchDramaMovies}  />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="TV Show" fetchUrl={request.fetchTVShow}/>
    </>
  );
};

export default RowList;
