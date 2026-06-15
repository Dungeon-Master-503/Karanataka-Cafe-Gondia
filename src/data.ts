import { MenuItem, Review } from './types';

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // SOUTH INDIAN SPECIALS
  { id: 'si-idli-2', name: 'Rice Idli (2 Pcs)', price: 89, category: 'south-indian', description: 'Soft, fluffy steamed rice cakes served with sambar and fresh coconut chutney.', isVegetarian: true },
  { id: 'si-idli-4', name: 'Rice Idli (4 Pcs)', price: 159, category: 'south-indian', description: 'A larger portion of soft, pillow-like steamed rice cakes with sambar & chutney.', isVegetarian: true },
  { id: 'si-rava-2', name: 'Rava Idli (2 Pcs)', price: 129, category: 'south-indian', description: 'Steamed semolina cakes tempered with mustard seeds, cashews, and coriander.', isVegetarian: true },
  { id: 'si-spicy-mini', name: 'Spicy Mini Idli (12 Pcs)', price: 159, category: 'south-indian', description: 'Bite-sized baby idlis tossed in seasoned gun powder (podi) and clarified butter.', isPopular: true, isVegetarian: true, isSpicy: true },
  { id: 'si-vada-4', name: 'Medu Vada (4 Pcs)', price: 179, category: 'south-indian', description: 'Crispy deep-fried savory split-black-lentil donuts with a soft, warm interior.', isVegetarian: true },
  { id: 'si-idli-vada', name: 'Idli Vada (2 Pcs)', price: 119, category: 'south-indian', description: 'The absolute classic combination of a soft steamed idli and a crispy medu vada.', isVegetarian: true },
  { id: 'si-dahi-vada-1', name: 'Dahi Vada (1 Pc)', price: 89, category: 'south-indian', description: 'Golden lentil fritter soaked in sweet, spiced yogurt and topped with sweet chutneys.', isVegetarian: true },
  { id: 'si-dahi-vada-2', name: 'Dahi Vada (2 Pcs)', price: 159, category: 'south-indian', description: 'Pristine golden lentil fritters soaked in sweet, cool yogurt and garnished beautifully.', isVegetarian: true },
  { id: 'si-dahi-idli-2', name: 'Dahi Idli (2 Pcs)', price: 159, category: 'south-indian', description: 'Soft steamed rice cakes immersed in seasoned, refreshingly chilled creamy yogurt.', isVegetarian: true },
  { id: 'si-idli-chaat-6', name: 'Idli Chaat (6 Pcs)', price: 129, category: 'south-indian', description: 'Innovative chatpata idli segments dressed with yogurt, tamarind and green mint chutney.', isVegetarian: true },
  { id: 'si-idli-chaat-12', name: 'Idli Chaat (12 Pcs)', price: 189, category: 'south-indian', description: 'Full portion of crispy idli pieces tossed with fine sev, sweet yogurt, and tangy spices.', isVegetarian: true },

  // DOSA COLLECTION
  { id: 'dosa-plain', name: 'Plain Dosa', price: 119, category: 'south-indian', description: 'Thin, crispy golden-brown crepe crafted from masterfully fermented rice & lentil batter.', isVegetarian: true },
  { id: 'dosa-butter-plain', name: 'Butter Plain Dosa', price: 139, category: 'south-indian', description: 'Crispy crepe prepared with a lavish spread of locally sourced premium butter.', isVegetarian: true },
  { id: 'dosa-masala', name: 'Masala Dosa', price: 149, category: 'south-indian', description: 'Crisp golden crepe folded over a traditional mildly spiced buttery potato mash.', isPopular: true, isVegetarian: true },
  { id: 'dosa-paper-plain', name: 'Paper Plain Dosa', price: 169, category: 'south-indian', description: 'Ultra-thin, paper-crisp golden crêpe spanning across the table, served with hot sambar.', isVegetarian: true },
  { id: 'dosa-paper-masala', name: 'Paper Masala Dosa', price: 199, category: 'south-indian', description: 'Extra-large paper dosa filled with our delicious signature house potato mash.', isVegetarian: true },
  { id: 'dosa-mysore-plain', name: 'Mysore Plain Dosa', price: 139, category: 'south-indian', description: 'Crispy crepe coated with Mysore style red chili-garlic-spice paste.', isVegetarian: true, isSpicy: true },
  { id: 'dosa-mysore-masala', name: 'Mysore Masala Dosa', price: 169, category: 'south-indian', description: 'Classic crepe with a layer of fiery red garlic chutney, filled with potato bhaji.', isPopular: true, isVegetarian: true, isSpicy: true },
  { id: 'dosa-onion-plain', name: 'Onion Plain Dosa', price: 139, category: 'south-indian', description: 'Crispy golden crepe studded with roasted, finely chopped sweet red onions.', isVegetarian: true },
  { id: 'dosa-onion-masala', name: 'Onion Masala Dosa', price: 169, category: 'south-indian', description: 'Crispy dosa loaded with roasted onions and filled with traditional savory potato mash.', isVegetarian: true },
  { id: 'dosa-ghee-plain', name: 'Ghee Roast Plain Dosa', price: 169, category: 'south-indian', description: 'Crisp golden crepe roasted in pure aromatic clarified butter (ghee) for rich flavor.', isVegetarian: true },
  { id: 'dosa-ghee-masala', name: 'Ghee Roast Masala Dosa', price: 199, category: 'south-indian', description: 'Ghee-roasted golden crepe wrapped around highly flavorful spiced potatoes.', isVegetarian: true },
  { id: 'dosa-hot-garlic', name: 'Hot Garlic Masala Dosa', price: 189, category: 'south-indian', description: 'Robust dosa infused with a kick of hot native garlic seasoning and folded with potato mash.', isVegetarian: true, isSpicy: true },
  { id: 'dosa-paneer', name: 'Paneer Dosa', price: 189, category: 'south-indian', description: 'Crispy crepe stuffed with a generous filling of seasoned, grated tandoor paneer.', isVegetarian: true },
  { id: 'dosa-kc-special', name: 'Karnataka Special Masala Dosa', price: 209, category: 'south-indian', description: 'Our custom chef special masala dosa with secret spice blends and rich heritage butter.', isPopular: true, isVegetarian: true },
  { id: 'dosa-kc-paneer', name: 'Karnataka Special Paneer Dosa', price: 239, category: 'south-indian', description: 'A house special crisp crepe paired with spiced, rich, shredded cottage cheese crumble.', isVegetarian: true },
  { id: 'dosa-spring-roll', name: 'Spring Roll Dosa', price: 209, category: 'south-indian', description: 'A modern fusion creation stuffed with stir-fried Chinese style vegetables and roll-cut.', isVegetarian: true },
  { id: 'dosa-schezwan-masala', name: 'Schezwan Masala Dosa', price: 219, category: 'south-indian', description: 'Crepe coated with a fiery, hot Schezwan drizzle and folded with standard potato mash.', isVegetarian: true, isSpicy: true },
  { id: 'dosa-schezwan-paneer', name: 'Schezwan Paneer Dosa', price: 249, category: 'south-indian', description: 'Infused with tangy and hot Schezwan paste and tender, grated tandoor paneer.', isVegetarian: true, isSpicy: true },
  { id: 'dosa-veg-cheese', name: 'Vegetable Cheese Dosa', price: 259, category: 'south-indian', description: 'Folded with a healthy mix of seasonal fresh vegetables and overflowing melted cheese.', isVegetarian: true },
  { id: 'dosa-corn-cheese', name: 'Corn Masala Cheese Dosa', price: 259, category: 'south-indian', description: 'Sweet corn kernels, traditional spiced potato mash, and a load of rich mozzarella cheese.', isVegetarian: true },
  { id: 'dosa-paneer-cheese', name: 'Paneer & Cheese Dosa', price: 269, category: 'south-indian', description: 'Delectable combination of premium grated paneer cheese and loads of melted mozzarella.', isVegetarian: true },
  { id: 'dosa-butter-cheese', name: 'Butter Masala Cheese Dosa', price: 269, category: 'south-indian', description: 'Rich potato mash, fresh creamy butter, and bubbling melted cheese inside a crisp dosa.', isVegetarian: true },

  // SIGNATURE DOSA
  { id: 'sd-5ft-masala', name: '5 Feet Never Ending Masala Dosa', price: 849, category: 'south-indian', description: 'A magnificent five-foot-long crisp crepe crafted to share, bursting with traditional masala potato mash.', isPopular: true, isVegetarian: true },
  { id: 'sd-5ft-paneer', name: '5 Feet Never Ending Paneer Dosa', price: 999, category: 'south-indian', description: 'An ultimate family-sized five-foot golden dosa packed with freshly curdled spiced paneer filling.', isPopular: true, isVegetarian: true },

  // RAVA DOSA
  { id: 'rava-plain', name: 'Rava Plain Dosa', price: 129, category: 'south-indian', description: 'Lacy, ultra-crispy crepe made with fine semolina, decorated with cumin and curry leaves.', isVegetarian: true },
  { id: 'rava-onion', name: 'Rava Onion Dosa', price: 149, category: 'south-indian', description: 'Crisp, lacy semolina crepe packed with finely chopped caramelized red onions.', isVegetarian: true },
  { id: 'rava-masala', name: 'Rava Masala Dosa', price: 159, category: 'south-indian', description: 'Traditional crispy rava crepe wrapped around lightly spiced potato onion potato mash.', isVegetarian: true },
  { id: 'rava-butter-plain', name: 'Rava Butter Plain Dosa', price: 169, category: 'south-indian', description: 'Lacy semolina crepe grid-baked with a generous splash of pure creamery butter.', isVegetarian: true },
  { id: 'rava-mysore-plain', name: 'Rava Mysore Plain Dosa', price: 159, category: 'south-indian', description: 'Fine semolina crepe coated inside with the authentic spicy red Mysore chili paste.', isVegetarian: true, isSpicy: true },
  { id: 'rava-onion-masala', name: 'Rava Onion Masala Dosa', price: 179, category: 'south-indian', description: 'Savory crisp semolina dosa with roasted onions and a classic potato masala center.', isVegetarian: true },
  { id: 'rava-paneer', name: 'Rava Paneer Dosa', price: 179, category: 'south-indian', description: 'Perfect crispy rava crepe stuffed with delicious seasoned fresh crumbled cottage cheese.', isVegetarian: true },
  { id: 'rava-mysore-masala', name: 'Rava Mysore Masala Dosa', price: 189, category: 'south-indian', description: 'Spicy red Mysore layer on a lacy semolina crepe, stuffed with delicious potato mash.', isVegetarian: true, isSpicy: true },
  { id: 'rava-mysore-paneer', name: 'Rava Mysore Paneer Dosa', price: 209, category: 'south-indian', description: 'Spicy red chutney combined with premium grated paneer inside our lacy rava crepe.', isVegetarian: true, isSpicy: true },
  { id: 'rava-onion-paneer', name: 'Rava Onion Paneer Dosa', price: 209, category: 'south-indian', description: 'Crispy rava crepe loaded with golden-brown onions and authentic spiced paneer.', isVegetarian: true },

  // RICE & UTTAPAM
  { id: 'rice-sambar', name: 'Sambar Rice', price: 159, category: 'south-indian', description: 'Fluffy rice slow-cooked with fresh local seasonal veggies and real spiced lentil sambar.', isVegetarian: true },
  { id: 'rice-rasam', name: 'Rasam Rice', price: 159, category: 'south-indian', description: 'Steaming hot rice infused with tangy, spicy, and perfectly warming herbal tomato rasam soup.', isVegetarian: true, isSpicy: true },
  { id: 'rice-lemon', name: 'Lemon Rice', price: 169, category: 'south-indian', description: 'Aromatic basmati rice cooked with citrus lemon juice, curry leaves, and crunchy peanuts.', isVegetarian: true },
  { id: 'rice-tomato', name: 'Tomato Rice', price: 169, category: 'south-indian', description: 'Rice stir-fried with rich tomatoes, mustard seeds, green chilies, and South Indian spices.', isVegetarian: true },
  { id: 'rice-curd', name: 'Curd Rice', price: 179, category: 'south-indian', description: 'Cool and creamy curd blended with soft rice, tempered with mustard, red chilies, and ginger.', isVegetarian: true },
  { id: 'rice-coconut', name: 'Coconut Rice', price: 179, category: 'south-indian', description: 'Mildly sweet rice cooked with fresh grated coconut, oil, roasted cashews, and curry leaves.', isVegetarian: true },
  { id: 'rice-sv-biryani', name: 'South Indian Veg Biryani', price: 229, category: 'south-indian', description: 'Premium spiced rice layered with ghee, garden vegetables, and exotic coastal spices.', isVegetarian: true },
  { id: 'uttapam-plain', name: 'Plain Uttapam', price: 129, category: 'south-indian', description: 'Thick, fluffy rice crepe cooked to golden perfect on cast iron griddles.', isVegetarian: true },
  { id: 'uttapam-onion', name: 'Onion Uttapam', price: 149, category: 'south-indian', description: 'Savory thick rice pancake topped with fried onions, green chilies, and coriander.', isVegetarian: true },
  { id: 'uttapam-tomato', name: 'Tomato Uttapam', price: 159, category: 'south-indian', description: 'Comforting thick pancake layered with fresh tomatoes and herbs, crispy on the edge.', isVegetarian: true },
  { id: 'uttapam-onion-tomato', name: 'Onion Tomato Uttapam', price: 179, category: 'south-indian', description: 'Topped generously with dynamic diced red onions, juicy tomato pieces, and green chilies.', isVegetarian: true },
  { id: 'uttapam-mix-veg', name: 'Mix Vegetable Uttapam', price: 179, category: 'south-indian', description: 'Packed with minced vegetables like carrots, peas, bells, and sweet coriander.', isVegetarian: true },
  { id: 'uttapam-coconut', name: 'Coconut Uttapam', price: 179, category: 'south-indian', description: 'Thick pancake with golden-roasted shredded coconut for a tropical finish.', isVegetarian: true },
  { id: 'uttapam-tomato-coconut', name: 'Tomato Coconut Uttapam', price: 179, category: 'south-indian', description: 'Unique balance of caramelized coconut and tangy sweet tomato toppings.', isVegetarian: true },
  { id: 'uttapam-paneer', name: 'Paneer Uttapam', price: 209, category: 'south-indian', description: 'Fluffy griddle cake topped with a generous layer of spiced paneer and greens.', isVegetarian: true },

  // PIZZA
  { id: 'pt-margherita-r', name: 'Margherita (Regular)', price: 149, category: 'pizza-italian', description: 'Classic pizza featuring house single-source tomato marinara and bubbling melted mozzarella.', isVegetarian: true },
  { id: 'pt-margherita-m', name: 'Margherita (Medium)', price: 249, category: 'pizza-italian', description: 'Medium version of our classic pizza with extra marinara and melted gourmet cheese.', isVegetarian: true },
  { id: 'pt-db-margherita-r', name: 'Double Cheese Margherita (Regular)', price: 179, category: 'pizza-italian', description: 'Overflowing with a premium double layer of melted, direct-sourced mozzarella.', isVegetarian: true },
  { id: 'pt-db-margherita-m', name: 'Double Cheese Margherita (Medium)', price: 279, category: 'pizza-italian', description: 'Medium wood-fired style crust overflowing with a double portion of bubbling cheese.', isVegetarian: true },
  { id: 'pt-vegfresh-r', name: 'Veggies Fresh (Regular)', price: 209, category: 'pizza-italian', description: 'Topped with garden-crisp capsicum, sweet red onions, and rich ripe tomatoes.', isVegetarian: true },
  { id: 'pt-vegfresh-m', name: 'Veggies Fresh (Medium)', price: 309, category: 'pizza-italian', description: 'A larger, loaded pizza topped with high-quality green peppers, onions, and tomatoes.', isVegetarian: true },
  { id: 'pt-countryveg-r', name: 'Country Veg (Regular)', price: 219, category: 'pizza-italian', description: 'Homestyle topping of crisp bell peppers, sweet corn kernels, and fresh red onions.', isVegetarian: true },
  { id: 'pt-countryveg-m', name: 'Country Veg (Medium)', price: 319, category: 'pizza-italian', description: 'Loaded medium crust with a country blend of peppers, fresh corn, and mild red onions.', isVegetarian: true },
  { id: 'pt-farmfresh-r', name: 'Farm Fresh (Regular)', price: 219, category: 'pizza-italian', description: 'An authentic harvest of sweet baby corn, button mushrooms, olives, and tender capsicum.', isVegetarian: true },
  { id: 'pt-farmfresh-m', name: 'Farm Fresh (Medium)', price: 319, category: 'pizza-italian', description: 'Medium sized robust pizza with button mushrooms, green capsicum, black olives, and sweet corn.', isVegetarian: true },
  { id: 'pt-spicyveg-r', name: 'Spicy Veg Delight (Regular)', price: 219, category: 'pizza-italian', description: 'Loaded with a spicy kick of jalapeños, red paprika flakes, sweet peppers, and onions.', isVegetarian: true, isSpicy: true },
  { id: 'pt-spicyveg-m', name: 'Spicy Veg Delight (Medium)', price: 319, category: 'pizza-italian', description: 'Medium size punchy pizza with hot jalapeños, bell peppers, fiery paprika, and sweet corn.', isVegetarian: true, isSpicy: true },
  { id: 'pt-tangypaneer-r', name: 'Spicy Tangy Paneer (Regular)', price: 239, category: 'pizza-italian', description: 'Chunks of juicy paneer marinated in pickle spices, red chili, and fresh lime zest.', isPopular: true, isVegetarian: true, isSpicy: true },
  { id: 'pt-tangypaneer-m', name: 'Spicy Tangy Paneer (Medium)', price: 359, category: 'pizza-italian', description: 'Our highest-selling medium pizza topped with pickled, tangy paneer shards and sweet onions.', isPopular: true, isVegetarian: true, isSpicy: true },
  { id: 'pt-feastlovers-r', name: 'Veggie Feast Lovers (Regular)', price: 259, category: 'pizza-italian', description: 'A massive carnival of crisp red onion, capsicum, sweet corn, mushrooms, and olives.', isVegetarian: true },
  { id: 'pt-feastlovers-m', name: 'Veggie Feast Lovers (Medium)', price: 409, category: 'pizza-italian', description: 'The absolute dream pizza for garden veggie aficionados, loaded with five fresh toppings.', isVegetarian: true },
  { id: 'pt-supremeveg-r', name: 'Delicious Supreme Veg (Regular)', price: 259, category: 'pizza-italian', description: 'Premium choice loaded with exotic black olives, golden baby corn, and double cheese.', isVegetarian: true },
  { id: 'pt-supremeveg-m', name: 'Delicious Supreme Veg (Medium)', price: 409, category: 'pizza-italian', description: 'Extra large topping distribution of select mushrooms, baby corn, sweet peppers, and olives.', isVegetarian: true },
  { id: 'pt-extravaganza-r', name: 'Veg Extravaganza (Regular)', price: 259, category: 'pizza-italian', description: 'A royal treatment featuring jalapeños, sweet corn, onions, capsicum, paneer, and olives.', isVegetarian: true },
  { id: 'pt-extravaganza-m', name: 'Veg Extravaganza (Medium)', price: 409, category: 'pizza-italian', description: 'Loaded with absolutely every favorite topping in a massive cheese pull distribution.', isPopular: true, isVegetarian: true },

  // PASTA & CALZONES
  { id: 'pt-pasta-white', name: 'White Sauce Pasta', price: 159, category: 'pizza-italian', description: 'Penne dressed in velvety, slow-simmered rich cream, melted parmesan, and garlic sauce.', isVegetarian: true },
  { id: 'pt-pasta-red', name: 'Red Sauce Pasta', price: 159, category: 'pizza-italian', description: 'Cooked in a robust, slow-cooked tangy tomato Italian concasse with fresh basil.', isVegetarian: true },
  { id: 'pt-pasta-mix', name: 'Mix Sauce Pasta', price: 179, category: 'pizza-italian', description: 'A gorgeous pink melody of sweet marinara and luxurious cream sauce combined.', isPopular: true, isVegetarian: true },
  { id: 'pt-calzone-veg', name: 'Veggie Calzones', price: 149, category: 'pizza-italian', description: 'Folded pocket bread stuffed with marinara, sweet corn, capsicum, and mozzarella.', isVegetarian: true },
  { id: 'pt-calzone-exotic', name: 'Exotic Calzones', price: 179, category: 'pizza-italian', description: 'Premium tandoor-baked pouch filled with olives, paneer crumbles, and rich spicy cream.', isVegetarian: true },

  // BURGERS
  { id: 'pt-burger-chotu', name: 'Chotu Burger', price: 69, category: 'pizza-italian', description: 'A cute, mini-sized crispy potato patty burger with custom dressing.', isVegetarian: true },
  { id: 'pt-burger-veg', name: 'Veggie Burger', price: 99, category: 'pizza-italian', description: 'Crispy seasoned vegetable patty, crisp lettuce, red tomatoes, and mayonnaise.', isVegetarian: true },
  { id: 'pt-burger-cheese', name: 'Cheese Veggie Delight Burger', price: 129, category: 'pizza-italian', description: 'Our custom vegetable patty loaded with a rich melting real cheddar slice.', isVegetarian: true },
  { id: 'pt-burger-paneer', name: 'Paneer Tikka Burger', price: 149, category: 'pizza-italian', description: 'Spiced tandoori paneer steak, mint cilantro emulsion, and crispy lettuce.', isPopular: true, isVegetarian: true },

  // QUICK BITES
  { id: 'pt-fries-plain', name: 'French Fries', price: 89, category: 'pizza-italian', description: 'Classic sea salted, piping hot golden french fries.', isVegetarian: true },
  { id: 'pt-fries-peri', name: 'Peri Peri Fries', price: 109, category: 'pizza-italian', description: 'Crispy potato fries dusted with a premium hot and spicy African peri peri spice mix.', isVegetarian: true, isSpicy: true },
  { id: 'pt-garlic-stick', name: 'Garlic Bread Stick', price: 109, category: 'pizza-italian', description: 'Gently baked golden-brown bread sticks seasoned with real garlic butter.', isVegetarian: true },
  { id: 'pt-garlic-stuffed', name: 'Stuffed Garlic Bread', price: 129, category: 'pizza-italian', description: 'Freshly baked bread pocket loaded with sweet corn, jalapeños, and real mozzarella.', isVegetarian: true },
  { id: 'pt-garlic-twist', name: 'Cheese Garlic Twist (4 Pcs)', price: 139, category: 'pizza-italian', description: 'Artisanal twisted garlic knots filled with melted cheese and fresh Italian herbs.', isVegetarian: true },
  { id: 'pt-cheese-balls', name: 'Cheese Balls (6 Pcs)', price: 119, category: 'pizza-italian', description: 'Crispy breaded golden spheres packed with premium gooey molten cheese.', isVegetarian: true },
  { id: 'pt-nuggets', name: 'Veg Nuggets (6 Pcs)', price: 119, category: 'pizza-italian', description: 'Crispy deep-fried premium vegetable appetizers served with sweet chili sauce.', isVegetarian: true },

  // CHINESE
  { id: 'ch-noodles-hakka', name: 'Veg Hakka Noodles', price: 159, category: 'pizza-italian', description: 'Wok-tossed noodles with colorful julienne vegetables, light soy sauce, and white pepper.', isVegetarian: true },
  { id: 'ch-fried-rice', name: 'Veg Fried Rice', price: 159, category: 'pizza-italian', description: 'Fragrant basmati rice tossed in hot woks with fresh scallions, carrots, and light ginger.', isVegetarian: true },
  { id: 'ch-noodles-garlic', name: 'Hot Garlic Noodles', price: 199, category: 'pizza-italian', description: 'Spicy street-style noodles tossed in freshly minced garlic and red chili paste.', isVegetarian: true, isSpicy: true },
  { id: 'ch-chilli-paneer', name: 'Chilli Paneer Dry/Gravy', price: 239, category: 'pizza-italian', description: 'Cottage cheese pieces wok-fried with crisp bell peppers, onions, and hot dark soy chili sauce.', isPopular: true, isVegetarian: true, isSpicy: true },
  { id: 'ch-veg-manchurian', name: 'Veg Manchurian Dry/Gravy', price: 219, category: 'pizza-italian', description: 'Deep-fried mixed vegetable dumplings simmered in a tangy ginger-garlic-soy reduction.', isVegetarian: true },
  { id: 'ch-gobi-manchurian', name: 'Gobi Manchurian Dry/Gravy', price: 219, category: 'pizza-italian', description: 'Crisp fried cauliflower florets coated in our premium house sweet & sour sauce.', isVegetarian: true },
  { id: 'ch-baby-corn', name: 'Baby Corn Chilli', price: 249, category: 'pizza-italian', description: 'Crunchy golden battered baby corn spears wok-tossed in sweet and spicy chili paste.', isVegetarian: true, isSpicy: true },
  { id: 'ch-paneer-manchurian', name: 'Paneer Manchurian', price: 249, category: 'pizza-italian', description: 'Soft paneer chunks seasoned and tossed with soy, ginger, celery, and garlic infusion.', isVegetarian: true },
  { id: 'ch-mushroom-chilli', name: 'Mushroom Chilli Dry/Gravy', price: 249, category: 'pizza-italian', description: 'Plump button mushrooms sautéed in a dark, robust chili capsicum paste.', isVegetarian: true, isSpicy: true },
  { id: 'ch-veg-crispy', name: 'Veg Crispy Salt & Pepper', price: 219, category: 'pizza-italian', description: 'Assorted seasonal vegetables battered, flash-fried, and seasoned with ground black peppercorns.', isVegetarian: true },

  // NORTH INDIAN
  { id: 'ni-dal-fry', name: 'Dal Fry', price: 179, category: 'north-indian', description: 'Cooked yellow split lentils tempered with tomatoes, onions, garlic, and cumin seeds.', isVegetarian: true },
  { id: 'ni-dal-tadka', name: 'Yellow Dal Tadka', price: 199, category: 'north-indian', description: 'Creamy split pigeon pea dal topped with a smoking splutter of ghee, red chilies, and asafoetida.', isVegetarian: true },
  { id: 'ni-dal-makhani', name: 'Dal Makhani', price: 269, category: 'north-indian', description: 'Slow-cooked whole black lentils with cream and butter on live tandoor charcoal overnight.', isPopular: true, isVegetarian: true },
  { id: 'ni-shahi-paneer', name: 'Shahi Paneer', price: 269, category: 'north-indian', description: 'Tender cottage cheese cooked in a royal, silky cream and golden cashew nut paste.', isVegetarian: true },
  { id: 'ni-paneer-butter', name: 'Paneer Butter Masala', price: 269, category: 'north-indian', description: 'Succulent fresh paneer cubes cooked in rich tomato gravy with generous cream and butter.', isPopular: true, isVegetarian: true },
  { id: 'ni-paneer-lababdar', name: 'Paneer Lababdar', price: 269, category: 'north-indian', description: 'Paneer in a creamy tomato-onion masala with hints of grated paneer and dried fenugreek leaves (kasuri methi).', isVegetarian: true },
  { id: 'ni-paneer-tikka', name: 'Paneer Tikka Masala', price: 289, category: 'north-indian', description: 'Tandoor grilled paneer skewers cooked in a thick spiced capsicum masala gravy.', isVegetarian: true, isSpicy: true },
  { id: 'ni-kadhai-paneer', name: 'Kadhai Paneer', price: 289, category: 'north-indian', description: 'Spiced cottage cheese tossed with freshly pounded coriander seeds and dry red chilies in a heavy iron wok.', isVegetarian: true, isSpicy: true },
  { id: 'ni-palak-paneer', name: 'Palak Paneer', price: 259, category: 'north-indian', description: 'Fresh paneer chunks served in a smooth, vibrant spinach purée tempered with garlic.', isVegetarian: true },
  { id: 'ni-matar-paneer', name: 'Matar Paneer', price: 259, category: 'north-indian', description: 'Timeless combination of sweet green peas and soft paneer in a seasoned tomato curry.', isVegetarian: true },
  { id: 'ni-paneer-korma', name: 'Paneer Korma', price: 279, category: 'north-indian', description: 'Rich Mughal style gravy loaded with aromatic coconut, cardamom, and spiced fried yogurt.', isVegetarian: true },
  { id: 'ni-paneer-dopyaza', name: 'Paneer Do Pyaza', price: 289, category: 'north-indian', description: 'Delectable cottage cheese cooked with double the amount of crisp red cubed onions.', isVegetarian: true },
  { id: 'ni-kc-special', name: 'KC Special', price: 299, category: 'north-indian', description: 'Our masterpiece North Indian dish celebrating organic vegetables, cashew nuts, and unique spice blend.', isPopular: true, isVegetarian: true },

  // THALIS
  { id: 'ni-thali-exec', name: 'KC Executive Thali', price: 289, category: 'north-indian', description: 'Premium thali with Dal, Special Paneer, Mix Veg, Rice, Butter Roti, Sweet, and papad.', isVegetarian: true },
  { id: 'ni-thali-deluxe', name: 'KC Deluxe Thali', price: 329, category: 'north-indian', description: 'Sumptuous layout featuring paneer butter masala, yellow dal tadka, pulao rice, butter naan, curd, and dessert.', isPopular: true, isVegetarian: true },
  { id: 'ni-thali-south', name: 'South Indian Thali', price: 379, category: 'north-indian', description: 'Traditional array including Sambar, Rasam, Poriyal, Lemon Rice, Chapati, Curd, Pickle, and Sweet Payasam.', isVegetarian: true },

  // BEVERAGES
  { id: 'bd-tea-masala', name: 'Tea Masala', price: 40, category: 'beverages-desserts', description: 'Freshly brewed strong Indian chai boiled with premium tea leaves, cardamom, and ginger.', isVegetarian: true },
  { id: 'bd-nescafe', name: 'Nescafe', price: 60, category: 'beverages-desserts', description: 'Whip-frothed hot instant coffee made with creamy sweet dairy milk.', isVegetarian: true },
  { id: 'bd-filter-coffee', name: 'Filter Coffee', price: 100, category: 'beverages-desserts', description: 'Authentic South Indian chicory blend coffee frothed in traditional brass tumblers.', isPopular: true, isVegetarian: true },
  { id: 'bd-buttermilk', name: 'Madras Buttermilk', price: 110, category: 'beverages-desserts', description: 'Cool and churning hand-beaten yogurt watered and seasoned with ginger, green chili, and curry leaves.', isVegetarian: true },
  { id: 'bd-lassi', name: 'Lassi (Sweet/Salt)', price: 110, category: 'beverages-desserts', description: 'Rich, ultra-creamy traditional Punjabi yogurt lassi served chilled.', isVegetarian: true },
  { id: 'bd-mojito-mint', name: 'Mint Mojito', price: 129, category: 'beverages-desserts', description: 'Muddled fresh mint leaves, lime slices, sparkling soda, and mint extract.', isVegetarian: true },
  { id: 'bd-icetea-peach', name: 'Peach Ice Tea', price: 120, category: 'beverages-desserts', description: 'Refreshing tea leaf steep syrup blended with premium sweet peach nectar.', isVegetarian: true },
  { id: 'bd-icetea-lemon', name: 'Lemon Ice Tea', price: 120, category: 'beverages-desserts', description: 'Crisp cold-brewed black tea flavored with active citrus lime juice.', isVegetarian: true },
  { id: 'bd-mojito-apple', name: 'Green Apple Mojito', price: 139, category: 'beverages-desserts', description: 'Tangy fresh green apple infusion with sparkling spring water and fresh mint leaves.', isVegetarian: true },
  { id: 'bd-badam-milk', name: 'Bengaluru Badam Milk', price: 149, category: 'beverages-desserts', description: 'Nourishing hot badam milk loaded with luxury almond flakes and saffron strings.', isVegetarian: true },
  { id: 'bd-cold-coffee', name: 'Cold Coffee', price: 129, category: 'beverages-desserts', description: 'Thick, creamy hand-blended cold coffee dusted with fine dark chocolate powder.', isVegetarian: true },
  { id: 'bd-cold-coffee-icecream', name: 'Cold Coffee with Ice Cream', price: 159, category: 'beverages-desserts', description: 'Gourmet cold coffee topped with a massive scoop of dense sweet vanilla bean ice cream.', isPopular: true, isVegetarian: true },
  { id: 'bd-lime-soda', name: 'Fresh Lime Soda', price: 100, category: 'beverages-desserts', description: 'Your choice of sweet or salted lime extract blended with sparkling soda.', isVegetarian: true },

  // DESSERTS
  { id: 'bd-gulab-1', name: 'Gulab Jamun (1 Pc)', price: 49, category: 'beverages-desserts', description: 'One soft, deep-fried milk solid dumpling soaked in aromatic sugar syrup.', isVegetarian: true },
  { id: 'bd-gulab-2', name: 'Gulab Jamun (2 Pcs)', price: 90, category: 'beverages-desserts', description: 'Two warm, sweet cardamon-flavored milk solid balls resting in rose water syrup.', isVegetarian: true },
  { id: 'bd-kesari-s', name: 'Rava Kesari Small', price: 69, category: 'beverages-desserts', description: 'A cozy mini portion of hot semolina halwa cooked in ghee with dry fruit chunks.', isVegetarian: true },
  { id: 'bd-kesari-l', name: 'Rava Kesari', price: 120, category: 'beverages-desserts', description: 'A larger indulgence of our signature Karnataka sweet semolina delicacy garnished with cashews.', isVegetarian: true },
  { id: 'bd-icecream-1', name: 'Ice Cream Single Scoop', price: 49, category: 'beverages-desserts', description: 'Single scoop of select premium ice cream.', isVegetarian: true },
  { id: 'bd-icecream-2', name: 'Ice Cream Double Scoop', price: 79, category: 'beverages-desserts', description: 'Double scoop of choose-your-own dense creamy gelato ice cream.', isVegetarian: true },
  { id: 'bd-brownie', name: 'Brownie', price: 149, category: 'beverages-desserts', description: 'Warm, dense dark chocolate brownie packed with premium fudge chunks.', isVegetarian: true },
  { id: 'bd-brownie-icecream', name: 'Brownie with Ice Cream', price: 189, category: 'beverages-desserts', description: 'Timeless combination of hot sizzling dark chocolate brownie and solid vanilla bean ice cream.', isPopular: true, isVegetarian: true },
  { id: 'bd-choco-lava', name: 'Choco Lava Cake', price: 99, category: 'beverages-desserts', description: 'Fresh warm muffin structure that unleashes liquid warm chocolate on first pierce.', isVegetarian: true }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-c1',
    name: 'Akash Mulchandani',
    role: 'Gondia Resident',
    rating: 5,
    comment: "The ambience is amazing and the food quality exceeded expectations. We tried the main course, and the paneer in the Kadhai Paneer was incredibly soft and fresh. The Tandoori Roti and Butter Naan were also excellent. Looking forward to trying the starters next time!",
    date: '2026-06-12',
    avatar: 'AM'
  },
  {
    id: 'rev-c2',
    name: 'Rashmeet Kaur Chhabra',
    role: 'Food Blogger',
    rating: 5,
    comment: "I tried both pizza and the main course, and everything tasted amazing. The food was fresh and flavorful, and the service was excellent. Highly recommended!",
    date: '2026-06-11',
    avatar: 'RC'
  },
  {
    id: 'rev-c3',
    name: 'Ansh Singh',
    role: 'Gondia Resident',
    rating: 5,
    comment: "Good food, great taste, and excellent service. My first experience in Gondia was truly memorable.",
    date: '2026-06-09',
    avatar: 'AS'
  },
  {
    id: 'rev-c4',
    name: 'Vishal Choure',
    role: 'Local Guide',
    rating: 5,
    comment: "Delicious food, great service, and one of the best restaurants in Gondia. A wonderful dining experience!",
    date: '2026-06-08',
    avatar: 'VC'
  },
  {
    id: 'rev-c5',
    name: 'Vishal Choure',
    role: 'Gondia Resident',
    rating: 5,
    comment: "The best taste I've experienced so far. Excellent service and undoubtedly one of the best family restaurants in Gondia.",
    date: '2026-06-07',
    avatar: 'VC'
  },
  {
    id: 'rev-c6',
    name: 'Prathna Chandwani',
    role: 'Regular Visitor',
    rating: 5,
    comment: "Good food, excellent service, and a lovely place to dine with family and friends.",
    date: '2026-06-05',
    avatar: 'PC'
  },
  {
    id: 'rev-c7',
    name: 'Dipali Patle',
    role: 'Local Guide',
    rating: 5,
    comment: "Every dish was delicious and beautifully prepared. Truly a delightful experience.",
    date: '2026-06-04',
    avatar: 'DP'
  },
  {
    id: 'rev-c8',
    name: 'Saurabh Shukla',
    role: 'Gondia Resident',
    rating: 5,
    comment: "Tasty and delicious food with great hospitality. A perfect place for family dining.",
    date: '2026-06-02',
    avatar: 'SS'
  },
  {
    id: 'rev-c9',
    name: 'Sumanjeet Kumar',
    role: 'Regular Visitor',
    rating: 5,
    comment: "Amazing experience! Great food, wonderful ambience, and excellent service.",
    date: '2026-05-28',
    avatar: 'SK'
  },
  {
    id: 'rev-c10',
    name: 'Aryan Sharma',
    role: 'Gondia Resident',
    rating: 5,
    comment: "I had the thali recently, and it was wonderful. The food was delicious, and the service was quick and efficient. Highly recommended!",
    date: '2026-05-25',
    avatar: 'AS'
  },
  {
    id: 'rev-c11',
    name: 'Nik Punde',
    role: 'Local Guide',
    rating: 5,
    comment: "Visited Karnataka Cafe & La Pizzato and had a fantastic experience. The food was delicious, the service was quick and friendly, and it's a perfect place to spend quality time with friends and family.",
    date: '2026-05-22',
    avatar: 'NP'
  },
  {
    id: 'rev-c12',
    name: 'Rajbalipatle Patle',
    role: 'Gondia Resident',
    rating: 5,
    comment: "Great food, excellent service, and a pleasant dining experience. Highly recommended.",
    date: '2026-05-19',
    avatar: 'RP'
  },
  {
    id: 'rev-c13',
    name: 'Deepak Thakur',
    role: 'Regular Visitor',
    rating: 5,
    comment: "The service was excellent, and the taste was outstanding. The South Indian dishes are truly exceptional and worth trying.",
    date: '2026-05-15',
    avatar: 'DT'
  },
  {
    id: 'rev-c14',
    name: 'Rajeev Kumar',
    role: 'Local Guide',
    rating: 5,
    comment: "Amazing taste! The Tangy Paneer Pizza was absolutely delicious and one of the best dishes I've had.",
    date: '2026-05-11',
    avatar: 'RK'
  },
  {
    id: 'rev-c15',
    name: 'Aarti Singh',
    role: 'Gondia Resident',
    rating: 5,
    comment: "The cafe offers an amazing experience, and the taste of every dish is simply outstanding.",
    date: '2026-05-08',
    avatar: 'AS'
  },
  {
    id: 'rev-c16',
    name: 'Shankar Mefoods',
    role: 'Food Blogger',
    rating: 5,
    comment: "Great food and a wonderful ambience. A perfect place to enjoy quality meals.",
    date: '2026-05-05',
    avatar: 'SM'
  },
  {
    id: 'rev-c17',
    name: 'Bhumika Dankhade',
    role: 'Regular Visitor',
    rating: 5,
    comment: "The food and ambience were both excellent. A relaxing and enjoyable place to dine.",
    date: '2026-05-02',
    avatar: 'BD'
  },
  {
    id: 'rev-c18',
    name: 'Minal Jurel',
    role: 'Gondia Resident',
    rating: 5,
    comment: "The food quality is excellent, and the cafe has a beautiful and relaxing ambience.",
    date: '2026-04-28',
    avatar: 'MJ'
  }
];

