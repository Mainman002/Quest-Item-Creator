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

const images = { // Ammo Items
                Ammo_01: [ "EQUIPMENT/AMMO/1", Loader_Image('../src/items/EQUIPMENT/AMMO/1/0_0_0.png')],
             // Bow Items
                Bow_03: [ "EQUIPMENT/BOWS/3", Loader_Image('../src/items/EQUIPMENT/BOWS/3/0_0_0.png')],
             // Daggers Items
             // Swords Items
                Sword_01: [ "EQUIPMENT/WEAPONS/SWORDS/1", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/1/0_0_0.jpg') ],
                Sword_02: [ "EQUIPMENT/WEAPONS/SWORDS/2", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/2/0_0_0.jpg') ],
                Sword_03: [ "EQUIPMENT/WEAPONS/SWORDS/3", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/3/0_0_0.jpg') ],
                Sword_04: [ "EQUIPMENT/WEAPONS/SWORDS/4", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/4/0_0_0.jpg') ],
                Sword_05: [ "EQUIPMENT/WEAPONS/SWORDS/5", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/5/0_0_0.jpg') ],
                Sword_06: [ "EQUIPMENT/WEAPONS/SWORDS/6", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/6/0_0_0.jpg') ],
                Sword_08: [ "EQUIPMENT/WEAPONS/SWORDS/8", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/8/0_0_0.jpg') ],
                Sword_10: [ "EQUIPMENT/WEAPONS/SWORDS/10", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/10/0_0_0.jpg') ],
                Sword_13: [ "EQUIPMENT/WEAPONS/SWORDS/13", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/13/0_0_0.jpg') ],
                Sword_14: [ "EQUIPMENT/WEAPONS/SWORDS/14", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/14/0_0_0.jpg') ],
                Sword_15: [ "EQUIPMENT/WEAPONS/SWORDS/15", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/15/0_0_0.jpg') ],
                Sword_20: [ "EQUIPMENT/WEAPONS/SWORDS/20", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/20/0_0_0.jpg') ],
                Sword_22: [ "EQUIPMENT/WEAPONS/SWORDS/22", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/22/0_0_0.jpg') ],
                Sword_23: [ "EQUIPMENT/WEAPONS/SWORDS/23", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/23/0_0_0.jpg') ],
                Sword_24: [ "EQUIPMENT/WEAPONS/SWORDS/24", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/24/0_0_0.jpg') ],
                Sword_25: [ "EQUIPMENT/WEAPONS/SWORDS/25", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/25/0_0_0.jpg') ],
                Sword_26: [ "EQUIPMENT/WEAPONS/SWORDS/26", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/26/0_0_0.jpg') ],
                Sword_27: [ "EQUIPMENT/WEAPONS/SWORDS/27", Loader_Image('../src/items/EQUIPMENT/WEAPONS/SWORDS/27/0_0_0.jpg') ],
                // Shield Swords
                Shield_Blade_H: [ "EQUIPMENT/SWORDS/SHIELDBLADEH", Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADEH/0_0_0.png') ],
                Shield_Blade_LH: [ "EQUIPMENT/SWORDS/SHIELDBLADELH", Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADELH/0_0_0.png') ],
                Shield_Blade_LV: [ "EQUIPMENT/SWORDS/SHIELDBLADELV", Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADELV/0_0_0.png') ],
                Shield_Blade_RH: [ "EQUIPMENT/SWORDS/SHIELDBLADERH", Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADERH/0_0_0.png') ],
                Shield_Blade_RV: [ "EQUIPMENT/SWORDS/SHIELDBLADERV", Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADERV/0_0_0.png') ],
                Shield_Blade_V: [ "EQUIPMENT/SWORDS/SHIELDBLADEV", Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDBLADEV/0_0_0.png') ],
                Shieldless_Blade: [ "EQUIPMENT/SWORDS/SHIELDLESSBLADE", Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDLESSBLADE/0_0_0.png') ],
                Shieldless_Double_Blade: [ "EQUIPMENT/SWORDS/SHIELDLESSDOUBLEBLADE", Loader_Image('../src/items/EQUIPMENT/SWORDS/SHIELDLESSDOUBLEBLADE/0_0_0.png') ],
             // Axes Items
                Elven_Axe_Single: [ "EQUIPMENT/AXES/ELVEN/SINGLE/1", Loader_Image('../src/items/EQUIPMENT/AXES/ELVEN/SINGLE/1/0_0_0.png') ],
             // Maces                
                Emerald_Mace_01: [ "EQUIPMENT/MACE/EMERALD/1", Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/1/0_0_0.png') ],
                Emerald_Mace_02: [ "EQUIPMENT/MACE/EMERALD/2", Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/2/0_0_0.png') ],
                Emerald_Mace_03: [ "EQUIPMENT/MACE/EMERALD/3", Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/3/0_0_0.png') ],
                Emerald_Mace_04: [ "EQUIPMENT/MACE/EMERALD/4", Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/4/0_0_0.png') ],
                Emerald_Mace_05: [ "EQUIPMENT/MACE/EMERALD/5", Loader_Image('../src/items/EQUIPMENT/MACE/EMERALD/5/0_0_0.png') ],
             // Shields                
                Shield_04: [ "EQUIPMENT/SHIELDS/4", Loader_Image('../src/items/EQUIPMENT/SHIELDS/4/0_0_0.png') ],
                Basic_Wood_Buckler: [ "EQUIPMENT/SHIELDS/BASICWOODBUCKLER", Loader_Image('../src/items/EQUIPMENT/SHIELDS/BASICWOODBUCKLER/0_0_0.png') ],
                Basic_Steel_Buckler: [ "EQUIPMENT/SHIELDS/BASICSTEELBUCKLER", Loader_Image('../src/items/EQUIPMENT/SHIELDS/BASICSTEELBUCKLER/0_0_0.png') ],
                Basic_Wood_N_Steel_Buckler: [ "EQUIPMENT/SHIELDS/BASICWOODNSTEELBUCKLER", Loader_Image('../src/items/EQUIPMENT/SHIELDS/BASICWOODNSTEELBUCKLER/0_0_0.png') ],
                Epic_Wood_N_Steel_Buckler: [ "EQUIPMENT/SHIELDS/EPICWOODNSTEELBUCKLER", Loader_Image('../src/items/EQUIPMENT/SHIELDS/EPICWOODNSTEELBUCKLER/0_0_0.png') ],
                Steel_Shield: [ "EQUIPMENT/SHIELDS/STEELSHIELD", Loader_Image('../src/items/EQUIPMENT/SHIELDS/STEELSHIELD/0_0_0.png') ],
} 

export class Models {
    constructor() {
        this.dict = [ [ // Ammo Items
                ["Arrow_01", '', images['Ammo_01'][0], images['Ammo_01'][1] ],
            ],[ // Bow Items
                ["Bow_01", 'weapons/bow01.dts', images['Bow_03'][0], images['Bow_03'][1] ],
                ["Bow_02", 'weapons/bow02.dts', images['Bow_03'][0], images['Bow_03'][1] ],
                ["Bow_04", 'weapons/bow04.dts', images['Bow_03'][0], images['Bow_03'][1] ],
            ],[ // Daggers Items
                ["Dagger_00", 'weapons/dagger00.dts', images['Sword_24'][0], images['Sword_24'][1] ],
            ],[ // Swords Items
                ["Sword_01", 'weapons/sword01.dts', images['Sword_01'][0], images['Sword_01'][1] ],
                ["Sword_03", 'weapons/sword03.dts', images['Sword_01'][0], images['Sword_02'][1] ],
                ["Sword_04", 'weapons/sword04.dts', images['Sword_01'][0], images['Sword_03'][1] ],
                ["Sword_05", 'weapons/sword05.dts', images['Sword_01'][0], images['Sword_05'][1] ],
                ["Sword_06", 'weapons/sword06.dts', images['Sword_01'][0], images['Sword_24'][1] ],
                ["Sword_07", 'weapons/sword07.dts', images['Sword_01'][0], images['Sword_06'][1] ],
                ["Sword_08", 'weapons/sword08.dts', images['Sword_01'][0], images['Sword_08'][1] ],
                ["Sword_09", 'weapons/sword09.dts', images['Sword_01'][0], images['Sword_10'][1] ],
                ["Sword_10", 'weapons/sword10.dts', images['Sword_01'][0], images['Sword_13'][1] ],
                ["Sword_11", 'weapons/sword11.dts', images['Sword_01'][0], images['Sword_14'][1] ],
                ["Sword_12", 'weapons/sword12.dts', images['Sword_01'][0], images['Sword_15'][1] ],
                ["Sword_13", 'weapons/sword13.dts', images['Sword_01'][0], images['Sword_20'][1] ],
                ["Sword_14", 'weapons/sword14.dts', images['Sword_01'][0], images['Sword_22'][1] ],
                ["Sword_15", 'weapons/sword15.dts', images['Sword_01'][0], images['Sword_23'][1] ],
                ["Sword_B", 'weapons/swordb.dts', images['Sword_01'][0], images['Sword_24'][1] ],
                ["Sword_Saw", 'weapons/swordsaw.dts', images['Sword_01'][0], images['Sword_25'][1] ],
                // Shield Swords
                ["SHIELDBLADEH", 'weapons/shieldbladeH.dts', images['Shield_Blade_H'][0], images['Shield_Blade_H'][1] ],
                ["SHIELDBLADELH", 'weapons/shieldbladeLH.dts', images['Shield_Blade_LH'][0], images['Shield_Blade_LH'][1] ],
                ["SHIELDBLADELV", 'weapons/shieldbladeLV.dts', images['Shield_Blade_LV'][0], images['Shield_Blade_LV'][1] ],
                ["SHIELDBLADERH", 'weapons/shieldbladeRH.dts', images['Shield_Blade_RH'][0], images['Shield_Blade_RH'][1] ],
                ["SHIELDBLADERV", 'weapons/shieldbladeRV.dts', images['Shield_Blade_RV'][0], images['Shield_Blade_RV'][1] ],
                ["SHIELDBLADEV", 'weapons/shieldbladeV.dts', images['Shield_Blade_V'][0], images['Shield_Blade_V'][1] ],
                ["SHIELDLESSBLADE", 'weapons/shieldlessblade.dts', images['Shieldless_Blade'][0], images['Shieldless_Blade'][1] ],
                ["SHIELDLESSDOUBLEBLADE", 'weapons/shieldlessdoubleblade.dts', images['Shieldless_Double_Blade'][0], images['Shieldless_Double_Blade'][1] ],
            ],[ // Axes Items
                ["ELVEN_SINGLE", 'weapons/broadsword.dts', images['Sword_24'][0], images['Sword_24'][1] ],
            ],[ // Maces                
                ["EMERALD_01", 'weapons/macebladed.dts', images['Emerald_Mace_01'][0], images['Emerald_Mace_01'][1] ],
                ["EMERALD_02", 'weapons/macebladed.dts', images['Emerald_Mace_02'][0], images['Emerald_Mace_02'][1] ],
                ["EMERALD_03", 'weapons/macebladed.dts', images['Emerald_Mace_03'][0], images['Emerald_Mace_03'][1] ],
                ["EMERALD_04", 'weapons/macebladed.dts', images['Emerald_Mace_04'][0], images['Emerald_Mace_04'][1] ],
                ["EMERALD_05", 'weapons/macebladed.dts', images['Emerald_Mace_05'][0], images['Emerald_Mace_05'][1] ],
            ],[ // Shields                
            ["SHIELDS_04", 'weapons/shield01.dts', images['Shield_04'][0], images['Shield_04'][1] ],
            ["STEELSHIELD", 'weapons/steelshield.dts', images['Steel_Shield'][0], images['Steel_Shield'][1] ],
                ["BASICWOODBUCKLER", 'weapons/basicwoodbuckler.dts', images['Basic_Wood_Buckler'][0], images['Basic_Wood_Buckler'][1] ],
                ["BASICSTEELBUCKLER", 'weapons/basicsteelbuckler.dts', images['Basic_Steel_Buckler'][0], images['Basic_Steel_Buckler'][1] ],
                ["BASICWOODNSTEELBUCKLER", 'weapons/basicwoodnsteelbuckler.dts', images['Basic_Wood_N_Steel_Buckler'][0], images['Basic_Wood_N_Steel_Buckler'][1] ],
                ["EPICWOODNSTEELBUCKLER", 'weapons/epicwoodnsteelbuckler.dts', images['Epic_Wood_N_Steel_Buckler'][0], images['Epic_Wood_N_Steel_Buckler'][1] ],
        ] ]
    } 
}

// { <option value="weapons/dagger00.dts">dagger_00</option>
// {
/* <option value="weapons/icicle.dts">icicle</option>
<!-- Swords -->
<option value="weapons/dragonswordice.dts">dragon_sword_ice</option>
<option value="weapons/dragonsword.dts">dragon_sword</option>
<option value="weapons/sword01.dts">sword_01</option>
<option value="weapons/broadsword.dts">broad_sword</option>
<option value="weapons/evileyelongsword.dts">evil_eye_long_sword</option>
<option value="weapons/spikedsword2.dts">spiked_sword_02</option>
<option value="weapons/lavabroad.dts">lava_broad</option>
<!-- Axes -->
<option value="weapons/shortaxe1.dts">short_axe_01</option>
<option value="weapons/elvenaxesingle.dts">elven_axe_single</option>
<option value="weapons/bovaxe.dts">bov_axe_01</option>
<option value="weapons/bovaxe2.dts">bov_axe_02</option>
<option value="weapons/axe05.dts">axe_05</option>
<option value="weapons/spikeaxe.dts">spike_axe</option>
<!-- Maces -->
<option value="weapons/macebladed.dts">emerald_mace_bladed</option>
<!-- Hammers -->
<option value="weapons/rockhammer.dts">rock_hammer</option>
<!-- Staffs -->
<option value="weapons/dragonstaff.dts">dragon_staff</option>
<option value="weapons/ldualblade.dts">left_dual_blade</option>
<!-- Claws -->
<option value="weapons/claw.dts">claw</option>
<!-- Bows -->
<option value="weapons/bow04.dts">bow_04</option>
<!-- Shields -->
<option value="weapons/basicwoodbuckler.dts">Basic_Wood_Buckler</option>                            
<option value="weapons/basicwoodnsteelbuckler.dts">Basic_Wood_N_Steel_Buckler</option>    */
// } */}