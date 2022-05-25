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
        this.dict = [ [   // Ammo Items
                ["Arrow_01", 'EQUIPMENT/AMMO/1', Loader_Image('../src/items/EQUIPMENT/AMMO/1/0_0_0.png')],
            ],[ // Bow Items
                ["Bow_03", 'EQUIPMENT/BOWS/3', Loader_Image('../src/items/EQUIPMENT/BOWS/3/0_0_0.png')],
            ],[ // Swords Items
                ["Sword_01", 'EQUIPMENT/SWORDS/1', Loader_Image('../src/items/EQUIPMENT/SWORDS/1/0_0_0.png')],
                ["Sword_24", 'EQUIPMENT/SWORDS/24', Loader_Image('../src/items/EQUIPMENT/SWORDS/24/0_0_0.png')],
                ["Sword_25", 'EQUIPMENT/SWORDS/25', Loader_Image('../src/items/EQUIPMENT/SWORDS/25/0_0_0.png')],
                 // Shield Swords
                ["SHIELDBLADEH", 'EQUIPMENT/SWORDS/SHIELDBLADEH', Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADEH/0_0_0.png')],
                ["SHIELDBLADELH", 'EQUIPMENT/SWORDS/SHIELDBLADELH', Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADELH/0_0_0.png')],
                ["SHIELDBLADELV", 'EQUIPMENT/SWORDS/SHIELDBLADELV', Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADELV/0_0_0.png')],
                ["SHIELDBLADERH", 'EQUIPMENT/SWORDS/SHIELDBLADERH', Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADERH/0_0_0.png')],
                ["SHIELDBLADERV", 'EQUIPMENT/SWORDS/SHIELDBLADERV', Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADERV/0_0_0.png')],
                ["SHIELDBLADEV", 'EQUIPMENT/SWORDS/SHIELDBLADEV', Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADEV/0_0_0.png')],
                ["SHIELDLESSBLADE", 'EQUIPMENT/SWORDS/SHIELDLESSBLADE', Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDLESSBLADE/0_0_0.png')],
                ["SHIELDLESSDOUBLEBLADE", 'EQUIPMENT/SWORDS/SHIELDLESSDOUBLEBLADE', Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDLESSDOUBLEBLADE/0_0_0.png')],
            ],[ // Axes Items
                ["ELVEN_SINGLE", 'EQUIPMENT/AXES/ELVEN/SINGLE/1', Loader_Image('../src/items/EQUIPMENT/AXES/ELVEN/SINGLE/1/0_0_0.png')],
            ],[ // Maces                
                ["EMERALD_01", 'EQUIPMENT/MACE/EMERALD/1', Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/1/0_0_0.png')],
                ["EMERALD_02", 'EQUIPMENT/MACE/EMERALD/2', Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/2/0_0_0.png')],
                ["EMERALD_03", 'EQUIPMENT/MACE/EMERALD/3', Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/3/0_0_0.png')],
                ["EMERALD_04", 'EQUIPMENT/MACE/EMERALD/4', Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/4/0_0_0.png')],
                ["EMERALD_05", 'EQUIPMENT/MACE/EMERALD/5', Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/5/0_0_0.png')],
            ],[ // Shields                
                ["SHIELDS_04", 'EQUIPMENT/SHIELDS/4', Loader_Image('../src/items/EQUIPMENT/SHIELDS/4/0_0_0.png')],
                ["BASICWOODBUCKLER", 'EQUIPMENT/SHIELDS/BASICWOODBUCKLER', Loader_Image('../src/items/EQUIPMENT/SHIELDS/BASICWOODBUCKLER/0_0_0.png')],
                ["BASICSTEELBUCKLER", 'EQUIPMENT/SHIELDS/BASICSTEELBUCKLER', Loader_Image('../src/items/EQUIPMENT/SHIELDS/BASICWOODBUCKLER/0_0_0.png')],
                ["BASICWOODNSTEELBUCKLER", 'EQUIPMENT/SHIELDS/BASICWOODNSTEELBUCKLER', Loader_Image('../src/items/EQUIPMENT/SHIELDS/BASICWOODNSTEELBUCKLER/0_0_0.png')],
                ["EPICWOODNSTEELBUCKLER", 'EQUIPMENT/SHIELDS/EPICWOODNSTEELBUCKLER', Loader_Image('../src/items/EQUIPMENT/SHIELDS/EPICWOODNSTEELBUCKLER/0_0_0.png')],
                ["STEELSHIELD", 'EQUIPMENT/SHIELDS/STEELSHIELD', Loader_Image('../src/items/EQUIPMENT/SHIELDS/STEELSHIELD/0_0_0.png')],
        ] ]
    }
}
