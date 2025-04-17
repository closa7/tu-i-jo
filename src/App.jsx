/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import FloatingHearts from "./components/FloatingHearts";
import "./style.css";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem("experiences");
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState("");

  const openModal = (imgSrc) => setModalImage(imgSrc);
  const closeModal = () => setModalImage(null);

  const toggleSection = (section) =>
    setActiveSection((prev) => (prev === section ? null : section));

  const addExperience = () => {
    if (inputValue.trim() === "") return;
    const updated = [...experiences, inputValue];
    setExperiences(updated);
    localStorage.setItem("experiences", JSON.stringify(updated));
    setInputValue("");
  };

  const deleteExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
    localStorage.setItem("experiences", JSON.stringify(updated));
  };

  return (
    <div className="app">
      <FloatingHearts />

      <nav className="navbar">
        <Link to="videos" smooth duration={500} className="nav-link">
          Videos
        </Link>
        <Link to="fotos" smooth duration={500} className="nav-link">
          Fotos
        </Link>
        <Link to="frases" smooth duration={500} className="nav-link">
          Frases
        </Link>
        <Link to="experiencias" smooth duration={500} className="nav-link">
          Experiencias
        </Link>
      </nav>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Tu i jo 💖
      </motion.h1>

      <div className="sections">
        <Element name="videos" className="section">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="section-title" onClick={() => toggleSection("videos")}>Videos</h2>
            {activeSection === "videos" && (
              <div className="content">
                <iframe
                  width="300"
                  height="200"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </motion.div>
        </Element>

        <Element name="fotos" className="section">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="section-title" onClick={() => toggleSection("fotos")}>Fotos</h2>
            {activeSection === "fotos" && (
              <div className="content">
                {["foto1.jpeg", "foto2.jpeg", "foto3.jpeg"].map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={`/images/${src}`}
                    alt={`Imagen ${idx + 1}`}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => openModal(`/images/${src}`)}
                    className="image"
                  />
                ))}
              </div>
            )}
          </motion.div>
        </Element>

        <Element name="frases" className="section">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="section-title" onClick={() => toggleSection("frases")}>Frases</h2>
            {activeSection === "frases" && (
              <div className="content">
                <p className="quote">"El amor es una fuerza más formidable que cualquier otra."</p>
                <p className="quote">"La vida es lo que pasa mientras estamos ocupados haciendo otros planes."</p>
              </div>
            )}
          </motion.div>
        </Element>

        <Element name="experiencias" className="section">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="section-title" onClick={() => toggleSection("experiencias")}>
              Experiencias
            </h2>
            {activeSection === "experiencias" && (
              <div className="content">
                <div className="experience-input">
                  <input
                    type="text"
                    placeholder="Añade una experiencia"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button onClick={addExperience}>Añadir</button>
                </div>
                <ul className="experience-list">
                  {experiences.map((exp, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {exp}
                      <button className="delete-btn" onClick={() => deleteExperience(index)}>
                        ✕
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </Element>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Imagen ampliada" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
