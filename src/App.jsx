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
          Ciao, sono Luca Drago, un ragazzo di 19 anni con una passione per la tecnologia e i videogiochi. Da quando ero bambino, ho sempre sognato di lavorare in questo settore e mi piacerebbe creare esperienze coinvolgenti per milioni di giocatori in tutto il mondo. È per questo che ho scelto di frequentare un istituto tecnico industriale con indirizzo informatico. Inizialmente, la mia motivazione era legata alla mia passione per i videogiochi e all'idea di lavorare per grandi aziende come Apple o importanti case produttrici di videogiochi come Riot Games o Ubisoft. Tuttavia, durante il mio percorso scolastico, ho scoperto molto più di quanto avrei immaginato.
          </CardMain>
          <CardMain conditions={false} photo={luca2Photo}>
          Durante il terzo anno di scuola, studiando il linguaggio di programmazione C, ho iniziato a comprendere appieno la logica dietro il funzionamento del software. Questo è stato per me un momento decisivo. Ho scoperto una passione per la risoluzione di problemi complessi e ho iniziato a vedere l'informatica sotto una nuova luce. Nel quarto anno, ho approfondito le mie conoscenze sperimentando con HTML e CSS per la creazione di pagine web. È stato incredibile vedere come con poche righe di codice potessi dare vita a un'interfaccia grafica, un vero e proprio momento di creatività che mi ha fatto capire di voler approfondire ulteriormente questo campo.
          </CardMain>
          <CardMain conditions={true} photo={luca3Photo}>
          Oggi, nel mio quinto anno di scuola, posso dire con orgoglio di aver raggiunto un livello di competenza considerevole. Ho imparato a programmare pagine web utilizzando framework come React e ho affinato le mie abilità nel design utilizzando TailwindCSS. Tuttavia, non mi sono limitato a fare soltanto questo ma ho anche iniziato ad esplorare il mondo del backend, lavorando con Node.js per creare applicazioni web complete e funzionali. Ripensando al mio percorso scolastico capisco di aver fatto la scelta giusta scegliendo di frequentare l'ITIS "E. TORRICELLI" di Sant'Agata di Militello che oltre a fornirmi una solida base tecnica, mi ha insegnato a pensare in modo critico, a risolvere problemi in modo creativo e a lavorare sodo per raggiungere i miei obiettivi.
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
            <Card className="min-h-72" title="PCTO" photo="data:image/jpeg;base64,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">
            Durante il quarto anno di scuola, ho partecipato al PCTO presso l'azienda Tri-Tech-Solutions. Durante questa esperienza, ho appreso le basi di HTML, CSS e JavaScript da giovani professionisti, molti dei quali erano ex studenti del mio stesso istituto industriale informatico.
            </Card>
            <Card className="min-h-72" title="PON" photo="https://img.freepik.com/premium-photo/vr-headset-with-colorful-picture-landscape-screen_917136-28.jpg">
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
            <Card title="Concorso ufficiali Carabinieri" photo="https://www.formazionevictoria.com/wp-content/uploads/2023/12/BANDO-DI-CONCORSO-ALLIEVI-UFFICIALI-ACCADEMIA-CARABINIERI-2024-1170x568.png">
              Quest'anno ho avuto la possibilità di partecipare al concorso ufficiali carabinieri a Roma...
            </Card>
            <Card title="Concorso ufficiali Esercito" photo="https://www.formazionevictoria.com/wp-content/uploads/2023/12/BANDO-DI-CONCORSO-ALLIEVI-UFFICIALI-ACCADEMIA-ESERCITO-2024.png">
              Ho partecipato al concorso ufficiali esercito a Foligno dove ho superato le prove di cultura generale...
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
