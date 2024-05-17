const ImgP ={    
    margin: "20px",
    height: "300px",
    width: "450px"
};


class Preparation extends React.Component {
  render() {
      return <div>
        <div>
        <img class="right" style={ImgP} src="/Foto/Croissant2.jpg" alt="Preparation" />
             <h2>Préparer une pâte feuilletée pour croissant maison ( pour 5 à 8 gros croissants )</h2>
             <p>Dissoudre la levure dans un peu d’eau tiède ( 28°c )</p>
             <p>Tamiser la farine puis ajouter le sucre (35gr) et le beurre ( 55gr )</p>
             <p>Sur un plan de travail, faites un puits</p>
             <p>Dissoudre le sel dans l’eau et verser dans le puits</p>
             <p>Ajoutez la préparation de levure</p>
             <p>Faites la détrempe en lui donnant une forme rectangulaire de 2 cm d’épaisseur</p>
             <p>Filmer et mettre au frais 30 minutes</p>
             </div>
             <div style={{marginTop: "100px"}}>
             <img class="left" style={ImgP} src="/Foto/Croissant3.jpg" alt="Preparation" />
             <h2>Préparer le pâton au beurre ( beurrage )</h2>
              <p>Mélanger à la main le beurre et la farine afin d’obtenir un mélange homogène</p>
              <p>Lui donner une forme rectangulaire</p>
              <p>Placer au frais 30 minutes</p>              
              </div>
              <div style={{marginTop: "230px"}}>
             <img class="right" style={ImgP} src="/Foto/Croissant4.jpg" alt="Preparation" />
             <h2>Le Tourage</h2>
              <p>Fleurer légèrement votre plan de travail. Étaler votre pâton de beurre. Disposer le beurre sur la détrempe </p>              
              <p>Refermer  la détrempe. A l’aide d’un rouleau abaisser la pâte sur sa longueur</p>             
              <p>Rabattre les cotés vers le centre et replier en deux ( tour double )</p>
              <p>Rabattre les cotés vers le centre et replier en deux ( tour double )</p>
              <p>Sortir la pâte du frigo et procéder de la même façon que l’étape précédente</p>
              <p>Étaler la pâte dans sa la longueur</p> 
              <p>Plier la pâte en 4</p>  
              <p>Placer au frais 30 minutes ( tour double )</p>  
              <p>Recommencer en étalant et en pliant la pâte 3 fois</p>  
              <p>Placer au frais 20 minutes et plier la pâte une dernière fois ( plus vous allez plier la pâte, plus vous aurez un beau feuilletage )</p>  
              </div>
              <div style={{marginTop: "80px"}}>
             <img class="left" style={ImgP} src="/Foto/Croissant5.jpg" alt="Preparation" />
             <h2>Façonner des croissants maison</h2>
              <p>Sortir votre de pâte du frigo et bien la détendre au rouleau en un long rectangle</p>
              <p>Étalez un rectangle régulier, le partager en 2</p>
              <p>Coupez net en triangles, inciser légèrement sur le grand côté</p>
              <p>Roulez en gardant la pointe de pâte en dessous</p>     
              <p>Dorer ( jaune d’œuf + eau ) et laissez pousser vos croissants 2 à 3 heures sous un torchon propre avant d’enfourner</p>     
              </div>                          
          </div>;
  }
}
