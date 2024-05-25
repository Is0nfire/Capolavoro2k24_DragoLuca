import React from 'react';
import CardMain from './components/CardMain';
import CardS from './components/CardS';
import Card from './components/Card';
import lucaPhoto from './assets/img/luca1.jpeg';
import luca2Photo from './assets/img/luca2.jpeg';
import luca3Photo from './assets/img/luca3.jpeg';
import luca4Photo from './assets/img/luca4.jpeg';
import cyberSphoto from './assets/img/CyberS.jpeg';
import itEssentials from './assets/img/ItEssentials.jpeg';

function App() {
  return (
    <div className="bg-gray-900 text-center font-serif text-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center flex items-center justify-center">
          <h1 className="text-4xl font-bold mt-12">Luca Drago</h1>
        </div>
        <div className="space-y-10">
          <CardMain conditions={true} photo={lucaPhoto}>
          Ciao, sono Luca Drago, un ragazzo di 19 anni con una passione per la tecnologia e i videogiochi. Da quando ero bambino, ho sempre sognato di lavorare nell'industria dei videogiochi, creando esperienze coinvolgenti per milioni di giocatori in tutto il mondo. È per questo che ho scelto di frequentare un istituto tecnico industriale con indirizzo informatico. Inizialmente, la mia motivazione era legata alla mia passione per i videogiochi e all'idea di lavorare per grandi aziende come Apple o importanti case produttrici di videogiochi come Riot Games o Ubisoft. Tuttavia, durante il mio percorso scolastico, ho scoperto molto più di quanto avrei immaginato.
          </CardMain>
          <CardMain conditions={false} photo={luca2Photo}>
          Durante il terzo anno di scuola, studiando il linguaggio di programmazione C, ho iniziato a comprendere appieno la logica dietro il funzionamento del software. È stato un momento decisivo per me. Ho scoperto una passione per la risoluzione di problemi complessi e ho iniziato a vedere l'informatica sotto una nuova luce. Nel quarto anno, ho approfondito le mie conoscenze sperimentando con HTML e CSS per la creazione di pagine web. È stato incredibile vedere come con poche righe di codice potessi dare vita a un'interfaccia grafica. È stato un vero e proprio momento di creatività per me, e mi ha fatto capire che volevo approfondire ulteriormente questo campo.
          </CardMain>
          <CardMain conditions={true} photo={luca3Photo}>
          Oggi, nel mio quinto anno di scuola, posso dire con orgoglio di aver raggiunto un livello di competenza considerevole. Ho imparato a programmare pagine web utilizzando framework come React e ho affinato le mie abilità nel design utilizzando TailwindCSS. Ma non mi sono fermato qui. Ho anche iniziato ad esplorare il mondo del backend, lavorando con Node.js per creare applicazioni web complete e funzionali. Guardando indietro, sono grato per il mio percorso alla scuola industriale informatica. Oltre a fornirmi una solida base tecnica, mi ha insegnato a pensare in modo critico, a risolvere problemi in modo creativo e a lavorare sodo per raggiungere i miei obiettivi.
           </CardMain>
          <CardMain conditions={false} photo={luca4Photo}>
          Ora sono pronto per il prossimo capitolo della mia vita. Con le conoscenze e le competenze acquisite, sono determinato a perseguire la mia passione per la tecnologia e i videogiochi, con l'obiettivo di trasformare il mio sogno in realtà. Guardo avanti alle sfide che mi attendono e sono pronto a mettermi alla prova nel mondo. Sono consapevole che il cammino non sarà facile, ma sono determinato a lavorare duramente per raggiungere i miei obiettivi e a fare la mia parte.
           </CardMain>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl font-bold">Certificati CISCO</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <CardS photo={cyberSphoto} title="Introduction to Cybersecurity">
            Il corso "Introduction to Cybersecurity" di Cisco mi ha fornito una solida base di conoscenze dei principi fondamentali della sicurezza informatica. Grazie a questo corso, sono consapevole dell'importanza della sicurezza informatica in un mondo sempre più digitalizzato.
          
            </CardS>
            <CardS photo={itEssentials} title="IT Essentials">
            Il corso "IT Essentials" di Cisco mi ha fornito una solida base di conoscenze nel campo dell'informatica e della tecnologia. Grazie a questo corso, ho acquisito una comprensione approfondita di hardware e software, così come le competenze di base per la risoluzione dei problemi.
            </CardS>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl font-bold">Esperienze PCTO e PON</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <Card title="PCTO" photo="https://media.licdn.com/dms/image/D4D0BAQHP_41FoegCXg/company-logo_200_200/0/1682604989189/tri_tech_solutions_logo?e=2147483647&v=beta&t=z3X7wzXpDVuadYEn8OUb0EoYG4ZtOgwzL8HLIEClLuY">
            Durante il quarto anno di scuola, ho partecipato al PCTO presso l'azienda Tri-Tech-Solutions. Durante questa esperienza, ho appreso le basi di HTML, CSS e JavaScript da giovani professionisti, molti dei quali erano ex studenti del mio stesso istituto industriale informatico.
            </Card>
            <Card title="PON" photo="https://img.freepik.com/premium-photo/vr-headset-with-colorful-picture-landscape-screen_917136-28.jpg">
            Durante un progetto PON, ho collaborato con la scuola per creare un tour virtuale della nostra struttura utilizzando un visore 3D e fotografie a 360 gradi. Questa esperienza mi ha permesso di conoscere e utilizzare visori 3D come i Meta Quest.
          </Card>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-4xl font-bold">Esperienze CORSI e CONCORSI</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            <Card title="Corso di HTML" videoId={"PpBdz1ehRFE"}>
              Questo corso HTML di Edoardo Midali mi ha permesso di imparare le basi di questo linguaggio
            </Card>
            <Card title="Corso di CSS" videoId={"frtNKDcwYjk"}>
              Questo corso CSS di Edoardo Midali mi ha permesso di imparare le basi di questo linguaggio
            </Card>
            <Card title="Corso di JavaScript" videoId={"vL5ldIUqnb0"}>
              Questo corso Javascript di Edoardo Midali mi ha permesso di imparare le basi di questo linguaggio
            </Card>
            <Card title="Corso di NodeJS" videoId={"F6_M0ArF4S8"}>
              Questo corso NodeJS di Edoardo Midali mi ha permesso di imparare le basi di questo linguaggio
            </Card>
            <Card title="Corso di React" videoId={"3edF3beLm-k"}>
              Questo corso React di Edoardo Midali mi ha permesso di imparare le basi di questo linguaggio
            </Card>
            <Card title="Corso di Tailwind" videoId={"CtvRo9eZ6mU"}>
              Questo corso Tailwind di Edoardo Midali mi ha permesso di imparare le basi di questo linguaggio
            </Card>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card title="Concorso Ufficiali Carabinieri" photo="https://www.formazionevictoria.com/wp-content/uploads/2023/12/BANDO-DI-CONCORSO-ALLIEVI-UFFICIALI-ACCADEMIA-CARABINIERI-2024-1170x568.png">
              Quest'anno ho avuto la possibilità di partecipare al concorso ufficiali carabinieri a Roma...
            </Card>
            <Card title="Concorso Ufficiali Esercito" photo="https://www.formazionevictoria.com/wp-content/uploads/2023/12/BANDO-DI-CONCORSO-ALLIEVI-UFFICIALI-ACCADEMIA-ESERCITO-2024.png">
              Ho partecipato al concorso ufficiali esercito a Foligno dove ho superato le prove di cultura generale...
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