export const BRAND_RELIABLE_IMGS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFvtotq7xJalAyY2x0bUgSs7TgnHETGdk6PVnQfShKLqWFurp8Oo5WtFvsEN-ElUC6QFiSc7k0pa8K_nGWEesHc0LtDgZSttw1odC8cdJMvuAHgfa5XmKonoTKq4cIAxa4F64T0l4BK0zryhJm0XNBTJkC2rHO_E0_cNDiYeHsRT25d2Pn9-3eVVDDWwWDKJtQH_4hZhXJflAuhWtYWowxmPYJzDTKhdsS0kxqw3jHXci8L3Vk6oDs5wl-Cc3cxvtPicmIvyoGH2Bw',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU6jPRy2hh8ecbh_7vNK5QWSgneLiUhHxEG8OcTCTF6uo17PHNHNOCzHDkzwfzLZ6XWTkszKamIGvjESJ32f1ReqS3aPiT0U5oZxbbCC4NAwFfY5nM93__2vmv6DNeyRizdESQiLnTXlM9zNYFL8TLwNt3ZHSVhEE_UBq2wMLofqavZXR-Dr9CjyLORY8FLBv-EEhmhpYZhwJ5YgPf2K4szkLCPJ4eBnTxGBvjfoWaBv3ZHI9sd8u422K0Ry8DFI9w54M9OimyjxlT',
  heritageArch: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjIQ12TkIhHcVdu7k6PLkK24gKkt3IO2D0ejT1lFy9dBPryB6IF-Xun3zLgaDNXvj3VUCB5tHP17ep8vM1GEdxOm_0jW9OGJdPNtgeCQeVR4Kj1j8V4mijFasCOgYuO-YWAWJPsEt_-qlPIv-w053IOuZRbfktXq6B3hU6PR58Wx3Yv6VdMIZaYi1qHAjQmHRK0McXVv7vqAfIe8ecgCtG0wLbS1KqPB_FVYROoGa9B8ZSTB4rSweYbUDG-2NBsz_e5P5aix-RyVLN',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3n168W91pqg4YTbQBfMqmHF8TgTSJf7uMnvVJYM_lD5ocQTj0NRkjrkHM__FJteUWAIDtXZoo2Mm3OJ69S5NyrJHa9Gym6VGmJP9kCUtxOvCet_z3pqnr7_f-DrHVgmDJONE6OhPZFwH5iB0rXKYgSBEjtsAvIaa3hRN6eNYeFNwWACi3OaE--xrQNoGcoHJz1vcLQrtRIGYvneh_SWoEMY4IhnEwbaTZQp-k-swQy5uma_PC-HaAAJs_AOr9-W--OtxRVh5_o9SJ',
  footerLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgMdTQFgaFJPdAovbHp-HcZoydivdkmvuhPl_UTa5IhFY-WchHM8itqgQH9L0TVd3VT2oTWTUaq0ZTi-XOEZ6GsoOxxelyrQjc6T3JiJkRkIl9e6guxnH_Sk1AnAdWMlKibPsalw2IGQ8Izh0NCG8kjOwW2bs6jWv15l6Kirlr9y99I9yC48HfZgGARdHQ_Fh3ZLCjBQ0Phf9PAzEzrQEDHqeCyICb0T8IVrrvaak2eje4oqIQyBzsA670VazR1FNTQGbs_SbodxCg'
};

