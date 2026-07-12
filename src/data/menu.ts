// Menú completo de Casa Mezcal (transcrito del menú físico).
// Fuente única: la usa el landing (destacados) y la página /menu (completo).
// Para editar: cambia nombre/precio/desc aquí. Descripciones bilingües (en/es).

export interface MenuItem {
  name: string;
  price?: number; // omitir si el precio va en priceLabel o no aplica
  priceLabel?: string; // para rangos/tamaños, ej. "S 9.99 · M 13.99 · Jumbo 19.99"
  desc?: { en: string; es: string };
}

export interface MenuSection {
  id: string;
  name: { en: string; es: string };
  note?: { en: string; es: string }; // ej. "Served with rice and beans"
  items: MenuItem[];
}

export interface MenuGroup {
  id: string;
  name: { en: string; es: string };
  sections: MenuSection[];
}

const t = (en: string, es: string) => ({ en, es });

export const menu: MenuGroup[] = [
  {
    id: 'lunch',
    name: t('Lunch', 'Comida'),
    sections: [
      {
        id: 'lunch-burritos',
        name: t('Burritos', 'Burritos'),
        note: t('Served with rice and beans. Made with flour tortilla.', 'Servidos con arroz y frijoles. En tortilla de harina.'),
        items: [
          { name: 'Verde Burrito', price: 13.99, desc: t('Pork chunk with green sauce.', 'Trozos de cerdo en salsa verde.') },
          { name: 'Chipotle Burrito', price: 13.99, desc: t('Chicken with chipotle cream sauce.', 'Pollo en salsa cremosa de chipotle.') },
          { name: 'Seafood Burrito', price: 14.99, desc: t('Shrimp with real crab meat cooked in butter and chopped salsa.', 'Camarón con carne de cangrejo cocida en mantequilla y salsa picada.') },
          { name: 'Al Pastor Burrito', price: 14.99, desc: t('Marinated steak.', 'Carne adobada.') },
          { name: 'Asada Burrito', price: 14.99, desc: t('Charcoal slices of steak.', 'Rebanadas de res al carbón.') },
          { name: 'Carnitas Burrito', price: 14.99, desc: t('Shredded pork.', 'Cerdo deshebrado.') },
          { name: 'Fajita Burrito', price: 14.99, desc: t('Chicken or steak with peppers and onions.', 'Pollo o res con pimientos y cebolla.') },
          { name: 'Burrito', price: 13.99, desc: t('Chicken, ground beef or shredded beef.', 'Pollo, res molida o res deshebrada.') },
          { name: 'Bean and Cheese Burrito', price: 13.99 },
          { name: 'Seafood Chimichanga', price: 14.99, desc: t('Shrimp with real crab meat cooked with butter. Topped with lettuce, tomato, sour cream and guacamole.', 'Camarón con carne de cangrejo en mantequilla. Con lechuga, tomate, crema y guacamole.') },
          { name: 'Chimichanga', price: 14.99, desc: t('Choice of chicken, ground beef or shredded beef. Topped with lettuce, tomato, sour cream and guacamole.', 'Pollo, res molida o deshebrada. Con lechuga, tomate, crema y guacamole.') },
          { name: 'Flautas (3)', price: 13.99, desc: t('Choice of chicken or shredded beef.', 'Pollo o res deshebrada.') },
          { name: 'Sopes (2)', price: 14.99, desc: t('Choice of carne asada, pollo asado or al pastor. Topped with lettuce, sour cream, cheese and salsa.', 'Carne asada, pollo asado o al pastor. Con lechuga, crema, queso y salsa.') },
          { name: 'Chilaquiles Verdes', price: 14.99, desc: t('Two eggs any style, beans, sour cream, queso fresco and onions. Add carne asada for $5.99 more.', 'Dos huevos al gusto, frijoles, crema, queso fresco y cebolla. Carne asada +$5.99.') },
        ],
      },
      {
        id: 'lunch-enchiladas',
        name: t('Enchiladas', 'Enchiladas'),
        note: t('Served with rice and beans. Made with flour tortilla.', 'Servidas con arroz y frijoles. En tortilla de harina.'),
        items: [
          { name: 'Mole Enchilada', price: 13.99, desc: t('Chicken sautéed in our traditional authentic mole sauce.', 'Pollo en nuestra auténtica salsa de mole.') },
          { name: 'Chipotle Enchilada', price: 13.99, desc: t('Chicken with chipotle cream sauce.', 'Pollo en salsa cremosa de chipotle.') },
          { name: 'Verde Enchilada', price: 13.99, desc: t('Pork chunk with green sauce.', 'Trozos de cerdo en salsa verde.') },
          { name: 'Enchilada A La Crema', price: 13.99, desc: t('Chicken with cream sauce.', 'Pollo en salsa a la crema.') },
          { name: 'Zuisa Enchilada', price: 13.99, desc: t('Shredded chicken with green sauce and sour cream.', 'Pollo deshebrado en salsa verde y crema.') },
          { name: 'Enchiladas Rojas', price: 13.99, desc: t('Choice of chicken, ground beef or shredded beef.', 'Pollo, res molida o deshebrada.') },
          { name: 'Seafood Enchilada', price: 14.99, desc: t('Shrimp with real crab meat cooked in butter and chopped sauce.', 'Camarón con carne de cangrejo en mantequilla y salsa picada.') },
        ],
      },
      {
        id: 'lunch-salads',
        name: t('Salads', 'Ensaladas'),
        items: [
          { name: 'Taco Salad', price: 13.99, desc: t('Choice of chicken, ground beef, shredded beef or beans served with lettuce, tomatoes, cheese, guacamole and sour cream.', 'Pollo, res molida, deshebrada o frijoles con lechuga, tomate, queso, guacamole y crema.') },
          { name: 'Tostada Salad', price: 13.99, desc: t('Choice of chicken, ground beef, shredded beef or beans served with guacamole and sour cream.', 'Pollo, res molida, deshebrada o frijoles con guacamole y crema.') },
          { name: 'Bean Avocado Tostada', price: 13.99, desc: t('Comes with beans and sliced avocado.', 'Con frijoles y rebanadas de aguacate.') },
        ],
      },
      {
        id: 'lunch-combinations',
        name: t('Combinations', 'Combinaciones'),
        note: t('Served with rice and beans.', 'Servidas con arroz y frijoles.'),
        items: [
          { name: '1. Cheese Enchilada, Taco', price: 13.99 },
          { name: '2. Chile Relleno, 2 Tortillas', price: 13.99 },
          { name: '3. Cheese Enchilada, Tamal', price: 13.99 },
          { name: '4. Taco, Tamal', price: 13.99 },
        ],
      },
    ],
  },
  {
    id: 'dinner',
    name: t('Dinner', 'Cena'),
    sections: [
      {
        id: 'appetizers',
        name: t('Appetizers', 'Entradas'),
        items: [
          { name: 'Loaded Nachos', price: 16.99, desc: t('Corn tortilla chips covered with beans and melted cheese, topped with onions, tomatoes, jalapeños, sour cream and guacamole.', 'Totopos con frijoles y queso derretido, cebolla, tomate, jalapeños, crema y guacamole.') },
          { name: 'Chicken Taquitos', price: 15.99, desc: t('Deep fried tortilla filled with chicken and garnished with lettuce, tomatoes, sour cream and guacamole.', 'Taquitos dorados de pollo con lechuga, tomate, crema y guacamole.') },
          { name: 'Cheese Dip', price: 5.99 },
          { name: 'Bean Dip', price: 4.99 },
          { name: 'Choriqueso', price: 6.99 },
          { name: 'Carne Asada Fries', price: 17.99, desc: t('Fries, carne asada, cheese, jalapeños, tomatoes, green onion, sour cream and guacamole.', 'Papas, carne asada, queso, jalapeños, tomate, cebollín, crema y guacamole.') },
        ],
      },
      {
        id: 'smothered-burritos',
        name: t('Smothered Burritos', 'Burritos Bañados'),
        note: t('Served with rice and beans. Made with flour tortilla.', 'Servidos con arroz y frijoles. En tortilla de harina.'),
        items: [
          { name: 'Verde Burrito', price: 17.99, desc: t('Pork chunk with green sauce.', 'Trozos de cerdo en salsa verde.') },
          { name: 'Super Burrito', price: 17.99, desc: t('Flour tortilla with your choice of ground beef, chicken, or shredded beef. Garnished with lettuce, cheese, tomatoes, sour cream and guacamole.', 'Res molida, pollo o res deshebrada. Con lechuga, queso, tomate, crema y guacamole.') },
          { name: 'Chipotle Burrito', price: 17.99, desc: t('Chicken with chipotle cream sauce.', 'Pollo en salsa cremosa de chipotle.') },
          { name: 'Seafood Burrito', price: 17.99, desc: t('Shrimp with real crab meat cooked in butter and chopped salsa.', 'Camarón con carne de cangrejo en mantequilla y salsa picada.') },
          { name: 'Al Pastor Burrito', price: 18.99, desc: t('Marinated steak.', 'Carne adobada.') },
          { name: 'Asada Burrito', price: 18.99, desc: t('Charcoal slices of steak.', 'Rebanadas de res al carbón.') },
          { name: 'Carnitas Burrito', price: 17.99, desc: t('Shredded pork.', 'Cerdo deshebrado.') },
          { name: 'Fajita Burrito', price: 17.99, desc: t('Chicken or steak with peppers and onions.', 'Pollo o res con pimientos y cebolla.') },
          { name: 'Burrito', price: 16.99, desc: t('Chicken, ground beef or shredded beef.', 'Pollo, res molida o deshebrada.') },
          { name: 'Bean and Cheese Burrito', price: 14.99 },
          { name: 'Seafood Chimichanga', price: 17.99, desc: t('Shrimp with real crab meat cooked with butter. Topped with lettuce, tomatoes, sour cream and guacamole.', 'Camarón con carne de cangrejo en mantequilla. Con lechuga, tomate, crema y guacamole.') },
          { name: 'Chimichanga', price: 16.99, desc: t('Choice of chicken, ground beef or shredded beef. Topped with lettuce, tomatoes, sour cream and guacamole.', 'Pollo, res molida o deshebrada. Con lechuga, tomate, crema y guacamole.') },
          { name: 'Sopes (3)', price: 19.99, desc: t('Choice of carne asada, pollo asado or al pastor. Topped with lettuce, sour cream, cheese and salsa.', 'Carne asada, pollo asado o al pastor. Con lechuga, crema, queso y salsa.') },
          { name: 'Quesabirria (3)', price: 18.99, desc: t('Comes with cilantro and onions.', 'Con cilantro y cebolla.') },
        ],
      },
      {
        id: 'dinner-enchiladas',
        name: t('Enchiladas', 'Enchiladas'),
        note: t('Served with rice and beans. Made with flour tortilla.', 'Servidas con arroz y frijoles. En tortilla de harina.'),
        items: [
          { name: 'Mole Enchilada', price: 16.99, desc: t('Chicken sautéed in our traditional authentic mole sauce.', 'Pollo en nuestra auténtica salsa de mole.') },
          { name: 'Chipotle Enchilada', price: 16.99, desc: t('Chicken with chipotle cream sauce.', 'Pollo en salsa cremosa de chipotle.') },
          { name: 'Verde Enchilada', price: 16.99, desc: t('Pork chunk with green sauce.', 'Trozos de cerdo en salsa verde.') },
          { name: 'Enchilada A La Crema', price: 16.99, desc: t('Chicken with cream sauce.', 'Pollo en salsa a la crema.') },
          { name: 'Zuisa Enchilada', price: 16.99, desc: t('Shredded chicken with green sauce and sour cream.', 'Pollo deshebrado en salsa verde y crema.') },
          { name: 'Enchiladas Rojas', price: 16.99, desc: t('Choice of chicken, ground beef or shredded beef.', 'Pollo, res molida o deshebrada.') },
          { name: 'Seafood Enchilada', price: 17.99, desc: t('Shrimp with real crab meat cooked in butter and chopped salsa.', 'Camarón con carne de cangrejo en mantequilla y salsa picada.') },
        ],
      },
      {
        id: 'seafood',
        name: t('Seafood', 'Mariscos'),
        items: [
          { name: 'Camarones A La Crema', price: 20.99, desc: t('Prawns wrapped in bacon and fried. Served over a bed of red and green peppers and onions, topped with melted cheese.', 'Camarones envueltos en tocino y fritos, sobre pimientos rojos y verdes y cebolla, con queso derretido.') },
          { name: 'Camarones Momia', price: 20.99, desc: t('Prawns, cooked with mushrooms and sautéed in a tasty sauce made with sour cream.', 'Camarones con champiñones en una rica salsa a la crema.') },
          { name: 'Camarones Al Mojo De Ajo', price: 20.99, desc: t('Prawns and mushrooms cooked in butter and sautéed in garlic-onion juice.', 'Camarones y champiñones en mantequilla, ajo y cebolla.') },
          { name: 'Camarones A La Diabla', price: 20.99, desc: t('Prawns cooked with mushrooms sautéed in a spicy sauce.', 'Camarones con champiñones en salsa picante.') },
          { name: 'Camarones En Salsa Verde', price: 20.99, desc: t('Prawns cooked over charcoal and served with rice and beans, baby shrimp, avocado and green sauce.', 'Camarones al carbón con arroz, frijoles, camarón chico, aguacate y salsa verde.') },
          { name: 'Camarones A La Chipotle', price: 20.99, desc: t('Prawns cooked in chipotle sauce.', 'Camarones en salsa de chipotle.') },
          { name: 'Mojarra', price: 20.99, desc: t('One whole, pan fried tilapia.', 'Tilapia entera frita.') },
          { name: 'Tacos De Camaron', price: 20.99, desc: t('Three marinated shrimp tacos.', 'Tres tacos de camarón adobado.') },
          { name: 'Tacos De Pescado', price: 20.99, desc: t('Three fish tacos.', 'Tres tacos de pescado.') },
          { name: 'Coctel De Camaron', price: 20.99, desc: t('Shrimp cocktail with tomatoes, onion, cilantro, avocado and cucumber.', 'Coctel de camarón con tomate, cebolla, cilantro, aguacate y pepino.') },
          { name: 'Ceviche', price: 20.99, desc: t('Shrimp cocktail with tomatoes, onion, cilantro and avocado.', 'Ceviche de camarón con tomate, cebolla, cilantro y aguacate.') },
          { name: 'Aguachile', price: 20.99, desc: t('Fresh shrimp cured in lime juice, topped with cucumber, onion and spicy red or green salsa.', 'Camarón curado en limón, con pepino, cebolla y salsa roja o verde picante.') },
          { name: 'Fajitas Caza Mezcal', price: 23.99, desc: t('Served with steak and chicken, cheese, onions and peppers.', 'Res y pollo, queso, cebolla y pimientos.') },
        ],
      },
      {
        id: 'beef',
        name: t('Beef', 'Res'),
        items: [
          { name: 'Carne Asada', price: 23.99, desc: t('Slices of skirt steak cooked over charcoal, served with guacamole.', 'Rebanadas de arrachera al carbón con guacamole.') },
          { name: 'Carnitas De Res', price: 20.99, desc: t('Flank steak strips with red and green peppers, onions and tomatoes.', 'Tiras de res con pimientos rojos y verdes, cebolla y tomate.') },
          { name: 'Street Tacos (3)', price: 20.99, desc: t('Your choice of carne asada, al pastor, pollo asado or carnitas.', 'Carne asada, al pastor, pollo asado o carnitas.') },
          { name: 'Milanesa De Res', price: 22.99, desc: t('Breaded skirt steak.', 'Milanesa de res empanizada.') },
          { name: 'Chuletas De Puerco', price: 20.99, desc: t('3 pork chops in green sauce.', '3 chuletas de puerco en salsa verde.') },
        ],
      },
      {
        id: 'chicken',
        name: t('Chicken', 'Pollo'),
        items: [
          { name: 'Milanesa De Pollo', price: 20.99, desc: t('Breaded chicken breast.', 'Pechuga de pollo empanizada.') },
          { name: 'Pollo Asado', price: 19.99, desc: t('Chicken breast cooked over charcoal.', 'Pechuga de pollo al carbón.') },
          { name: 'Pollo A La Crema', price: 19.99, desc: t('Chicken breast with mushrooms sautéed in sour cream sauce.', 'Pechuga con champiñones en salsa a la crema.') },
          { name: 'Pollo Chipotle', price: 19.99, desc: t('Chicken breast covered with chipotle cream sauce.', 'Pechuga en salsa cremosa de chipotle.') },
          { name: 'Carnitas De Pollo', price: 19.99, desc: t('Chicken breast with peppers, onions and tomatoes.', 'Pechuga con pimientos, cebolla y tomate.') },
          { name: 'Pollo En Mole', price: 19.99, desc: t('Chicken breast cooked in a tasty sweet mole sauce.', 'Pechuga en rica salsa de mole.') },
          { name: 'Alambre', price: 23.99, desc: t('Served with chicken or steak, onions, jalapeño, cheese.', 'Pollo o res, cebolla, jalapeño y queso.') },
        ],
      },
      {
        id: 'steak',
        name: t('Steak', 'Cortes'),
        items: [
          { name: 'Steak Azteca', price: 25.99, desc: t('12oz NY steak in a bed of jalapeños, peppers, onion and cactus. Comes with rice and beans.', 'NY steak de 12oz sobre jalapeños, pimientos, cebolla y nopal. Con arroz y frijoles.') },
          { name: '16oz T-bone Steak', price: 25.99, desc: t('Comes with rice and beans.', 'Con arroz y frijoles.') },
        ],
      },
      {
        id: 'fajitas',
        name: t('Fajitas', 'Fajitas'),
        items: [
          { name: 'Sizzling Fajitas', price: 20.99, desc: t('Marinated steak, chicken or shrimp with onions and peppers.', 'Res, pollo o camarón adobado con cebolla y pimientos.') },
        ],
      },
      {
        id: 'hamburgers',
        name: t('Hamburgers', 'Hamburguesas'),
        note: t('Comes with lettuce, tomato, and onions.', 'Con lechuga, tomate y cebolla.'),
        items: [
          { name: 'Bacon Cheeseburger', price: 17.99, desc: t('Burger patty with crispy bacon and American cheese.', 'Carne con tocino crujiente y queso americano.') },
          { name: 'New Mexico Burger', price: 17.99, desc: t('Jalapeño, avocado and pepper jack cheese.', 'Jalapeño, aguacate y queso pepper jack.') },
          { name: 'Hawaiian BBQ Burger', price: 17.99, desc: t('Pineapple, ham, American cheese and BBQ sauce.', 'Piña, jamón, queso americano y salsa BBQ.') },
        ],
      },
      {
        id: 'combo-plates',
        name: t('Combo Plates', 'Platos Combinados'),
        note: t('Served with rice and beans.', 'Servidos con arroz y frijoles.'),
        items: [
          { name: 'Two Item Plate', price: 15.99, desc: t('Tamal, taco, tostada, chile relleno, chimichanga, burrito, enchilada.', 'Tamal, taco, tostada, chile relleno, chimichanga, burrito, enchilada.') },
          { name: 'Three Item Plate', price: 17.99, desc: t('Tamal, taco, tostada, chile relleno, chimichanga, burrito, enchilada.', 'Tamal, taco, tostada, chile relleno, chimichanga, burrito, enchilada.') },
        ],
      },
      {
        id: 'dishes-for-two',
        name: t('Dishes for Two', 'Platillos para Dos'),
        items: [
          { name: 'Parrillada Cielo, Mar Y Tierra', price: 44.99, desc: t('Grilled steak and chicken served with your choice of shrimp in any style from our menu. Served with rice, beans, guacamole and tortillas.', 'Res y pollo a la parrilla con camarón al estilo que elijas. Con arroz, frijoles, guacamole y tortillas.') },
          { name: 'Molcajete', price: 44.99, desc: t('A sizzling traditional stone bowl filled with steak, chicken, shrimp, chorizo and cactus in a hot molcajete with roasted salsa. Served with rice, beans, guacamole and tortillas.', 'Molcajete caliente con res, pollo, camarón, chorizo y nopal en salsa asada. Con arroz, frijoles, guacamole y tortillas.') },
          { name: 'Fajitas For Two', price: 39.99, desc: t('Choose two from chicken, beef, or prawns, then we cook them in a red and green bell peppers and onions. Served with two plates of rice and beans, guacamole and sour cream.', 'Elige dos: pollo, res o camarón, con pimientos rojos y verdes y cebolla. Con dos órdenes de arroz y frijoles, guacamole y crema.') },
          { name: 'Molcajete De Mariscos', price: 44.99, desc: t('A sizzling stone mortar filled with a medley of grilled seafood such as shrimp, fish, octopus and scallops, cooked in a spicy tomato-based sauce.', 'Molcajete de mariscos a la parrilla: camarón, pescado, pulpo y callo en salsa de tomate picante.') },
        ],
      },
      {
        id: 'sides',
        name: t('Sides', 'Guarniciones'),
        items: [
          { name: 'Chimichanga', price: 7.99 },
          { name: 'Rice and Beans', price: 5.99 },
          { name: 'Enchilada or Burrito', price: 4.99 },
          { name: 'Tamal', price: 4.99 },
          { name: 'Fries', price: 4.99 },
          { name: 'Chips & Salsa', price: 5.99 },
          { name: 'Chile Relleno', price: 5.99 },
          { name: 'Taco', price: 4.5 },
          { name: 'Guacamole', price: 3.99 },
          { name: 'Jalapeño', price: 1.99 },
          { name: 'Mini Salad', price: 5.99 },
        ],
      },
      {
        id: 'dinner-salads',
        name: t('Salads', 'Ensaladas'),
        items: [
          { name: 'Taco Salad', price: 16.99, desc: t('Choice of chicken, ground beef, shredded beef or beans served with lettuce, tomatoes, cheese, guacamole and sour cream.', 'Pollo, res molida, deshebrada o frijoles con lechuga, tomate, queso, guacamole y crema.') },
          { name: 'Tostada Salad', price: 16.99, desc: t('Choice of chicken, ground beef, shredded beef or beans served with guacamole and sour cream.', 'Pollo, res molida, deshebrada o frijoles con guacamole y crema.') },
          { name: 'Baja Chicken Salad', price: 17.99, desc: t('Mixed greens, grilled chicken, cheese, tomatoes, avocado, crispy tortilla strips and chipotle ranch.', 'Mezcla de lechugas, pollo a la parrilla, queso, tomate, aguacate, tiras de tortilla y aderezo chipotle ranch.') },
          { name: 'Bean Avocado Tostada', price: 15.99, desc: t('Comes with beans and sliced avocado.', 'Con frijoles y rebanadas de aguacate.') },
        ],
      },
      {
        id: 'kids',
        name: t('Kids Menu', 'Menú Infantil'),
        note: t('Choice of chicken, ground beef, shredded beef or cheese. Served with rice and beans.', 'Pollo, res molida, deshebrada o queso. Con arroz y frijoles.'),
        items: [
          { name: 'Enchilada', price: 8.99 },
          { name: 'Burrito', price: 8.99 },
          { name: 'Quesadilla', price: 8.99 },
          { name: 'Chicken Strips', price: 8.99 },
        ],
      },
    ],
  },
  {
    id: 'beverages',
    name: t('Beverages', 'Bebidas'),
    sections: [
      {
        id: 'soft-drinks',
        name: t('Soft Drinks', 'Refrescos'),
        items: [
          { name: 'Fountain Drinks', price: 3.99, desc: t('Pepsi, Diet Pepsi, 7-Up, Mountain Dew, Root Beer, Dr Pepper, Sunkist, Lemonade.', 'Pepsi, Diet Pepsi, 7-Up, Mountain Dew, Root Beer, Dr Pepper, Sunkist, Limonada.') },
          { name: 'Apple or Orange Juice', price: 3.99 },
          { name: 'Milk', price: 3.99 },
          { name: 'Shirley Temple', price: 3.99, desc: t('7-Up, grenadine, and maraschino cherry garnish.', '7-Up, granadina y cereza maraschino.') },
          { name: 'Roy Rogers', price: 3.99, desc: t('Pepsi, grenadine, and maraschino cherry garnish.', 'Pepsi, granadina y cereza maraschino.') },
          { name: 'Coca-Cola (in bottle)', price: 5.99 },
          { name: 'Jarritos (in bottle)', price: 4.99 },
        ],
      },
      {
        id: 'specialty-drinks',
        name: t('Specialty Drinks', 'Bebidas Especiales'),
        items: [
          { name: 'Michelada', price: 9.99 },
          { name: 'Michelada VIP', price: 17.99 },
          { name: 'Michelada Caguama', price: 18.99 },
          { name: 'Blue Hawaiian', price: 8.99 },
          { name: 'Piña Colada', price: 8.99 },
          { name: 'Strawberry Daiquiri', price: 8.99 },
          { name: 'Mezcalitas', price: 9.99 },
          { name: 'Mojito', price: 9.99 },
          { name: 'Cantarito', price: 9.99 },
          { name: 'Cazuelita', price: 13.99 },
        ],
      },
      {
        id: 'margaritas',
        name: t('Margaritas', 'Margaritas'),
        items: [
          { name: 'Margaritas', priceLabel: 'S 9.99 · M 13.99 · Jumbo 19.99', desc: t('Mango, Blackberry, Raspberry, Peach, Strawberry, Blueraspberry, Fresh Lime.', 'Mango, zarzamora, frambuesa, durazno, fresa, blueraspberry, limón fresco.') },
        ],
      },
      {
        id: 'draft-beer',
        name: t('Draft Beer', 'Cerveza de Barril'),
        items: [
          { name: 'Mug', price: 8.99 },
          { name: 'Pint', price: 6.99 },
        ],
      },
      {
        id: 'bottled-beer',
        name: t('Bottled Beer', 'Cerveza en Botella'),
        items: [
          { name: 'Bottled Beer', price: 4.99, desc: t('Corona, Negra Modelo, Modelo Especial, Coors Light, Bud Light, Victoria.', 'Corona, Negra Modelo, Modelo Especial, Coors Light, Bud Light, Victoria.') },
        ],
      },
      {
        id: 'wine',
        name: t('Wine', 'Vino'),
        items: [
          { name: 'Wine', price: 8.99, desc: t('Cabernet, Merlot, Chardonnay.', 'Cabernet, Merlot, Chardonnay.') },
        ],
      },
      {
        id: 'tequilas',
        name: t('Tequilas', 'Tequilas'),
        items: [
          { name: 'Tequilas', desc: t('Patrón, Silver, Don Julio, Hornitos Reposado, Ocho, 400 Conejos Mezcal.', 'Patrón, Silver, Don Julio, Hornitos Reposado, Ocho, 400 Conejos Mezcal.') },
        ],
      },
      {
        id: 'desserts',
        name: t('Desserts', 'Postres'),
        items: [
          { name: 'Fried Ice Cream', price: 7.99, desc: t('A scoop of hard ice cream rolled in cereal crumbs and zapped in the deep fryer. Served in a flour tortilla bowl, topped with strawberry syrup or caramel, and whipped cream.', 'Bola de helado empanizada en cereal y frita, en canasta de tortilla, con jarabe de fresa o caramelo y crema batida.') },
          { name: 'Flan', price: 6.99, desc: t('Homemade vanilla custard with burnt sugar topping.', 'Flan casero de vainilla con caramelo.') },
          { name: 'Sopapillas', price: 6.99, desc: t('Deep-fried flour tortilla pastry, rolled in sugar and cinnamon and topped with whipped cream.', 'Masa de tortilla frita con azúcar y canela y crema batida.') },
          { name: 'Churro Cake', price: 6.99, desc: t('Classic churros, crafted with a cinnamon-spiced cake, filled with delicious dulce de leche and topped with a sugar streusel.', 'Pastel de churro con canela, relleno de dulce de leche y streusel de azúcar.') },
        ],
      },
    ],
  },
];

