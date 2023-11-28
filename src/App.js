import logo from './logo.svg';
import './App.css';
import CardApp from './Card';

function App() {
  return (
    <div className="App">
        {/* digimon */}
        <CardApp 
          title="Digimon"
          src="https://i.pinimg.com/564x/f4/f3/30/f4f3307c1ed2a7b99a05ed9d69b9fffa.jpg" 
          href="https://digimon-creators.fandom.com/es/wiki/Digimon:_New_Generation" 
          description="Ven a jugar, Linea evolutiva de Agumon"    
          type="virtual"        
        />
        {/* pokemon */}
        <CardApp 
          title="Pokemon"
          src="https://i.pinimg.com/564x/ad/0a/38/ad0a38b8fcab6ed8fce7d260f427ca0b.jpg" 
          href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Wiki"             
          description='Toma la "pokebola", Pokemones iniciales de Kanto y un colado'
          type="animal"
        />
        {/* naruto */}
        <CardApp 
          title="Naruto"
          src="https://i.pinimg.com/564x/33/8f/f7/338ff76ba896a42b535be655cac2bb5a.jpg" 
          href="https://naruto.fandom.com/es/wiki/Naruto_Wiki" 
          description="El mejor ánime"
          type="real"                    
        />
        
    </div>
  );
}

export default App;