export const GALLERY_IMAGES = [
  {
    id: 'gal-kc1',
    url: '/KC1.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.heritageArch,
    title: 'Authentic Kathakali Artistry at Karnataka Cafe Gondia',
    caption: 'Our signature dining space adorned with majestic traditional Kathakali murals and gold vertical louvers near Collector Square.'
  },
  {
    id: 'gal-kc2',
    url: '/KC2.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.logo,
    title: 'La Pizzato Yellow Lounge Cafe in Gondia',
    caption: 'Cozy seating lounge featuring plush yellow armchairs under beautiful hanging floral installations near Saras Chowk.'
  },
  {
    id: 'gal-kc3',
    url: '/KC3.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.heroBg,
    title: 'Warm Dining Atmosphere in Gondia Restaurant',
    caption: 'Charming ambient spaces combining South Indian tradition with contemporary aesthetic elegance in Fulchur.'
  },
  {
    id: 'gal-kc4',
    url: '/KC4.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.heritageArch,
    title: 'South Indian Culinary Masterpieces at Karnataka Cafe Gondia',
    caption: 'Enjoy hand-crafted delicacies prepared fresh with premium authentic ingredients in Gondia.'
  },
  {
    id: 'gal-kc5',
    url: '/KC5.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.logo,
    title: 'Family & Celebration Booths in Gondia Family Restaurant',
    caption: 'Spacious and beautifully partitioned booths perfect for warm family gatherings and birthdays near Collector Office.'
  },
  {
    id: 'gal-kc6',
    url: '/KC6.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.heroBg,
    title: 'Artisanal Filter Coffee at Karnataka Cafe Gondia',
    caption: 'Sip on our authentic hand-frothed Filter Coffee and signature mocktails made to order.'
  },
  {
    id: 'gal-kc7',
    url: '/KC7.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.heritageArch,
    title: 'Best Pizza Place in Gondia - La Pizzato',
    caption: '"La Pizzato - a slice of happiness" welcoming sign set against warm wood paneling at Gupta Tower.'
  },
  {
    id: 'gal-kc8',
    url: '/KC8.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.logo,
    title: 'Artistic Craft Corners at Karnataka Cafe & La Pizzato Gondia',
    caption: 'Every corner tells a visual story of handpicked decorative crafts and warm hospitality near Aamgaon Road.'
  },
  {
    id: 'gal-kc9',
    url: '/KC9.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.heroBg,
    title: 'Gondia Premium Meal Feast in Fulchur',
    caption: 'Serving local food lovers premium South Indian delights and delicious wood-fired styled pizzas.'
  },
  {
    id: 'gal-kc10',
    url: '/KC10.jpg',
    fallbackUrl: BRAND_RELIABLE_IMGS.heritageArch,
    title: 'La Pizzato Cozy Booths in Gondia',
    caption: 'Sit back, relax and enjoy premium gourmet experiences in Gondias best-designed restaurant.'
  }
];
