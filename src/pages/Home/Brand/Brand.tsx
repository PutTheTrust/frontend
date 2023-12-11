import { FCTitle } from "../../../components";
import brandItems from "../../../constants/trustedBrands";

import "./Brand.css";
const Brand = () => {
  return (
    <section className="brand max-width">
      <FCTitle text="You’ll be in good company" />
      <h2>Trusted by leading brands</h2>

      <div className="brand__items">
        {brandItems.map((brand) => (
          <div className="brand__items-item" key={brand.id}>
            <img src={brand.image} alt={brand.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
