import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Top10 from "./routes/top10";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/top10" element={<Top10 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
