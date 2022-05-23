// Used to initialize project images
// function Loader_Init(image_dict) {
//     return image_dict;
// }
  
  // Used on objects to display images
function Loader_Image(src) {
    const image = new Image;
    image.src = src;
    return image;
}

export class Images {
    constructor() {
        this.dict = {
            // Ammo Items
            'EQUIPMENT/AMMO/1': Loader_Image('../src/items/EQUIPMENT/AMMO/1/0_0_0.png'),

            // Bow Items
            'EQUIPMENT/BOWS/3': Loader_Image('../src/items/EQUIPMENT/BOWS/3/0_0_0.png'),

            // Swords Items
            'EQUIPMENT/SWORDS/24': Loader_Image('../src/items/EQUIPMENT/SWORDS/24/0_0_0.png'),

            // Maces
            'EQUIPMENT/MACE/EMERALD/1': Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/1/0_0_0.png'),
            'EQUIPMENT/MACE/EMERALD/2': Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/2/0_0_0.png'),
            'EQUIPMENT/MACE/EMERALD/3': Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/3/0_0_0.png'),
            'EQUIPMENT/MACE/EMERALD/4': Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/4/0_0_0.png'),
            'EQUIPMENT/MACE/EMERALD/5': Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/5/0_0_0.png'),
        }
    }
}