// Destacados que se muestran en el landing. Referencian platillos del menú completo.
export const highlights: MenuItem[] = [
  { name: 'Molcajete', price: 44.99, desc: t('House specialty: steak, chicken, shrimp, chorizo & cactus in a sizzling stone bowl.', 'Especialidad de la casa: res, pollo, camarón, chorizo y nopal en molcajete caliente.') },
  { name: 'Quesabirria (3)', price: 18.99, desc: t('Slow-braised beef tacos with cilantro & onions for dipping.', 'Tacos de birria con cilantro y cebolla para remojar.') },
  { name: 'Carne Asada', price: 23.99, desc: t('Skirt steak over charcoal, served with guacamole.', 'Arrachera al carbón, servida con guacamole.') },
  { name: 'Camarones A La Diabla', price: 20.99, desc: t('Prawns & mushrooms sautéed in a spicy sauce.', 'Camarones con champiñones en salsa picante.') },
  { name: 'Loaded Nachos', price: 16.99, desc: t('Beans, melted cheese, jalapeños, sour cream & guacamole.', 'Frijoles, queso derretido, jalapeños, crema y guacamole.') },
  { name: 'Sizzling Fajitas', price: 20.99, desc: t('Marinated steak, chicken or shrimp with onions & peppers.', 'Res, pollo o camarón adobado con cebolla y pimientos.') },
];
