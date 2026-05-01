import AddButton from "./cart/AddButton";

const BOX_IMG = "https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/nkt16xwx_ChatGPT%20Image%202%20mai%202026%2C%2001_06_20.png";

const BOX_PRODUCT = {
  id: "box-itk",
  name: "Box ITK",
  price: "10€",
  desc: "2 mini cheese + frites cheddar oignons + tenders.",
};

export default function BoxDeal() {
  return (
    <section
      id="box"
      data-testid="box-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <div className="relative overflow-hidden rounded-[36px] border border-[#1a1a1a] bg-black transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_rgba(255,122,0,0.45)]">
        <img
          src={BOX_IMG}
          alt="Box ITK 10€ — 2 mini cheese, frites cheddar oignons frits, 2 tenders"
          className="w-full h-auto block"
          loading="lazy"
        />
        <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8">
          <AddButton
            product={BOX_PRODUCT}
            catId="divers"
            label="Ajouter la BOX"
            className="text-sm px-5 py-3 glow-soft"
          />
        </div>
      </div>
    </section>
  );
}
