import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import { Container } from "@chakra-ui/react";
import SingleMovie from "./components/SingleMovie";
function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="1300px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/tv/:id" element={<SingleMovie />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

// AiOutlinePlayCircle;
