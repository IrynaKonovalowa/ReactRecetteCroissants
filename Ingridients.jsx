const ImgI ={ 
    float:"left",
    margin: "0px 50px 20px 450px",
    border: "2px solid seagreen"    
};

class Ingridients extends React.Component {
    render() {
        return <div>
            <img style={ImgI} src="/Foto/Croissant1.jpg" alt="Ingridients" />
            <h2>Ingridients:</h2>
            <ul>
                <li>8g de levure de boulanger</li>
                <li>250g de farine t55 ( détrempe )</li>
                <li>55g beurre doux ( détrempe )</li>
                <li>15cl eau ( détrempe )</li>
                <li>8g sel ( détrempe )</li>
                <li>300g de beurre doux ( beurrage )</li>
                <li>150g de farine t55 ( beurrage )</li>
                <li>1 jaune d’œuf + filet d’eau ( dorure )</li>
            </ul>
            <br /><br />
            <hr />            
            </div>;
    }
}