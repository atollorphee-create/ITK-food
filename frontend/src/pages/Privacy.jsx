import LegalLayout, { Section } from "../components/legal/LegalLayout";
import { INFO } from "../data/menu";

export default function Privacy() {
  return (
    <LegalLayout
      num="02"
      title={`Politique de\nconfidentialité.`}
      lead="ITK FOOD attache une importance particulière au respect de votre vie privée. La présente politique décrit comment nous collectons, utilisons et protégeons vos données personnelles, conformément au RGPD et à la loi Informatique et Libertés."
    >
      <Section title="1. Responsable du traitement">
        <p>
          Le responsable du traitement des données collectées sur le site
          <strong> itk-food.fr</strong> est ITK FOOD, dont le siège est situé au
          {" "}{INFO.address}.
        </p>
        <p>Contact : {INFO.phone}.</p>
      </Section>

      <Section title="2. Données collectées">
        <p>
          Le site est principalement vitrine. Aucune création de compte ni
          paiement en ligne n&apos;est requis. Les seules données susceptibles
          d&apos;être collectées sont :
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Données de navigation anonymes (statistiques, performance).</li>
          <li>Données fournies volontairement via téléphone, Snapchat ou Instagram.</li>
          <li>Cookies techniques nécessaires au fonctionnement du site.</li>
        </ul>
      </Section>

      <Section title="3. Finalités du traitement">
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Gestion des commandes par téléphone et en boutique.</li>
          <li>Mesure d&apos;audience anonyme du site (statistiques).</li>
          <li>Réponses à vos demandes via les réseaux sociaux.</li>
        </ul>
      </Section>

      <Section title="4. Durée de conservation">
        <p>
          Les données strictement nécessaires sont conservées pendant la durée
          requise pour répondre à vos demandes ou conformément aux obligations
          légales (3 ans maximum pour les données commerciales, 13 mois pour les
          cookies de mesure d&apos;audience).
        </p>
      </Section>

      <Section title="5. Cookies">
        <p>
          Le site utilise uniquement des cookies techniques nécessaires à son
          fonctionnement. Aucun cookie publicitaire ou de traçage marketing n&apos;est
          déposé sans votre consentement explicite. Vous pouvez à tout moment
          paramétrer votre navigateur pour bloquer les cookies.
        </p>
      </Section>

      <Section title="6. Destinataires">
        <p>
          Vos données ne sont jamais vendues ni cédées. Elles peuvent être traitées
          par notre hébergeur technique pour des raisons strictement opérationnelles.
        </p>
      </Section>

      <Section title="7. Vos droits">
        <p>
          Conformément au RGPD, vous disposez des droits suivants : accès,
          rectification, effacement, opposition, limitation, portabilité.
        </p>
        <p>
          Pour exercer ces droits, contactez-nous au {INFO.phone} ou en boutique.
          Vous pouvez également déposer une réclamation auprès de la CNIL
          (www.cnil.fr).
        </p>
      </Section>

      <Section title="8. Sécurité">
        <p>
          ITK FOOD met en œuvre des mesures techniques et organisationnelles
          adaptées pour protéger vos données contre toute perte, accès non autorisé
          ou altération.
        </p>
      </Section>

      <Section title="9. Modifications">
        <p>
          La présente politique peut être mise à jour à tout moment. La date de
          dernière modification est indiquée en bas de page.
        </p>
      </Section>
    </LegalLayout>
  );
}
