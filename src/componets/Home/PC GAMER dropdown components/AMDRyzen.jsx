import React from 'react';
import './AMDRyzen.css';
import Card from '../../../componets/Card/Card';
import DropCommon from './PC GAMER SUB/DropCommon';


const productCardData = [
  {
    id: 1,
    imgURL: "card_1.jpg",
    hoverImgURL: "card_1_hover.jpg",
    rating: 4.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
  
  {
    id: 2,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    rating: 3.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
  {
    id: 3,
    imgURL: "card_2.jpg",
    hoverImgURL: "card_2_hover.jpg",
    rating: 3.5,
    title: "PC Premium gaming AMD Ryzen 9 7900X Super Nova",
    features: [
      "Windows 11 Home",
      "AMD Ryzen 9 7900X, 12x 4,70 GHz",
      "NVIDIA GeForce RTX 4080 Super 16 Go",
      "32Go Kingston 6000Mhz DDR5 RGB RAM",
      "Gigabyte X670 Aorus Elite",
      "1To Crucial T700 M.2 NVMe SSD",
    ],
    oldPrice: "3 074,00 €",
    newPrice: "2 999,00 €",
    deliveryTime: "Délai de livraison 4-6 jours ouvrés",
  },
];


export default function AMDRyzen() {
  return (

    <>
    <div className="container pops">
    <div className="d-flex my-4 font-u flex-wrap">
      <p className='mb-0'>
        Accueil <span className="ps-2">&gt;</span>
      </p>
      <p className="ps-2 mb-0">
        PC Gamer <span>&gt;</span>
      </p>
      <p className="ps-2 mb-0">
        PC Gamer AMD <span>&gt;</span>
      </p>
      <p className="ps-2 mb-0">AMD Ryzen 5 </p>
    </div>

    <h3 className='amd-h3 mb-4'>PC Gamer avec processeur AMD Ryzen 5</h3>
    <p className="font-16 mb-5">
    Explore une gamme de PC Gamer à entrée et milieu de gamme dotés de CPU Ryzen 5. Megaport te propose une vaste sélection de systèmes PC efficaces équipés de processeurs AMD Ryzen 5. Grâce à notre configurateur, personnalise ton PC Ryzen 5 selon tes préférences. Procure-toi dès maintenant ton nouvel ordinateur de jeu avec processeur multicœur AMD chez Megaport.
    </p>

    <div className="container-fluid filter-bar">
      <DropCommon/>
   
    </div>
    <Card address="../../../assets/image" productCardData={productCardData} />
  </div>

  
  <div className="I5-back py-5">
        <div className="container pops">
          <div className=" text-white">
            <h4>PC Gamer Ryzen 5 : <span className="green"> excellent équilibre entre performance et prix avec les processeurs AMD</span></h4>
            <p className="gray ">Nos systèmes PC dotés de processeurs AMD offrent un large éventail de fonctionnalités pour optimiser ton expérience de jeu. Nous utilisons les tout derniers processeurs AMD Ryzen 5 ainsi que les cartes graphiques actuelles de NVIDIA et AMD. Que tu penches vers une carte graphique NVIDIA GeForce ou AMD Radeon, nous avons le modèle qui te convient.</p>
          </div>

          <p className="gray">Un processeur AMD Ryzen 5 est le choix parfait pour les joueurs en quête d'un PC Gamer abordable offrant des performances exceptionnelles. Les CPU Ryzen 5 proposent une fréquence d'horloge élevée ainsi qu'un nombre important de cœurs et de threads. Grâce à leurs performances puissantes, même les jeux exigeants peuvent être joués sans accroc. Que tu sois novice ou joueur aguerri, un PC Gamer Ryzen 5 te dote d'une préparation optimale pour ton prochain périple ludique.</p>

          <p className="gray mb-5">Grâce à leurs multiples cœurs et threads, les processeurs i5 gèrent aisément les travaux multitâches. Tu peux ainsi travailler simultanément sur plusieurs applications ou profiter d'une performance de jeu fluide. Que tu sois novice ou joueur chevronné, un PC équipé d'un processeur Intel Core i5 te prépare à toutes les éventualités.</p>

          <h2 className="text-white mt-4 mb-3">PC Ryzen 5 AMD : performance de jeu à des tarifs accessibles</h2>
          
          <p className="gray">
          La gamme Ryzen 5 d'AMD est considérée comme une option de milieu de gamme idéale pour un PC Gamer abordable. Le processeur AMD gère aisément les tâches du quotidien, le multitâche et le jeu. Chez Megaport, nous te proposons des PC Gamer avec CPU Ryzen 5 à un tarif séduisant.
          </p>

          <p className="gray">Les processeurs Ryzen 5 se composent de 6 cœurs CPU. Grâce à la technologie Simultaneous Multithreading (SMT), deux threads par cœur peuvent être traités. Ainsi, les cœurs de calcul passent de 6 à 12 grâce à l'ajout de 6 cœurs virtuels supplémentaires. Cette configuration accroît la puissance et l'efficacité.</p>

          <p className="gray mb-5">
          PC Gamer Ryzen 5 : Davantage de Puissance avec Precision Boost 2. Cette technologie AMD amplifie les fréquences d'horloge pour exécuter les jeux et les applications plus rapidement. Les processeurs Ryzen 5 intelligents surveillent automatiquement l'état de l'ordinateur et augmentent la fréquence d'horloge de manière automatique. Même en cas de multitâche et de charges élevées, les performances sont automatiquement rehaussées pour maintenir une performance optimale. Cette caractéristique s'avère particulièrement utile en jeu pour maintenir une performance constante sous de lourdes charges.
          </p>

          <h2 className="text-white">Intel Core i5 ou AMD Ryzen 5 :   <span className="green">comparaison des processeurs de milieu de gamme</span></h2>

          <p className="gray">Lorsqu'il s'agit de processeurs de bureau, le débat entre AMD et Intel est inévitable. Les CPU Intel Core ont longtemps été en tête, mais ce n'est plus le cas. Les deux fabricants offrent des performances exceptionnelles avec leurs processeurs pour PC Gamer. Toutefois, AMD se démarque avec sa série Ryzen 5, surtout en termes de rapport performance-prix. Les processeurs Gamer Ryzen 5 d'AMD se distinguent donc par leur excellente efficacité en termes de prix.</p>

          <p className="gray mb-5">Les CPU de milieu de gamme d'AMD se caractérisent par leur architecture multicœur et le SMT (Simultaneous Multithreading). Un PC Gamer Ryzen 5 fonctionne de manière optimale et garantit une performance multitâche efficace. En revanche, un PC Gamer Intel Core i5 se distingue par une performance monocœur puissante et convient particulièrement aux applications qui requièrent une performance monocœur élevée. Les deux processeurs supportent les technologies modernes et offrent des avantages spécifiques.</p>

         

          <h2 className="text-white mt-4 mb-3">AMD Ryzen 5 5600 : une option efficace pour les PC Gamer</h2>

          <p className="gray mb-5">
          Un PC Gamer équipé d'un processeur Intel Core i5 et d'une carte graphique NVIDIA ou AMD actuelle gère aisément les tâches les plus exigeantes. Même en étant un processeur de milieu de gamme, le i5 se prête idéalement aux joueurs, aux streameurs et aux créatifs. Le multitâche et un taux de rafraîchissement élevé garantissent une productivité optimale en travail et en jeu. Chez Megaport, nous te proposons une large sélection de PC équipés de processeurs Intel i5, le tout à un tarif avantageux.
          </p>


          <h2 className="text-white mt-4 mb-3"> Achète dès maintenant un PC Gamer avec processeur AMD Ryzen 5 chez Megaport</h2>

          <p className="gray">
          Nous te proposons une large sélection de systèmes PC dotés de CPU Ryzen 5 et de cartes graphiques Radeon ou RTX. Un PC Ryzen 5 offre un excellent compromis entre performance, vitesse et efficacité énergétique à un prix abordable. Procure-toi dès maintenant ton PC Gamer AMD Ryzen 5 chez Megaport et profite de tes jeux préférés en Full HD sans délai. Tu recherches encore plus de puissance ? Découvre nos <span className='green underline'>PC Gamer dotés de CPU Ryzen 7</span>
          </p>
         

          


        </div>
      </div>
  


  </>
  );
}
