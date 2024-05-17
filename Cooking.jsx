const ImgC ={    
    margin: "20px",
    height: "400px",
    width: "570px"
};


class Cooking extends React.Component {
  render() {
      return <div>
        <div style={{marginTop: "180px"}}>
        <img class="right" style={ImgC} src="/Foto/Croissant6.jpg" alt="Cooking" />
             <h2>Cuisson des croissants maison</h2>
             <p>Préparez votre jaune d’œuf en le battant avec un peu d’eau</p>
             <p>Préchauffez votre four à 180°</p>
             <p>Badigeonnez vos croissants du jaune d’œuf une seconde fois</p>
             <p>Enfournez 20 minutes ( selon votre four )</p>             
             </div>
             <h1>Bon appétit!!!</h1>                              
          </div>;
  }
}
