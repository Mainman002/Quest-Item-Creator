import {Models} from "./resources.js";

alert("Page Not Ready Yet");

addEventListener('load', (e) => {
    const img = new Models();

    const ctx = canvas.getContext("2d");
    const txt_update_items = [item_name];
    const doc_items = [item_name]
    let item_values = {name:"",duration:"",castTime:"",recastTime:"",castRange:"",insert_afxCasting:"",insert_afxEffectBegin:"",insert_afxEffectEnd:""};
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
        
        combined_values = `["${item_values['item_name']}", ],`;
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
    // ["Empty Fire", RPG_TARGET_OTHER, "wake", "WakeEmitter", "SPELLICON_2_5", 5, 0, 0, 10, True, "Mage Blaster", "$tgt is stunned and begins to bleed.", "", "", "", ""],
    // name,target,particleTextureBegin,particleBegin,iconDst,duration,castTime,recastTime,castRange,harmful,beginMsg,sndBegin,[(afxSpellEffectCasting,afxSpellEffectBegin,afxSpellEffectEnd)], [addEffect]

    // name,target,particleTextureBegin,particleBegin,iconDst,duration,castTime,recastTime,castRange,harmful,beginMsg,sndBegin

    // Uncomment and use in tmmokit
    // for ob in rec[3]:
    //     spell=DBSpellProto(name=ob[0],target=ob[1],particleTextureBegin=ob[2],particleBegin=ob[3],iconDst=ob[4],duration=ob[5],castTime=ob[6],recastTime=ob[7],castRange=ob[8],harmful=ob[9],beginMsg=ob[10],sndBegin=ob[11]) 
    //     if ob[12]:
    //         for afxEffect in ob[12]: spell.addEffect(afxEffect[0],afxEffect[1],afxEffect[2])
    //     if ob[13]: 
    //         for damage in ob[16]: spell.addEffect(damage)


    //     if ob[12]:spell.afxSpellEffectCasting=ob[12]
    //     if ob[13]:spell.afxSpellEffectBegin=ob[13]
    //     if ob[14]:spell.afxSpellEffectEnd=ob[14]
    //     if ob[15]:spell.addEffect(ob[15])