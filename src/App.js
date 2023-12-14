import React from "react";
import Navbar from "./components/Navbar";
import TransactionForm from "./components/TransactionForm";
import TransactionHistory from "./components/TransactionHistory";
import Wallet from "./components/Wallet";
import "./App.css"; // Main app styling

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wallet />
      <TransactionForm />
      <TransactionHistory />
    </div>
  );
}

export default App;
