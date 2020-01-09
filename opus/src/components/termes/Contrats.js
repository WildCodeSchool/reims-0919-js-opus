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
        <img src={logo} alt="logo OPUS"></img>
        <Link to="/signup">
          <div className="backHome">Retour</div>
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
        <h4 className="subSubTitleConnection">
          3.1. Publication des Annonces de Location de salle
        </h4>
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
        <h4 className="subSubTitleConnection">3.2. Réservation d’une Place</h4>
        <p className="paragrphContract">
          Opus a mis en place un système de réservation en ligne (la «
          Réservation ») sur la plateforme.
        </p>
        <p className="paragrphContract">
          Les modalités de réservation dépendent de la nature du local.
        </p>
        <p className="paragrphContract">
          Lorsqu’un utilisateur est intéressé par une Annonce de location, il
          peut effectuer une demande de Réservation en ligne. Cette demande de
          Réservation est acceptée manuellement par le propriétaire. Au moment
          de la Réservation, l’utilisateur procède au paiement en ligne du
          montant de la Participation aux Frais et des Frais de Service
          afférents, le cas échéant. Après vérification du paiement par Opus et
          validation de la demande de Réservation par le propriétaire, le cas
          échéant, l’utilisateur reçoit une confirmation de réservation (la «
          Confirmation de Réservation »).
        </p>
        <p className="paragrphContract">
          Si vous êtes un loueur, vous êtes tenu de répondre à toute demande de
          Réservation dans un certain délai. A défaut, la demande de Réservation
          expire automatiquement et le Passager est remboursé de l’intégralité
          des sommes versées au moment de la demande de Réservation, le cas
          échéant.
        </p>
        <p className="paragrphContract">
          A compter de la Confirmation de la Réservation, Opus vous transmet les
          coordonnées du locataire. Vous êtes désormais seuls responsables de
          l’exécution du contrat vous liant à l’autre Membre.
        </p>
        <h4 className="subSubTitleConnection">3.3. Système d’avis</h4>
        <p className="paragrphContract">
          Opus vous encourage à laisser un avis sur un locataire ou un loueur
          avec lequel vous avez partagé un contrat. En revanche, vous n’êtes pas
          autorisé à laisser un avis sur un autre locataire/loueur avec lequel
          vous n’étiez pas censé traiter.
        </p>
        <p className="paragrphContract">
          Votre avis, ainsi que celui laissé par un autre Membre à propos de la
          même annonce, sont le cas échéant, visibles et publiés sur la
          Plateforme après le plus court des délais, soit immédiatement après
          que vous ayez laissé un avis.
        </p>

        <h3 className="subTitleConnection">4. Conditions Financières</h3>
        <p className="paragrphContract">
          Les prix sont donnés en euros toutes taxes comprises.
        </p>
        <h4 className="subSubTitleConnection">4.1. Prix du local</h4>
        <p className="paragrphContract">
          Dans le cadre d’une réservation, le montant demandé est déterminé par
          vous, en tant que loueur, sous votre seule responsabilité. Par
          conséquent, vous vous engagez à limiter le prix du local que vous
          demandez à vos locataires aux prix réel de location d’une salle
          actuel. A défaut, vous supporterez seul les risques de requalification
          de l’opération effectuée par l’intermédiaire de la Plateforme.
        </p>
        <h4 className="subSubTitleConnection">4.2. Frais de Service</h4>
        <p className="paragrphContract">
          OPUS peut prélever, en contrepartie de l’utilisation de la Plateforme,
          des frais de service à ses utilisateurs. L’utilisateur sera informé
          avant toute application de Frais de Service le cas échéant.
        </p>
        <p className="paragrphContract">
          Les modalités de calcul des Frais de Service en vigueur sont fournies
          à titre informatif uniquement et n’ont pas de valeur contractuelle.
          OPUS se réserve le droit de modifier à tout moment les modalités de
          calcul des Frais de Service.
        </p>
        <h4 className="subSubTitleConnection">4.3. Versements et Conditions</h4>
        <p className="paragrphContract">
          Vous reconnaissez et acceptez que OPUS peut, à son entière discrétion,
          arrondir au chiffre inférieur ou supérieur les Frais de Service et
          Prix des locaux.
        </p>
        <p className="paragrphContract">
          A la suite d’une location, les membres disposent d’un délai de 24
          heures pour présenter une réclamation à Opus. En l’absence de
          contestation de leur part dans cette période, Opus considère la
          confirmation de la location comme acquise.
        </p>
        <p className="paragrphContract">
          A compter de cette confirmation expresse ou tacite, vous disposez, en
          tant que loueur, d’un crédit exigible sur votre Compte. Ce crédit
          correspond au montant total payé par le locataire au moment de la
          confirmation de la Réservation diminué des Frais de Service,
          c’est-à-dire au montant de la Participation aux Frais payée par le
          locataire.
        </p>
        <p className="paragrphContract">
          Lorsque la location est confirmée par le locataire, vous avez la
          possibilité, en tant que loueur, de donner instructions à Opus de vous
          verser l’argent sur votre compte bancaire (en renseignant sur votre
          Compte, au préalable, vos coordonnées bancaires).
        </p>
        <p className="paragrphContract">
          L’ordre de virement à votre nom sera transmis le premier jour ouvré
          suivant votre demande ou à défaut de demande de votre part, le premier
          jour ouvré suivant la mise à disposition sur votre profil des sommes
          concernées (sous réserve que Opus dispose de vos informations
          bancaires).
        </p>
        <p className="paragrphContract">
          A l’issue du délai de prescription de 5 ans applicable, toute somme
          non réclamée à Opus sera réputée appartenir à Opus.
        </p>
        <h3 className="subTitleConnection">5. Politique d’annulation</h3>
        <h4 className="subSubTitleConnection">
          5.1. Modalités de remboursement en cas d’annulation
        </h4>
        <p className="paragrphContract">
          – En cas d’annulation imputable au locataire :
        </p>
        <ul className="listContrat">
          <li>
            Si le locataire annule plus de 24 heures avant l’heure prévue pour
            la location telle que mentionnée dans l’Annonce de location du bien,
            le locataire est remboursé du montant du Prix du local. Les Frais de
            Service demeurent acquis à OPUS et le Loueur ne reçoit aucune somme
            de quelque nature que ce soit ;
          </li>
          <li>
            Si le locataire annule moins de 24 heures ou 24 heures avant l’heure
            prévue pour la réservation, telle que mentionnée dans l’Annonce de
            location et plus de trente minutes après la Confirmation de
            Réservation, le Passager est remboursé à hauteur de la moitié du
            Prix du local versée lors de la Réservation, les Frais de Service
            demeurent acquis à OPUS et le loueur reçoit 50% du Prix du local ;
          </li>
          <li>
            Si le loueur annule moins de 24 heures ou 24 heures avant l’heure
            prévue pour le départ, telle que mentionnée dans l’Annonce de
            location et trente minutes ou moins après la Confirmation de
            Réservation, le locataire est remboursé de l’intégralité du Prix du
            local. Les Frais de Service demeurent acquis à OPUS et le Loueur ne
            reçoit aucune somme de quelque nature que ce soit ;
          </li>
          <li>
            Si le locataire annule après l’heure prévue pour la location, telle
            que mentionnée dans l’Annonce, ou s’il ne se présente pas au lieu de
            rendez-vous au plus tard dans un délai de 15 minutes à compter de
            l’heure convenue, aucun remboursement n’est effectué. Le loueur est
            dédommagé à hauteur de la totalité du Prix du local et les Frais de
            Services sont conservés par OPUS.
          </li>
        </ul>
        <p className="paragrphContract">
          OPUS apprécie à sa seule discrétion, sur la base des éléments à sa
          disposition, la légitimité des demandes de remboursement qu’elle
          reçoit.
        </p>
        <h4 className="subSubTitleConnection">5.2. Droit de rétraction</h4>
        <p className="paragrphContract">
          En acceptant les présentes CGU, vous acceptez expressément que le
          Contrat entre vous et OPUS consistant en la mise en relation avec un
          autre Membre soit exécuté avant l’expiration du délai de rétractation
          dès la Confirmation de Réservation et renoncez expressément à votre
          droit de rétraction, conformément aux dispositions de l’article
          L.221-28 du Code de la consommation.
        </p>
        <h3 className="subTitleConnection">6. Engagements des Loueurs</h3>
        <p className="paragrphContract">
          En outre, lorsque vous utilisez la Plateforme en tant que loueur, vous
          vous engagez à :
        </p>
        <ul className="listContrat">
          <li>respecter l’ensemble du règlement de l’application</li>
          <li>
            vous assurer que votre locataire dispose de tout le matériel
            mentionné dans l’annonce
          </li>
        </ul>
        <h4 className="subSubTitleConnection">
          6.1. Engagements des locataires
        </h4>
        <p className="paragrphContract">
          Lorsque vous utilisez la Plateforme en tant que locataire dans le
          cadre d’une location de salle, vous vous engagez à :
        </p>
        <ul className="listContrat">
          <li>respectez les horaires du contrat.</li>
          <li>respectez le matériel et les locaux. </li>
          <li>régler la prestation.</li>
          <li>respecter le contrat de location.</li>
        </ul>
        <h3 className="subTitleConnection">
          7. Suspension de comptes, limitation d’accès et résiliation
        </h3>
        <p className="paragrphContract">
          Vous avez la possibilité de mettre fin à votre relation contractuelle
          avec OPUS à tout moment, sans frais et sans motif. Pour cela, il vous
          suffit de vous rendre dans l’onglet « Suppression du compte » de votre
          page Profil.
        </p>
        <p className="paragrphContract">
          En cas de violation de votre part des présentes CGU, notamment de vos
          obligations en tant que Membre, OPUS se réserve la possibilité de :
        </p>
        <ul className="listContrat">
          <li>
            résilier, immédiatement et sans préavis, les présentes CGU ; et/ou
          </li>
          <li>
            empêcher la publication ou supprimer tout avis, Annonce, messages,
            contenus, demande de Réservation, ou tout contenu publié par vous
            sur la Plateforme ; et/ou
          </li>
          <li>
            limiter votre accès et votre utilisation de la Plateforme ; et/ou
          </li>
          <li>suspendre de façon temporaire ou permanente votre Compte.</li>
        </ul>
        <p className="paragrphContract">
          Lorsque cela est nécessaire, vous serez notifié de la mise en place
          d’une telle mesure afin de vous permettre de donner des explications à
          Opus. Opus décidera, à sa seule discrétion, de lever les mesures mises
          en place ou non.
        </p>

        <h3 className="subTitleConnection">8. Données personnelles</h3>
        <p className="paragrphContract">
          Dans le cadre de votre utilisation de la Plateforme, Opus est amenée à
          collecter et traiter certaines de vos données personnelles. En
          utilisant la Plateforme et vous inscrivant en tant que Membre, vous
          reconnaissez et acceptez le traitement de vos données personnelles par
          Opus conformément à la loi applicable et aux stipulations de la
          Politique de Confidentialité.
        </p>
        <h3 className="subTitleConnection">
          9. Contenu publié par vous sur la Plateforme
        </h3>
        <p className="paragrphContract">
          Afin de permettre la fourniture des Services et conformément à la
          finalité de la Plateforme, vous concédez à Opus une licence non
          exclusive d’utilisation des contenus et données que vous fournissez
          dans le cadre de votre utilisation des services. Afin de permettre à
          Opus la diffusion par réseau numérique et selon tout protocole de
          communication, (notamment Internet et réseau mobile), ainsi que la
          mise à disposition au public du contenu de la Plateforme, vous
          autorisez Opus, pour le monde entier et pour toute la durée de votre
          relation contractuelle avec Opus, à reproduire, représenter, adapter
          et traduire votre Contenu Membre de la façon suivante :
        </p>
        <ul className="listContrat">
          <li>
            vous autorisez Opus à reproduire tout ou partie de votre Contenu
            Membre sur tout support d’enregistrement numérique, connu ou inconnu
            à ce jour, et notamment sur tout serveur, disque dur, carte mémoire,
            ou tout autre support équivalent, en tout format et par tout procédé
            connu et inconnu à ce jour, dans la mesure nécessaire à toute
            opération de stockage, sauvegarde, transmission ou téléchargement
            lié au fonctionnement de la Plateforme et à la fourniture du Service
            ;
          </li>
          <li>
            vous autorisez Opus à adapter et traduire votre Contenu Membre,
            ainsi qu’à reproduire ces adaptations sur tout support numérique,
            actuel ou futur, stipulé au (i) ci-dessus, dans le but de fournir
            les Services, notamment en différentes langues. Ce droit comprend
            notamment la faculté de réaliser, dans le respect de votre droit
            moral, des modifications de la mise en forme de votre Contenu Membre
            aux fins de respecter la charte graphique de la Plateforme et/ou de
            le rendre techniquement compatible en vue de sa publication via la
            Plateforme.
          </li>
        </ul>
        <h3 className="subTitleConnection">10. Modification des CGU</h3>
        <p className="paragrphContract">
          Les présentes CGU expriment l’intégralité de l’accord entre vous et
          OPUS relative à votre utilisation des Services. Tout autre document,
          notamment toute mention sur la Plateforme (FAQ, Blog, etc.), n’a
          qu’une valeur informative.
        </p>
        <p className="paragrphContract">
          OPUS pourra être amenée à modifier les présentes Conditions Générales
          d’Utilisation afin de s’adapter à son environnement technologique et
          commercial et afin de se conformer à la réglementation en vigueur.
          Toute modification des présentes CGU sera publiée sur la Plateforme
          avec une mention de la date de mise à jour et vous sera notifiée par
          Opus avant son entrée en vigueur.
        </p>
        <h3 className="subTitleConnection">11. Mentions légales</h3>
        <p className="paragrphContract">
          La Plateforme dénommée OPUS est éditée par OPUS SA dont le siège
          social est situé au 59, rue Pierre Taittinger – 51 100 Reims (France).
          Le capital social de la société est de “”. Vous pouvez nous contacter
          par email : contact@opus.com . OPUS SA est enregistrée sous le numéro
          SIREN 123456789 au RCS de Reims et sous le numéro NIF 0 0000 0000
          0000.
        </p>
      </>
    );
  }
}
