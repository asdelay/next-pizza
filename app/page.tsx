import {Container, Title, TopBar, Filters, ProductCard, ProductsGroupList } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold"/>
        
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Goods */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                title="Піци" 
                items={[
                  {id: 0, name: "Бургер-піца", price: 2, items: [{price: 2}],  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif' },
                  {id: 1, name: "Мʼясна з аджикою", price: 200, items: [{price: 2}], imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif' },
                  {id: 2, name: "Бургер-піца", price: 2, items: [{price: 2}],  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif' },
                  {id: 3, name: "Мʼясна з аджикою", price: 200, items: [{price: 2}], imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif' },
                ]} 
                categoryId={0}
              />
              <ProductsGroupList 
                title="Комбо" 
                items={[
                  {id: 12, name: "Бургер-піца", price: 2, items: [{price: 2}],  imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif' },
                  {id: 13, name: "Мʼясна з аджикою", price: 200, items: [{price: 2}], imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif' },
                ]} 
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
      
    </>
    
  );
}
