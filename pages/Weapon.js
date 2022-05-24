import {Images} from "./resources.js";
const img = new Images();

const ctx = canvas.getContext("2d");
const doc_items = [item_name,flag_common,flag_type,skill,slot,destructable,bitmap,model,material,speed,damage,range,copper,silver,tin,gold,spell_name,spell_trigger,spell_damage,race,equiped_particle,desc]
let item_values = {name:"",flag_common:"", flag_type:"",skill:"",slot:"",destructable:"",bitmap:"",model:"",material:"",speed:"",damage:"",range:"",bronze:"",silver:"",tin:"",gold:"",race:"",spell_name:"",spell_trigger:"",spell_damage:"",equiped_particle:"",desc:""};
let combined_values = "";
let has_bitmap = false;

// Used to initialize project images
function Loader_Init(image_dict) {
    return image_dict;
}
  
  // Used on objects to display images
function Loader_Image(src) {
    const image = new Image;
    image.src = src;
    return image;
}

function DrawImageSimple (_ctx, _image, _pos, _size, _a) {
    _ctx.save()
    _ctx.globalAlpha = _a

    _ctx.drawImage(_image,
        _pos.x, _pos.y, _size.w, _size.h)

    _ctx.restore()
    _ctx.globalAlpha = 1.0
}

function value_changed() {
    setTimeout(function() {
        // console.log( combined_values );
        set_values();
    }, 100);
}

function set_values() {
    for (var i = 0; i < doc_items.length; i++) {
        item_values[doc_items[i].name] = doc_items[i].value
	}

    // ["Emerald Tenderizer","['WEAPON']","1H Impact",(RPG_SLOT_PRIMARY,RPG_SLOT_SECONDARY),RPG_ITEM_INDESTRUCTIBLE,"EQUIPMENT/MACE/EMERALD/2","weapons/macebladed.dts",10,10,2,5,"","","",("Tenderize",RPG_ITEM_TRIGGER_MELEE,1), ""],
    // ['Emerald Tenderizer',"['WEAPON','flag_COMMON']",'1H Impact',(RPG_SLOT_PRIMARY, RPG_SLOT_SECONDARY),'RPG_ITEM_INDESTRUCTIBLE','EQUIPMENT/MACE/EMERALD/2',weapons/macebladed.dts,10,10,2,0,0,5,0,(Tenderize,RPG_ITEM_TRIGGER_MELEE,1),'An emerald mace with sharp blades.'],
    if ( item_values['spell_name'] ) {
        combined_values = `["${item_values['item_name']}",["${item_values['flag_type']}","${item_values['flag_common']}"],"${item_values['skill']}",(${item_values['slot']}),${item_values['destructable']},"${item_values['bitmap']}","${item_values['model']}","${item_values['material']}",${item_values['speed']},${item_values['damage']},${item_values['range']},${item_values['copper']},${item_values['silver']},${item_values['tin']},${item_values['gold']},"${item_values['desc']}","${item_values['equiped_particle']}","${item_values['race']}",("${item_values['spell_name']}",${item_values['spell_trigger']},${item_values['spell_damage']})],`;
    } else {
        combined_values = `["${item_values['item_name']}",["${item_values['flag_type']}","${item_values['flag_common']}"],"${item_values['skill']}",(${item_values['slot']}),${item_values['destructable']},"${item_values['bitmap']}","${item_values['model']}","${item_values['material']}",${item_values['speed']},${item_values['damage']},${item_values['range']},${item_values['copper']},${item_values['silver']},${item_values['tin']},${item_values['gold']},"${item_values['desc']}","${item_values['equiped_particle']}","${item_values['race']}",""],`;
    }
    item_result.value = combined_values;
}

// Original For Loop
// name[0],itemType[1],skill[2],slots[3],flags[4],bitmap[5],
// model[6],wpnDamage[7],wpnRate[8],wpnRange[9],worthGold[10],
// material[11],addRace(ob[12]),desc[13],
// addSpell( ob[14][0], ob[14][1], ob[14][2] ),equippedParticle[15]

// New For Loop
// name[0],itemType[1],skill[2],slots[3],flags[4],bitmap[5],model[6],material[7],wpnRate[8],wpDamage[9],wpnRange[10],worthCopper[11],worthSilver[12],worthTin[13],worthGold[14],addRace[15],desc[16],addSpell[17],equippedParticle[18]


function return_values() { 
    set_values();
    setTimeout(function() {
        value_changed();
        navigator.clipboard.writeText(combined_values);
    }, 100);
}

class Main {
    constructor () {
      this.ctx = canvas.getContext('2d')
      this.window_size = { w: 40, h: 40 }
      
      this.images = img.dict;
    }

    // update(dt) {

    // }

    draw() {
        DrawImageSimple(ctx, this.images[ item_values["bitmap"] ], {x:0,y:0}, {w:canvas.width,h:canvas.height}, 1)
    }
}

addEventListener('load', (e) => {
    const main = new (Main)()

	for (var i = 0; i < doc_items.length; i++) {
        item_values[doc_items[i].name] = doc_items[i].value;
	    // console.log(doc_items[i].name);

        doc_items[i].addEventListener("change", function() {
            item_values[doc_items[i]] = doc_items[i];
            set_values();
        });
	}

    copyBtn.addEventListener("click", function() {
        set_values();
        return_values();
    });

    const deltaTime = 1 / 60
    let accumulatedTime = 0
    let lastTime = 0

    function update (time) {
    accumulatedTime += (time - lastTime) / 1000

    while (accumulatedTime > deltaTime) {
        main.ctx.clearRect(0, 0, canvas.width, canvas.height)

        // main.update(deltaTime)
        main.draw()

        accumulatedTime -= deltaTime
    }
    requestAnimationFrame(update)
    lastTime = time
    }
    update(0)
});

