import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ceremony from "./routes/ceremony";
import Events from "./routes/events";
import Home from "./routes/home";
import Top10 from "./routes/top10";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top10" element={<Top10 />} />
      <Route path="/ceremony" element={<Ceremony />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
