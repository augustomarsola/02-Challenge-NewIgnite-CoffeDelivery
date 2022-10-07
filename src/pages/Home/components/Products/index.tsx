const coffees = [
  {
    id: '01',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: ['tradicional'],
    imgUrl: '/coffee/Image-1.png',
  },
  {
    id: '02',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: ['tradicional'],
    imgUrl: '/coffee/Image-2.png',
  },
  {
    id: '03',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: ['tradicional'],
    imgUrl: '/coffee/Image-3.png',
  },
  {
    id: '04',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: ['tradicional', 'gelado'],
    imgUrl: '/coffee/Image-4.png',
  },
  {
    id: '05',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    imgUrl: '/coffee/Image-5.png',
  },
  {
    id: '06',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    imgUrl: '/coffee/Image-6.png',
  },
  {
    id: '07',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    imgUrl: '/coffee/Image-7.png',
  },
  {
    id: '08',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: ['tradicional', 'Com leite'],
    imgUrl: '/coffee/Image-8.png',
  },
  {
    id: '09',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: ['tradicional', 'com leite'],
    imgUrl: '/coffee/Image-9.png',
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: ['especial', 'com leite'],
    imgUrl: '/coffee/Image-10.png',
  },
  {
    id: '11',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: ['Especial', 'alcoólico', 'gelado'],
    imgUrl: '/coffee/Image-11.png',
  },
  {
    id: '12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: ['especial'],
    imgUrl: '/coffee/Image-12.png',
  },
  {
    id: '13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: ['especial'],
    imgUrl: '/coffee/Image-13.png',
  },
  {
    id: '14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: ['especial', 'alcoólico'],
    imgUrl: '/coffee/Image-14.png',
  },
]

export function Products() {
  return (
    <main>
      <h2>Nossos cafés</h2>
      <ul>
        {coffees.map((coffee) => (
          <li key={coffee.id}>
            <img src={coffee.imgUrl} alt={coffee.description} />
            {coffee.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
            <h4>{coffee.name}</h4>
            <p>{coffee.description}</p>
            <div>
              <span>{coffee.price}</span>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
                <button>cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
