import React from "react";
import Navbar from "./Navbar";
import SearchResult from "./SearchResult";
import Home from "./Home"

export default function Search() {
    return (
        <div>
            <Navbar />
            <section className="columns box">
                <div className="column">
                    <nav className="panel">
                    <div className="panel-block">

                    </div>
                        <div className="columns is-multiline search-grid">
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                                <SearchResult/>
                        </div>
                        
                    </nav>
                </div>
                
            </section>

            
        </div>
    );
}