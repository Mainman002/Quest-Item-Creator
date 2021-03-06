import {Models} from "./resources.js";

alert("Page Not Ready Yet");

addEventListener('load', (e) => {
    const img = new Models();

    const ctx = canvas.getContext("2d");
    const txt_update_items = [item_name,flag_common,flag_type,skill,slot_right,slot_left,destructable,material,speed,damage,range,armor,copper,silver,tin,gold,spell_name,desc,spell_trigger,spell_damage,race,equiped_particle,add_stats];
    const doc_items = [item_name,flag_common,flag_type,skill,slot_right,slot_left,destructable,bitmap,material,speed,damage,range,armor,copper,silver,tin,gold,spell_name,desc,spell_trigger,spell_damage,race,equiped_particle,add_stats]
    let item_values = {name:"",flag_common:"", flag_type:"",skill:"",slot_right:"",slot_left:"",destructable:"",bitmap:"",model:"",model_type:"",material:"",speed:"",damage:"",range:"",armor:"",bronze:"",silver:"",tin:"",gold:"",desc:"",race:"",spell_name:"",spell_trigger:"",spell_damage:"",equiped_particle:"",add_stats:""};
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
        
        if ( item_values['spell_name'] ) {
            combined_values = `["${item_values['item_name']}",["${item_values['flag_type']}","${item_values['flag_common']}"],"${item_values['skill']}",(${item_values['slot_right']},${item_values['slot_left']}),${item_values['destructable']},"${item_values['bitmap']}","${main.images[bitmap_type.selectedIndex][main.active_image][2]}","${item_values['material']}",${item_values['speed']},${item_values['damage']},${item_values['range']},${item_values['armor']},${item_values['copper']},${item_values['silver']},${item_values['tin']},${item_values['gold']},"${item_values['desc']}","${item_values['equiped_particle']}","${item_values['race']}",("${item_values['spell_name']}",${item_values['spell_trigger']},${item_values['spell_damage']}), [${item_values['add_stats']}] ],`;
        } else {
            combined_values = `["${item_values['item_name']}",["${item_values['flag_type']}","${item_values['flag_common']}"],"${item_values['skill']}",(${item_values['slot_right']},${item_values['slot_left']}),${item_values['destructable']},"${item_values['bitmap']}","${main.images[bitmap_type.selectedIndex][main.active_image][2]}","${item_values['material']}",${item_values['speed']},${item_values['damage']},${item_values['range']},${item_values['armor']},${item_values['copper']},${item_values['silver']},${item_values['tin']},${item_values['gold']},"${item_values['desc']}","${item_values['equiped_particle']}","${item_values['race']}","", [${item_values['add_stats']}] ],`;
        }
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
        add_stats.value = add_stats.value + `(${insert_stat.value},${stat_amount.value}),`;
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
    // name=ob[0],itemType=ob[1],skill=ob[2],slots=ob[3],flags=ob[4],bitmap=ob[5],model=ob[6],material=ob[7],wpnRate=ob[8],wpnDamage=ob[9],wpnRange=ob[10],worthCopper=ob[11],worthSilver=ob[12],worthTin=ob[13],worthGold=ob[14],desc=ob[15],equippedParticle=ob[16],addRace=ob[17],addSpell=ob[18]


    // Uncomment and use in tmmokit
    // for ob in rec[9]:
    //     item = DBItemProto(name=ob[0],itemType=ob[1],skill=ob[2],slots=ob[3],flags=ob[4],bitmap=ob[5],model=ob[6],material=ob[7],wpnRate=ob[8],wpnDamage=ob[9],wpnRange=ob[10],armor=ob[11],worthCopper=ob[12],worthSilver=ob[13],worthTin=ob[14],worthGold=ob[15],desc=ob[16]) 
    //     if ob[17]: item.equippedParticle = ob[17]
    //     if ob[18]: item.addRace(ob[18])
    //     if ob[19]: item.addSpell( ob[19][0], ob[19][1], ob[19][2] )
    //     if ob[20]:
    //         for stat in ob[20]: item.addStat(stat[0],stat[1])
