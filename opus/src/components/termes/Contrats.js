import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../singnup/logo-OPUS.png';
import './contrats.css';

export default class Contrats extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <>
        <Link to="/signup">
          <img src={logo} alt="logo OPUS"></img>
          {/* <img className="logoCommunOpus" src={logo} alt="logo OPUS"></img> */}
        </Link>
        <h2 className="titleConnection">
          Conditions générales d’utilisation et de vente
        </h2>
        <h3 className="subTitleConnection">1. Objet</h3>
        <p className="paragrphContract">
          La société OPUS édite une plateforme de coworking accessible sous
          forme d’application mobile et destinée à mettre en relation des
          loueurs de locaux professionnel avec des locataires recherchant des
          espaces de travail.
        </p>
        <p className="paragrphContract">
          Les présentes conditions générales d’utilisation ont pour objet
          d’encadrer l’accès et les modalités d’utilisation de la Plateforme.
          Nous vous invitons à en prendre attentivement connaissance.
        </p>
        <p className="paragrphContract">
          En cliquant sur « Inscription avec un email », vous reconnaissez avoir
          pris connaissance et acceptez l’intégralité des présentes conditions
          générales d’utilisation.
        </p>
        <h3 className="subTitleConnection">
          2. Inscription à la Plateforme et création de Compte
        </h3>
        <h4 className="subSubTitleConnection">
          2.1. Conditions d’inscription à la Plateforme
        </h4>
        <p className="paragrphContract">
          L’utilisation de Plateforme est réservée aux personnes morales (sous
          réserve d’une personne physique associée à l’entité morale) et aux
          personnes physiques âgées de 18 ans ou plus. Toute inscription sur la
          Plateforme par une personne mineure est strictement interdite. En
          accédant, utilisant ou vous inscrivant sur la Plateforme, vous
          déclarez et garantissez avoir 18 ans ou plus.
        </p>
        <h4 className="subSubTitleConnection">2.2. Création de Compte</h4>
        <p className="paragrphContract">
          La Plateforme permet aux Membres de publier des Annonces et de les
          consulter ainsi que d’interagir entre eux pour la réservation. Vous ne
          pouvez pas consulter les Annonces si vous n’êtes pas inscrit sur la
          Plateforme. Vous ne pouvez ni publier une Annonce ni réservée sans
          avoir, au préalable, créé un Compte et être devenu Membre.
        </p>
        <p className="paragrphContract">
          Pour créer votre Compte, vous devez remplir ou cocher l’ensemble des
          champs obligatoires figurant sur le formulaire d’inscription ;
        </p>
        <p className="paragrphContract">
          Pour vous inscrire sur la Plateforme, vous devez avoir lu et accepté
          les présentes CGU ainsi que la Politique de Confidentialité.
        </p>
        <p className="paragrphContract">
          A l’occasion de la création de votre Compte, et ce quelle que soit la
          méthode choisie pour ce faire, vous vous engagez à fournir des
          informations personnelles exactes et conformes à la réalité et à les
          mettre à jour, par l’intermédiaire de votre profil ou en en
          avertissant Opus, afin d’en garantir la pertinence et l’exactitude
          tout au long de votre relation contractuelle avec Opus.
        </p>
        <p className="paragrphContract">
          En cas d’inscription par email, vous vous engagez à garder secret le
          mot de passe choisi lors de la création de votre Compte et à ne le
          communiquer à personne. En cas de perte ou divulgation de votre mot de
          passe, vous vous engagez à en informer sans délai Opus. Vous êtes seul
          responsable de l’utilisation faite de votre Compte par un tiers, tant
          que vous n’avez pas expressément notifié Opus de la perte,
          l’utilisation frauduleuse par un tiers ou la divulgation de votre mot
          de passe à un tiers.
        </p>
        <p className="paragrphContract">
          Vous vous engagez à ne pas créer ou utiliser, sous votre propre
          identité ou celle d’un tiers, d’autres Comptes que celui initialement
          créé.
        </p>
        <h4 className="subSubTitleConnection">2.3. Vérification</h4>
        <p className="paragrphContract">
          OPUS peut, à des fins de transparence, d’amélioration de la confiance,
          ou de prévention ou détection des fraudes, mettre en place un système
          de vérification de certaines des informations que vous fournissez sur
          votre profil.
        </p>
        <p className="paragrphContract">
          Vous reconnaissez et acceptez que toute référence sur la Plateforme ou
          les Services à des informations dites « vérifiées » ou tout terme
          similaire, signifie uniquement qu’un Membre a réussi avec succès la
          procédure de vérification existante sur la Plateforme ou les Services
          afin de vous fournir davantage d’informations sur le Membre avec
          lequel vous collaborer. OPUS ne garantit ni la véracité, ni la
          fiabilité, ni la validité de l’information ayant fait l’objet de la
          procédure de vérification.
        </p>
        <h3 className="subTitleConnection">3. Utilisation des Services</h3>
        <p className="paragrphContract">
          En tant que Membre, et sous réserve que vous remplissiez les
          conditions ci-dessous, vous pouvez créer et publier des Annonces de
          Location sur la Plateforme en indiquant des informations quant aux
          informations des salles que vous comptez louer (dates/heures, lieu,
          nombre de places que peut accueillir la/les salles, options proposées,
          montant de la location).
        </p>
        <p className="paragrphContract">
          Vous êtes autorisé à publier une Annonce de Location que si vous
          remplissez l’ensemble des conditions suivantes :
        </p>
        <ol className="listContrat">
          <li>vous êtes propriétaire des locaux ;</li>
          <li>vos locaux bénéficient d’une assurance au tiers valide ;</li>
          <li>
            vous ne comptez pas publier une autre annonce pour la même location
            sur la Plateforme{' '}
          </li>
          <li>
            vous n’offrez pas plus de Places que celles disponibles dans vos
            locaux ;
          </li>
          <li>
            Vos locaux sont pourvus de sorties de secours en fonction du nombre
            de personnes pouvant être accueillies ;
          </li>
          <li>Vos locaux sont aux normes ;</li>
        </ol>
        <p className="paragrphContract">
          Vous reconnaissez être le seul responsable du contenu de l’Annonce de
          Location que vous publiez sur la Plateforme. En conséquence, vous
          déclarez et garantissez l’exactitude et la véracité de toute
          information contenue dans votre Annonce de location et vous engagez à
          respecter le service prévu selon les modalités décrites dans votre
          Annonce de location.
        </p>
        <p className="paragrphContract">
          Votre Annonce de Location sera publiée sur la Plateforme et donc
          visible des Membres et de tous visiteurs. OPUS se réserve la
          possibilité, à sa seule discrétion et sans préavis, de ne pas publier
          ou retirer, à tout moment, toute Annonce de location qui ne serait pas
          conforme aux CGU ou qu’elle considérerait comme préjudiciable à son
          image, celle de la plateforme ou celle des services.
        </p>
        <p className="paragrphContract">
          Vous êtes également informés de ce que dans le cas où vous vous
          présenteriez en tant que consommateur en utilisant la plateforme alors
          que vous agissez en réalité à titre professionnel vous vous exposez
          aux sanctions prévues à l’article L.132-2 du Code de la consommation.
        </p>
      </>
    );
  }
}
