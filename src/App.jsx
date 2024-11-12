import Navbar from "./components/navbarComponents";
import Footer from "./components/footerComponent";
import Home from "./pages/home";
import Academics from "./pages/Acadamics";
import Tools from "./pages/tools";
import Contact from "./pages/contact";
import NotFound from "./pages/notFound"
import SignIn from "./pages/signIn"
import Resume from "./pages/resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/tools&technologies" element={<Tools />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
export default App;