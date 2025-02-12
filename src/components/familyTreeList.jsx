import React, { useRef, useState, useEffect, useMemo} from "react";
import "./familyTreeList.css";
import CreateNewTree from "./createNewTree";
import Fuse from 'fuse.js';

const FamilyTreeList = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateNewTree, setShowCreateNewTree] = useState(false)
  const [newFamilyTree, setNewFamilyTree]=useState({
    title_tree: '',
    image_tree: '',
    id_tree: ''
  });
  const [list, setList] = useState([
    { id: 1, title: "Object 1", status: "Active", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg" },
    { id: 2, title: "Object 2", status: "Inactive", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg" },
    { id: 3, title: "Object 3", status: "Active", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg" },
  ]);
  const navbarRef = useRef(null); // Créer une référence
  const searchbarRef = useRef(null);
  const listgridRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleCreate = () => {
    setShowCreateNewTree(true);
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  useEffect(() => {
    if (navbarRef.current) {
      // Accéder à la hauteur du composant
      const currentHeight = navbarRef.current.getBoundingClientRect().height;
        if (searchbarRef.current) {
        searchbarRef.current.style.top = currentHeight.toString()+"px";
      }
    }

  }, [showDropdown, showCreateNewTree]);// Exécuter seulement après le premier rendu

  useEffect(() => {
    if (navbarRef.current && searchbarRef.current ) {
      // Accéder à la hauteur du composant
      const currentHeight = navbarRef.current.getBoundingClientRect().height + searchbarRef.current.getBoundingClientRect().height;
        if (listgridRef.current) {
        listgridRef.current.style.top = currentHeight.toString()+"px";
      }
    }

  }, [showDropdown, searchbarRef.current,navbarRef.current, showCreateNewTree]); // Exécuter seulement après le premier rendu

  useEffect(() => {
    if (showDropdown && dropdownRef.current) {
      // Calculer l'espace disponible
      const rect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const menu = dropdownRef.current.querySelector(".dropdown-menu");

      const spaceBelow = viewportHeight - rect.bottom; // Espace en bas
      const spaceAbove = rect.top; // Espace en haut
      const spaceRight = viewportWidth - rect.right; // Espace à droite
      const spaceLeft = rect.left; // Espace à gauche

      // Réinitialiser les styles
      menu.style.top = "auto";
      menu.style.bottom = "auto";
      menu.style.left = "auto";
      menu.style.right = "auto";

      // Choisir la meilleure position pour le menu
      if (spaceBelow > menu.offsetHeight) {
        // Afficher en bas si l'espace le permet
        menu.style.top = "100%";
        menu.style.left = "0";
      } else if (spaceAbove > menu.offsetHeight) {
        // Afficher en haut si l'espace le permet
        menu.style.bottom = "100%";
        menu.style.left = "0";
      } else if (spaceRight > menu.offsetWidth) {
        // Afficher à droite
        menu.style.top = "0";
        menu.style.left = "100%";
      } else if (spaceLeft > menu.offsetWidth) {
        // Afficher à gauche
        menu.style.top = "0";
        menu.style.right = "100%";
      } else {
        // Par défaut, afficher en bas même si l'espace est limité
        console.log("affichage par défaut!")
        menu.style.top = "100%";
        menu.style.left = "0";
      }
    }
  }, [showDropdown, showCreateNewTree]); // Réagir à l'ouverture du dropdown

  useEffect(()=>{
    const newId = list.length + 1;
    if (newFamilyTree.id_tree ==='' && newFamilyTree.title_tree !=='' ) {
      const newItem = {
        id: newId,
        title: newFamilyTree.title_tree,
        status: "Owner",
        image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
      };
      setList([...list, newItem]);
    }
    if(newFamilyTree.id_tree !=='' && newFamilyTree.title_tree ==='' ){
      const newItem = {
        id: newId,
        title: `Object ${newId}`,
        status: "Viewer",
        image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
      };
      setList([...list, newItem]);
    }
    setShowCreateNewTree(false);
  }, [newFamilyTree]);

  // Fermer le dropdown en cliquant en dehors
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setShowDropdown(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);


  // Options de configuration pour Fuse
  const fuseOptions = {
    // Les champs de l'objet où Fuse doit chercher 
    keys: ['title', 'status'],
    // "threshold" contrôle la sensibilité de la recherche (0 = stricte, 1 = très permissive)
    threshold: 0.3,
  };

  // On crée l'instance de Fuse. 
  // Pour éviter de la recréer à chaque rendu, on peut utiliser useMemo.
  const fuse = useMemo(() => {
    return new Fuse(list, fuseOptions);
  }, [list]);

  // On effectue la recherche : fuse.search() renvoie un tableau de résultats
  const results = searchQuery ? fuse.search(searchQuery) : [];

  // Si aucun texte n'est saisi, on affiche simplement la liste d'origine
  const finallistFamilyTree = searchQuery
    ? results.map((result) => result.item)
    : list;


  return (
    <div className="container">
      {/* Première barre de navigation */}
      <nav className="navbar" ref={navbarRef}>
        <div className="logo">Logo</div>
        <div className="home">Home</div>
        <div
        className="dropdown"
        onClick={() => setShowDropdown(!showDropdown)} ref={dropdownRef}
        >
        ☰
        {showDropdown && (
            <div className="dropdown-menu">
            <div>Account Settings</div>
            <div>Logout</div>
            </div>
        )}
        </div>
      </nav>
      { !showCreateNewTree?
        <div>
          {/* Deuxième barre de navigation */}
          <div className="search-bar" ref={searchbarRef}>
              <h2 className="list-title">List of Family Tree</h2>
              <div className="search-controls">
                <input
                    type="text"
                    placeholder="Search in list..."
                    value={searchQuery}
                    class="search-input"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="create-button" onClick={handleCreate}>
                  Add a New Tree
              </button>
          </div>

          {/* Liste des objets */}
          <div className="family_tree-grid" ref={listgridRef}>
              <div className="family_tree-list">
                  {finallistFamilyTree.map((item, index) => (
                      <div className="family_tree-object" key={item.id}>
                          <img src={item.image} alt={item.title} className="family_tree-image" />
                          <div className="family_tree-title">{item.title}</div>
                          <div className="family_tree-description">{item.status}</div>
                          <div className="item-actions">
                              <button className="enter-button">Enter</button>
                              <button
                                  className="delete-button"
                                  onClick={() => handleDelete(item.id)}
                              >
                                  Delete
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>
        :
        <div>
          <CreateNewTree  setShowForm={setShowCreateNewTree} setANewTreeData={setNewFamilyTree}/>
        </div>
      }
    </div>
  );
};

export default FamilyTreeList;
