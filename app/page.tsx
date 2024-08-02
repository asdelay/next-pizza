import {Container, Title, TopBar, Filters, ProductCard } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold"/>
        
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard id={0} name="Бургер-піца" price={2} imageUrl='https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif'/>
            </div>
          </div>
        </div>
      </Container>
      
    </>
    
  );
}
