import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "../../components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "@/components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import Link from "next/link";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  const volei = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "volei",
      },
    },
  });

  const futebol = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "futebol",
      },
    },
  });
  return (
    <div >
      <div className=""><PromoBanner className="m-0 p-0 " src="/Banner-Ofertas.png" alt="Até 55% de desconto só esse mês"/></div>
      <div className="mt-8 px-5 pb-5">
        <Categories  />
      </div>
      <div className="lg:px-32">
        <SectionTitle><Link href="/deals">Ofertas</Link></SectionTitle>
        <ProductList products={deals} />
      </div>

      <div><PromoBanner src="/banner-home-01.png" alt="Até 55% de desconto só esse mês" /></div>

      
      <div className="lg:px-32">
        <SectionTitle><Link href="/category/volei">Voleibol</Link></SectionTitle>
        <ProductList products={volei} />
      </div>
      
      <div><PromoBanner src="/banner-home-01.png" alt="Até 55% de desconto só esse mês" /></div>

      
      <div className="lg:px-32" >
        <SectionTitle><Link href="/category/futebol">Futebol</Link></SectionTitle>
        <ProductList products={futebol} />
      </div>
      
    </div>
    
  );
}
