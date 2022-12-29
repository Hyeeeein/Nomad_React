import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getDetails(id) {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    if (json.status === "ok") {
      setDetail(json.data.movie);
      setLoading(false);
    } else {
      console.error(json.status);
    }
  }
  useEffect(() => {
    getDetails(id);
  }, []);
  console.log(detail);

  return (
    <div>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <div>
          <h1>{detail.title}</h1>
          <span>{detail.year}</span>
          <div style={{ display: "flex" }}>
            <a href={detail.url} target="_blank" rel="noreferrer">
              <img src={detail.large_cover_image} alt={detail.title} />
            </a>
            <div>
              <p>
                genres:
                {detail.genres &&
                  detail.genres.map((g, idx) => <span key={idx}>{g}, </span>)}
              </p>
              <p>❤ {detail.like_count}</p>
              <div>
                {detail.torrents &&
                  detail.torrents.map((t, idx) => (
                    <p key={idx}>
                      torrent {idx} :
                      <a href={t.url} target="_blank" rel="noreferrer">
                        {t.quality}
                      </a>
                    </p>
                  ))}
              </div>
              <p>download count : {detail.download_count}</p>
              <p>{detail.download_count}</p>
              <p>{detail.download_count}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
