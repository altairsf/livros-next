import Link from "next/link";
import React from "react";

export const Menu: React.FC = () => {
    return (
        <div className="Menu">
            <header className = "Page-header" >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className = "container-fluid">
                        <ul className = "navbar-nav me-auto mb-2 mb-lg-0">
                            <li className = "nav-item">
                                <Link className = "nav-link" href = "/">
                                Home
                                </Link>
                            </li>
                            <li className = "nav-item">
                                <Link className = "nav-link" href = "/LivroLista">
                                Catálogo
                                </Link>
                            </li>
                            <li className = "nav-item">
                                <Link className = "nav-link" href = "/LivroDados">
                                Novo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Menu;