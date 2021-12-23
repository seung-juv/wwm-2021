import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Timer from "./routes/timer";
import Ceremony from "./routes/ceremony";
import Events from "./routes/events";
import Home from "./routes/home";
import Top10 from "./routes/top10";
import { restApi } from "./apis";
import moment from "moment";

export const openDate = moment("2021-12-24 12:24");

function App(): React.ReactElement | null {
  const { data, fetch, loading } = useFetch();

  async function init(): Promise<void> {
    try {
      await fetch(restApi.get("/time"));
    } catch (error) {
      console.warn(error);
    }
  }

  React.useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data || loading) {
    return null;
  }

  if (moment(data).format("YYYYMMDDHHmmss") < openDate.format("YYYYMMDDHHmmss")) {
    return <Timer date={data} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top10" element={<Top10 />} />
        <Route path="/ceremony" element={<Ceremony />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
