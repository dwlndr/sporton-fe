import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import { getProductById } from "@/app/services/product.service";
import { getImageURL } from "@/app/lib/api";
import priceformatter from "@/app/utils/price-formatter";

export type TPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetail = async ({ params }: TPageProps) => {
  const {id} = await params;

  const product = await getProductById(id);

  return (
    <main className="container mx-auto py-25 flex gap-12">
      <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
        <Image
          src={getImageURL(product.imageUrl)}
          alt={product.name}
          className="aspect-square w-full object-contain"
          width={550}
          height={550}
        />
      </div>
      <div className="w-full py-7">
        <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
          {product.category.name}
        </div>
        <p className="leading-loose text-black/75 mb-7">
          {product.description}
        </p>
        <div className="text-primary text-[32px] font-semibold mb-12">
            {priceformatter(product.price)}
        </div>
        <ProductActions product={product} stock={product.stock} />
      </div>
    </main>
  );
};

export default ProductDetail;
