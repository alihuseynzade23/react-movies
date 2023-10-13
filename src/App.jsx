import { useState } from "react";
import "./app.css";
import React, { Component } from "react";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";
class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}

export default App;

// Our job is to divide the data by movies and series
// When we click on radio button 'Movies only' we have to show movies only
// When we click on radio button 'Series only' we have to show series only
//
