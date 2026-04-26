import LegalLayout, { Section } from "../components/legal/LegalLayout";
import { INFO } from "../data/menu";

export default function Terms() {
  return (
    <LegalLayout
      num="03"
      title="Conditions générales de vente."
      lead="Les présentes Conditions Générales de Vente (CGV) régissent les ventes de produits réalisées par ITK FOOD, en boutique, à emporter ou en livraison. Elles sont applicables à toute commande passée auprès d'ITK FOOD."
    >
      <Section title="1. Objet">
        <p>
          Les présentes CGV ont pour objet de définir les modalités de vente des
          produits proposés par ITK FOOD, snack situé au {INFO.address}.
        </p>
      </Section>

      <Section title="2. Produits">
        <p>
          ITK FOOD propose une carte de restauration rapide composée de burgers
          smashés, sandwichs, tacos, poutines, et accompagnements. Les produits
          sont préparés à la commande dans nos cuisines.
        </p>
        <p>
          Les photographies illustrant les produits ont une valeur indicative et
          n&apos;engagent pas contractuellement ITK FOOD.
        </p>
      </Section>

      <Section title="3. Commandes">
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Sur place ou à emporter : directement en boutique.</li>
          <li>Par téléphone : au {INFO.phone}.</li>
          <li>Livraison : via les plateformes partenaires (selon disponibilité).</li>
        </ul>
        <p>
          Toute commande passée vaut acceptation pleine et entière des présentes CGV.
        </p>
      </Section>

      <Section title="4. Prix">
        <p>
          Les prix affichés en boutique font foi. Ils sont exprimés en euros, toutes
          taxes comprises (TTC). Les prix indiqués sur le site sont indicatifs et
          peuvent évoluer.
        </p>
        <p>
          ITK FOOD se réserve le droit de modifier ses prix à tout moment, notamment
          en cas de variation des coûts d&apos;approvisionnement.
        </p>
      </Section>

      <Section title="5. Paiement">
        <p>
          Le paiement s&apos;effectue à la commande, en boutique, par les moyens
          suivants : espèces, carte bancaire, tickets restaurant (sur présentation
          d&apos;un titre valide).
        </p>
        <p>
          Aucun paiement n&apos;est traité directement via le site internet, qui est
          uniquement vitrine.
        </p>
      </Section>

      <Section title="6. Livraison">
        <p>
          La livraison à domicile est assurée par nos partenaires tiers
          (plateformes de livraison). Les délais et frais de livraison sont fixés
          par ces partenaires et ne relèvent pas de la responsabilité d&apos;ITK FOOD.
        </p>
      </Section>

      <Section title="7. Allergènes &amp; informations nutritionnelles">
        <p>
          Conformément à la réglementation INCO, les informations relatives aux
          allergènes sont disponibles sur demande en boutique. Nous nous efforçons
          de séparer les zones de préparation, mais des traces d&apos;allergènes
          peuvent subsister. En cas d&apos;allergie, signalez-le impérativement à
          l&apos;équipe avant de commander.
        </p>
      </Section>

      <Section title="8. Droit de rétractation">
        <p>
          Conformément à l&apos;article L221-28 du Code de la consommation, le
          droit de rétractation ne s&apos;applique pas aux denrées alimentaires
          préparées à la commande, susceptibles de se détériorer rapidement.
        </p>
      </Section>

      <Section title="9. Réclamations">
        <p>
          Toute réclamation peut être formulée directement en boutique ou par
          téléphone au {INFO.phone}. ITK FOOD s&apos;engage à apporter une réponse
          rapide et constructive à chaque demande.
        </p>
      </Section>

      <Section title="10. Force majeure">
        <p>
          ITK FOOD ne saurait être tenue responsable d&apos;une non-exécution
          résultant d&apos;un cas de force majeure (rupture d&apos;approvisionnement,
          panne, événement extérieur).
        </p>
      </Section>

      <Section title="11. Droit applicable">
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, et
          après échec d&apos;une résolution amiable, les tribunaux français seront
          seuls compétents.
        </p>
      </Section>
    </LegalLayout>
  );
}
