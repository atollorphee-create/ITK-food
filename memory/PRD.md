# ITK FOOD — Site démo

## Problem Statement
Site vitrine moderne, rapide et orienté conversion pour ITK FOOD (snack à Florange).
Démo professionnelle pour montrer au client comment améliorer son image et ses commandes.

## Stack
- Frontend: React 19 + Tailwind 3 + Lucide icons
- Backend: FastAPI (template, non utilisé pour cette démo vitrine)
- Aucune base de données nécessaire

## Identité visuelle
- Fond noir profond `#050505`
- Cards `#111111`
- Texte blanc `#FFFFFF`
- Accent orange ITK `#FF7A00`
- Glow orange, grain léger, dot grid
- Typo: Anton + Archivo Black (display) / Manrope (body)

## Sections implémentées
1. Navbar sticky avec phone + CTA Commander (mobile drawer)
2. Hero plein écran : "ITK FOOD" + tagline "Le snack du peuple, fait par le peuple."
3. Marquee défilant (smash, tacos, poutine…)
4. Produits phares (5 cartes hover : Smash, Tacos, Poutine, Sandwichs, Box ITK)
5. Box ITK 10€ — section deal avec liste numérotée + tag prix flottant
6. Menu interactif avec 6 onglets (Burgers, Tacos, Sandwichs, Canadiennes, Petites faims, Desserts)
7. Section commande : 4 tuiles (Appeler, Itinéraire, Snapchat, Instagram)
8. Section infos : adresse, téléphone, horaires (cards), services badges
9. Footer avec signature géante "ITK FOOD"
10. Modal commande globale (déclenchée par tous les CTA "Commander")

## UX
- Animations reveal au scroll (IntersectionObserver)
- Hover micro-animations sur cartes produits (zoom image, lift, glow border)
- Pulse dot, marquee infini, modal pop-in
- Scroll smooth + responsive mobile-first

## Action items / Backlog
- [P1] Remplacer images Unsplash par photos réelles ITK FOOD (assets à fournir par client)
- [P1] Brancher liens Snap/Insta réels (placeholders `#` actuellement)
- [P2] Carte officielle de prix (utiliser prix démo réalistes pour l'instant)
- [P2] Ajouter Google Maps embed dans la section Infos
- [P3] Ajout commande en ligne (back-end + paiement Stripe)
- [P3] Programme fidélité / coupons
- [P3] Multilingue (FR/EN/AR)

## Status
- Démo vitrine complète et déployable
- Tous CTA fonctionnels (tel:, maps, modal)
- Date: 2026-04
