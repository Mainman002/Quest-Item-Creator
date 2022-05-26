import {Models} from "./resources.js";

addEventListener('load', (e) => {
    const img = new Models();

    // ["Stolen Soul", "health", 1332, durSecond * 10, "health", 696, durSecond * 5, RPG_RESIST_DISEASE, (RPG_DMG_FIRE,0), ""],

    // for ob in rec[0]: 
    //     effect = DBEffectProto(name=ob[0],leechType=ob[1],leechTick=ob[2],leechTickRate=ob[3],drainType=ob[4],drainTick=ob[5],drainTickRate=ob[6],resist=ob[7]) 
    //     if ob[8]: effect.addDamage(ob[8][0],ob[8][1])
    //     if ob[9]: target=ob[9]

    const ctx = canvas.getContext("2d");
    const txt_update_items = [item_name,leech_tick,leech_tick_rate,drain_tick,drain_tick_rate,leech_type,drain_type,resist,bitmap_type,insert_effect,add_effect,copyBtn,item_result];
    const doc_items = [item_name,leech_tick,leech_tick_rate,drain_tick,drain_tick_rate,leech_type,drain_type,resist,bitmap_type,insert_effect,add_effect,copyBtn,item_result]
    let item_values = {name:"",leech_tick:"",leech_tick_rate:"",drain_tick:"",drain_tick_rate:"",leech_type:"",drain_type:"",resist:"",bitmap_type:"",insert_effect:"",add_effect:"",copyBtn:"",item_result:""};
    let combined_values = "";
    let bitmap_items = []

    function set_img_list(main) {
        main.active_image = bitmap.selectedIndex;
        
        if ( main.active_image_type != bitmap_type.selectedIndex ) {
            main.active_image_type = bitmap_type.selectedIndex;
            for ( let item in bitmap_items ) {
                bitmap_items[item].remove (bitmap_items[item])  
            }
            
            for (let key in main.images[main.active_image_type]) {
                let opt = document.createElement('option');
                opt.name = 'bitmap_type_option';
                opt.class = 'bitmap_type_option';
                opt.id = 'bitmap_type_option';
                opt.value = main.images[main.active_image_type][key][1];
                opt.innerHTML = main.images[main.active_image_type][key][0];
                bitmap.appendChild(opt);
                bitmap_items.push(opt);
            }
            
        } 
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
            set_values();
        }, 100);
    }

    function set_values() {
        main.active_image = bitmap.selectedIndex;

        for (let i = 0; i < doc_items.length; i++) {
            item_values[doc_items[i].name] = doc_items[i].value
        }                                        
        
        combined_values = `["${item_values['item_name']}",${item_values['leech_tick']},durSecond*${item_values['leech_tick_rate']},${item_values['drain_tick']},durSecond*${item_values['drain_tick_rate']},${item_values['leech_type']},${item_values['drain_type']},${item_values['resist']},[${item_values['add_effect']}] ],`;
        item_result.value = combined_values;
    }

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
        this.active_image = 0;
        this.active_image_type = 10;
        }

        // update(dt) {

        // }

        draw() {
            if (this.images[bitmap_type.selectedIndex]) {
                if (this.images[bitmap_type.selectedIndex][this.active_image]) {
                    DrawImageSimple(ctx, this.images[bitmap_type.selectedIndex][this.active_image][3], {x:0,y:0}, {w:canvas.width,h:canvas.height}, 1)
                }
            }
        }
    }

    const main = new (Main)()

	for (let i = 0; i < doc_items.length; i++) {
        item_values[doc_items[i].name] = doc_items[i].value;
	    // console.log(doc_items[i].name);

        doc_items[i].addEventListener("change", function() {
            item_values[doc_items[i]] = doc_items[i];
            set_values();
            // console.log(bitmap["options"][bitmap.selectedIndex].value)
        });
	}

    bitmap_type.addEventListener("click", function() {
        set_img_list(main);
        set_values();
    });

    bitmap_type.addEventListener("change", function() {
        set_img_list(main);
        set_values();
    });

    for (let i = 0; i < txt_update_items.length; i++) {
        txt_update_items[i].addEventListener("input", function() {
            set_values();
        });
    }

    bitmap.addEventListener("change", function() {
        set_values();
    });

    insertStatBtn.addEventListener("click", function() {
        add_effect.value = add_effect.value + `(${insert_effect.value},${effect_amount.value}),`;
        set_values();
    });

    copyBtn.addEventListener("click", function() {
        set_values();
        return_values();
    });

    set_img_list(main);
    // set_model_list(main);
    set_values();

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

    // Original For Loop
    // name[0],itemType[1],skill[2],slots[3],flags[4],bitmap[5],
    // model[6],wpnDamage[7],wpnRate[8],wpnRange[9],worthGold[10],
    // material[11],addRace(ob[12]),desc[13],
    // addSpell( ob[14][0], ob[14][1], ob[14][2] ),equippedParticle[15]
    // Original Result
    // ["Emerald Tenderizer","['WEAPON']","1H Impact",(RPG_SLOT_PRIMARY,RPG_SLOT_SECONDARY),RPG_ITEM_INDESTRUCTIBLE,"EQUIPMENT/MACE/EMERALD/2","weapons/macebladed.dts",10,10,2,5,"","","",("Tenderize",RPG_ITEM_TRIGGER_MELEE,1), ""],

// New For Loop
// name=ob[0],leech_tick=ob[1],leech_tick_rate=ob[2],drain_tick=ob[3],drain_tick_rate=ob[4],leech_type=ob[5],drain_type=ob[6],resist=ob[7],add_effect=ob[8]

// Uncomment and use in tmmokit
// for ob in rec[9]:
//     effect = DBEffectProto(name=ob[0],leechTick=ob[1],leechTickRate=ob[2],drainTick=ob[3],drainTickRate=ob[4],leechType=ob[5],drainType=ob[6],resist=ob[7]) 
//     # if ob[8]: effect.target=ob[8]
//     if ob[8]: 
//         for damage in ob[8]: effect.addDamage(damage[0],damage[1])