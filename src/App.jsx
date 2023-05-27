import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stories from "./pages/Stories";
import Post from "./pages/Post";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stories />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
