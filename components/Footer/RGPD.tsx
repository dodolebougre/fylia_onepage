import React, { useState } from "react";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1001,
      overflow: "auto", // Ajoutez cette ligne pour permettre le défilement
      maxHeight: "80vh", // Limitez la hauteur à 80% de la vue en hauteur
    },
  };

  return (
    <div className="font-extralight">
      <button
        className="cursor-pointer hover:font-normal tracking-tight"
        onClick={() => setIsOpen(true)}
      >
        Politique de confidentialité
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        className=""
        ariaHideApp={false}
      >
        <div className="xl:w-[800px] lg:w-[600px] w-[360px]">
          <button
            className="border border-black w-6 h-6 rounded-full flex items-center justify-center shadow-xl  cursor-pointer text-black bg-white  xl:ml-[780px] absolute  lg:ml-[580px] ml-[340px] font-thin hover:bg-black hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <IoIosClose />
          </button>
          <h1 className="text-5xl text-center">Politique de confidentialité</h1>
          <br />
          <p>
            Le site web Fylia est détenu par Fylia, qui est un contrôleur de
            données de vos données personnelles.
          </p>
          <p>
            Nous avons adopté cette politique de confidentialité, qui détermine
            la manière dont nous traitons les informations collectées par Fylia,
            qui fournit également les raisons pour lesquelles nous devons
            collecter certaines données personnelles vous concernant. Par
            conséquent, vous devez lire cette politique de confidentialité avant
            d'utiliser le site web de Fylia.
          </p>
          <p>
            Nous prenons soin de vos données personnelles et nous nous engageons
            à en garantir la confidentialité et la sécurité.
          </p>
          <br />
          <h2 className="text-xl font-semibold">
            Les informations personnelles que nous collectons
          </h2>
          <p>
            Lorsque vous visitez le Fylia, nous recueillons automatiquement
            certaines informations sur votre appareil, notamment des
            informations sur votre navigateur web, votre adresse IP, votre
            fuseau horaire et certains des cookies installés sur votre appareil.
            En outre, lorsque vous naviguez sur le site, nous recueillons des
            informations sur les pages web ou les produits individuels que vous
            consultez, sur les sites web ou les termes de recherche qui vous ont
            renvoyé au site et sur la manière dont vous interagissez avec le
            site. Nous désignons ces informations collectées automatiquement par
            le terme "informations sur les appareils". En outre, nous pourrions
            collecter les données personnelles que vous nous fournissez (y
            compris, mais sans s'y limiter, le nom, le prénom, l'adresse, les
            informations de paiement, etc.) lors de l'inscription afin de
            pouvoir exécuter le contrat.
          </p>
          <br />
          <h2 className="text-xl font-semibold">
            Pourquoi traitons-nous vos données ?
          </h2>
          <p>
            Notre priorité absolue est la sécurité des données des clients et, à
            ce titre, nous ne pouvons traiter que des données minimales sur les
            utilisateurs, uniquement dans la mesure où cela est absolument
            nécessaire pour maintenir le site web. Les informations collectées
            automatiquement sont utilisées uniquement pour identifier les cas
            potentiels d'abus et établir des informations statistiques
            concernant l'utilisation du site web. Ces informations statistiques
            ne sont pas autrement agrégées de manière à identifier un
            utilisateur particulier du système.
          </p>
          <p>
            Vous pouvez visiter le site web sans nous dire qui vous êtes ni
            révéler d'informations, par lesquelles quelqu'un pourrait vous
            identifier comme un individu spécifique et identifiable. Toutefois,
            si vous souhaitez utiliser certaines fonctionnalités du site web, ou
            si vous souhaitez recevoir notre lettre d'information ou fournir
            d'autres détails en remplissant un formulaire, vous pouvez nous
            fournir des données personnelles, telles que votre e-mail, votre
            prénom, votre nom, votre ville de résidence, votre organisation,
            votre numéro de téléphone. Vous pouvez choisir de ne pas nous
            fournir vos données personnelles, mais il se peut alors que vous ne
            puissiez pas profiter de certaines fonctionnalités du site web. Par
            exemple, vous ne pourrez pas recevoir notre bulletin d'information
            ou nous contacter directement à partir du site web. Les utilisateurs
            qui ne savent pas quelles informations sont obligatoires sont
            invités à nous contacter via moncontact@fylia.fr.
          </p>
          <br />
          <h2 className="text-xl font-semibold">Vos droits </h2>
          <p>
            Si vous êtes un résident européen, vous disposez des droits suivants
            liés à vos données personnelles :
          </p>
          <p>
            Le droit d'être informé.
            <br />
            Le droit d'accès.
            <br />
            Le droit de rectification.
            <br />
            Le droit à l'effacement.
            <br />
            Le droit de restreindre le traitement.
            <br />
            Le droit à la portabilité des données.
            <br />
            Le droit d'opposition.
            <br />
            Les droits relatifs à la prise de décision automatisée et au
            profilage.
            <br />
            Si vous souhaitez exercer ce droit, veuillez nous contacter via les
            coordonnées ci-dessous.
          </p>
          <p>
            En outre, si vous êtes un résident européen, nous notons que nous
            traitons vos informations afin d'exécuter les contrats que nous
            pourrions avoir avec vous (par exemple, si vous passez une commande
            par le biais du site), ou autrement pour poursuivre nos intérêts
            commerciaux légitimes énumérés ci-dessus. En outre, veuillez noter
            que vos informations pourraient être transférées en dehors de
            l'Europe, y compris au Canada et aux États-Unis.
          </p>
          <br />
          <h2 className="text-xl font-semibold">
            Liens vers d'autres sites web
          </h2>
          <p>
            Notre site web peut contenir des liens vers d'autres sites web qui
            ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes
            pas responsables de ces autres sites web ou des pratiques de
            confidentialité des tiers. Nous vous encourageons à être attentif
            lorsque vous quittez notre site web et à lire les déclarations de
            confidentialité de chaque site web susceptible de collecter des
            informations personnelles.
          </p>
          <br />
          <h2 className="text-xl font-semibold">Sécurité de l'information</h2>
          <p>
            Nous sécurisons les informations que vous fournissez sur des
            serveurs informatiques dans un environnement contrôlé et sécurisé,
            protégé contre tout accès, utilisation ou divulgation non autorisés.
            Nous conservons des garanties administratives, techniques et
            physiques raisonnables pour nous protéger contre tout accès,
            utilisation, modification et divulgation non autorisés des données
            personnelles sous son contrôle et sa garde. Toutefois, aucune
            transmission de données sur Internet ou sur un réseau sans fil ne
            peut être garantie.
          </p>
          <br />
          <h2 className="text-xl font-semibold">Divulgation légale </h2>
          <p>
            Nous divulguerons toute information que nous collectons, utilisons
            ou recevons si la loi l'exige ou l'autorise, par exemple pour nous
            conformer à une citation à comparaître ou à une procédure judiciaire
            similaire, et lorsque nous pensons de bonne foi que la divulgation
            est nécessaire pour protéger nos droits, votre sécurité ou celle
            d'autrui, enquêter sur une fraude ou répondre à une demande du
            gouvernement.
          </p>
          <br />
          <h2 className="text-xl font-semibold">Informations de contact </h2>
          <p>
            Si vous souhaitez nous contacter pour comprendre davantage la
            présente politique ou si vous souhaitez nous contacter concernant
            toute question relative aux droits individuels et à vos informations
            personnelles, vous pouvez envoyer un courriel à moncontact@fylia.fr.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default MyComponent;
