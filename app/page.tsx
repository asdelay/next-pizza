import {Container, Title, TopBar, Filters } from "@/components/shared";

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
              Список товарів
            </div>
          </div>
        </div>
      </Container>
      
    </>
    
  );
}
