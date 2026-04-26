import LegalLayout, { Section } from "../components/legal/LegalLayout";
import { INFO } from "../data/menu";

export default function Legal() {
  return (
    <LegalLayout
      num="01"
      title="Mentions légales."
      lead="Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (LCEN), il est porté à la connaissance des utilisateurs du site ITK FOOD les présentes mentions légales."
    >
      <Section title="1. Éditeur du site">
        <p>
          Le site <strong>itk-food.fr</strong> est édité par <strong>ITK FOOD</strong>,
          entreprise individuelle de restauration rapide.
        </p>
        <p>Adresse du siège : {INFO.address}.</p>
        <p>Téléphone : {INFO.phone}.</p>
        <p>SIRET : 999 999 999 00010 (numéro fictif – démo).</p>
        <p>RCS : Thionville – fictif.</p>
        <p>N° TVA intracommunautaire : FR00 999999999 (fictif).</p>
        <p>Directeur de la publication : M. ITK Food, gérant.</p>
      </Section>

      <Section title="2. Hébergement">
        <p>
          Le site est hébergé par <strong>VyntraWeb</strong> – agence de
          conception et d&apos;hébergement web. Contact via le formulaire dédié de
          l&apos;hébergeur.
        </p>
      </Section>

      <Section title="3. Conception &amp; développement">
        <p>
          Conception graphique et développement réalisés à des fins de démonstration.
          Tous droits réservés à ITK FOOD pour le contenu éditorial, photographique
          et la marque.
        </p>
      </Section>

      <Section title="4. Propriété intellectuelle">
        <p>
          L&apos;ensemble du site (charte graphique, textes, logos, photographies,
          marques, mises en page) est protégé par le Code de la propriété
          intellectuelle. Toute reproduction, représentation, modification,
          publication, transmission, dénaturation, totale ou partielle est strictement
          interdite sans autorisation écrite préalable d&apos;ITK FOOD.
        </p>
        <p>
          La marque <strong>ITK FOOD</strong> ainsi que le logo associé sont la
          propriété exclusive d&apos;ITK FOOD.
        </p>
      </Section>

      <Section title="5. Crédits photographiques">
        <p>
          Photographies des produits, de la boutique et de l&apos;équipe :
          © ITK FOOD. Quelques visuels d&apos;ambiance peuvent être issus de banques
          d&apos;images libres de droits (Unsplash, Pexels) à titre illustratif.
        </p>
      </Section>

      <Section title="6. Responsabilité">
        <p>
          ITK FOOD met tout en œuvre pour fournir des informations fiables et tenues
          à jour. Toutefois, des erreurs, omissions ou différences entre les visuels
          et les produits réels peuvent survenir. Les prix affichés sont indicatifs
          et susceptibles d&apos;évoluer. Seuls les prix indiqués en boutique font foi.
        </p>
      </Section>

      <Section title="7. Droit applicable">
        <p>
          Les présentes mentions légales sont soumises au droit français. En cas de
          litige, les tribunaux français seront seuls compétents.
        </p>
      </Section>

      <Section title="8. Contact">
        <p>
          Pour toute question relative au site ou à son contenu, vous pouvez nous
          contacter au {INFO.phone} ou directement en boutique : {INFO.address}.
        </p>
      </Section>
    </LegalLayout>
  );
}
