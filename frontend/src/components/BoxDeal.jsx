export default function BoxDeal({ onOrder }) {
  return (
    <section
      id="box"
      data-testid="box-section"
      className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28"
    >
      <button
        onClick={onOrder}
        aria-label="Commander la Box ITK"
        data-testid="box-order-btn"
        className="block w-full group"
      >
        <div className="relative overflow-hidden rounded-[36px] border border-[#1a1a1a] bg-black transition-shadow duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(255,122,0,0.45)]">
          <img
            src="https://customer-assets.emergentagent.com/job_itk-showcase/artifacts/z6m7zzok_box%2010e.png"
            alt="Box ITK 10€ — 2 mini cheese, frites cheddar oignons frits, tenders ou wings"
            className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </button>
    </section>
  );
}
