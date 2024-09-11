Hooks.once("ready", () => {
  // Vérifiez si `calibers` est défini dans `game.degenesis.config`
  if (game.degenesis.config && game.degenesis.config.calibers) {
    console.log("Nouveaux calibres ajoutés à game.degenesis.config.calibers.");

    // Ajoutez les nouveaux calibres
    Object.assign(game.degenesis.config.calibers, {
      cartridgeSPTH: "Cartouche SP 4016 TH",
      cartridgeEXEG: "Cartouche Aérosol d’EX/EG-1",
      cartridgeBN: "Cartouche Bande noire",
      cartridgeGC: "Cartouche Gaz chloré",
      cartridgeCI: "Cartouche Irritant",
      cartridgeMP: "Cartouche Marqueur phéromonal",
      cartridgePF: "Cartouche Poussière de feu",
      cartridgefreon: "Cartouche au Fréon"
    });
    
    console.log("Calibres après ajout :", game.degenesis.config.calibers);
  } else {
    console.warn("Impossible de trouver game.degenesis.config.calibers.");
  }
});
