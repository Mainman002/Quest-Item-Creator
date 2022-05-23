import {Images} from "./resources.js";
const img = new Images();

const ctx = canvas.getContext("2d");
const item_result = document.getElementById("item_result");
const copyBtn = document.getElementById("copyBtn");
const common = document.getElementById("common");
const item_type = document.getElementById("itemType");
const skill = document.getElementById("skill");
const projectile = document.getElementById("projectile");
const bitmap = document.getElementById("bitmap");
let item_values = {name:"",common:"", itemType:"",skill:"",projectile:"",bitmap:""};
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
        console.log( combined_values );
    }, 100);
}

function return_values() {
    combined_values = `['${item_values['name']}',"['${item_values['common']}',${item_values['itemType']}]",'${item_values['skill']}','${item_values['projectile']}','${item_values['bitmap']}',(RPG_SLOT_AMMO,)],`;
    item_result.value = combined_values;
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

    update(dt) {

    }

    draw() {
        if ( has_bitmap ) {
            // console.log( item_values["bitmap"] )
            DrawImageSimple(ctx, this.images[ item_values["bitmap"] ], {x:0,y:0}, {w:canvas.width,h:canvas.height}, 1)
        }
        
        // ctx.fillStyle = 'Red';
        // ctx.fillRect(0,0,64,64);
    }
}

addEventListener('load', (e) => {
    const main = new (Main)()

    item_values["name"] = item_name.value
    item_values["common"] = 'COMMON'
    item_values["itemType"] = item_type.value
    // item_values["skill"] = skill.value
    // item_values["projectile"] = projectile.value
    item_values["bitmap"] = bitmap.value

    item_name.addEventListener("change", function() {
        item_values["name"] = item_name.value
        value_changed();
    });

    common.addEventListener("change", function() {
        item_values["common"] = common.value
        value_changed();
    });

    item_type.addEventListener("change", function() {
        item_values["itemType"] = item_type.value
        value_changed();
    });

    // skill.addEventListener("change", function() {
    //     item_values["skill"] = skill.value
    //     value_changed();
    // });

    // projectile.addEventListener("change", function() {
    //     item_values["projectile"] = projectile.value
    //     value_changed();
    // });
    
    bitmap.addEventListener("change", function() {
        if ( bitmap.value ) {
            has_bitmap = true
        } else {
            has_bitmap = false
        }
        item_values["bitmap"] = bitmap.value
        value_changed();
    });

    copyBtn.addEventListener("click", function() {
        value_changed();
        return_values()
    });

    const deltaTime = 1 / 60
    let accumulatedTime = 0
    let lastTime = 0

    function update (time) {
    accumulatedTime += (time - lastTime) / 1000

    while (accumulatedTime > deltaTime) {
        main.ctx.clearRect(0, 0, canvas.width, canvas.height)

        main.update(deltaTime)
        main.draw()

        accumulatedTime -= deltaTime
    }
    requestAnimationFrame(update)
    lastTime = time
    }
    update(0)
});





// rec=[ [ #--- Effects: Leech[0]
//         #--- Item[0], leechType[1], leechTick[2], leechTickRate[3], drainType[4], drainTick[5], drainTickRate[6], resist[7]
//         ["Stolen Soul", "health", 1332, durSecond * 10, "health", 696, durSecond * 5, RPG_RESIST_DISEASE, (RPG_DMG_FIRE,0), ""],
//         ["Weaponfire", "health", 1332, durSecond * 10, "health", 696, durSecond * 5, RPG_RESIST_FIRE, "", RPG_TARGET_OTHER],
//     ],[ #--- Effects: drain[1]
//         #--- Item[0], drainType[1], drainTick[2], drainTickRate[3], resist[4]
//         ["StunB", "health", 20, durSecond * 10, (RPG_EFFECT_STAGE_GLOBAL,"stun",1), (RPG_DMG_IMPACT,5), RPG_RESIST_PHYSICAL],
//         ["Stun", "", "", "", (RPG_EFFECT_STAGE_GLOBAL,"stun",1), "", RPG_RESIST_PHYSICAL],
//     ],[ #--- Effects: damage[2]
//         #--- Item[0], damage[1], resist[2]
//         ["Ice Mourn", (RPG_DMG_COLD,500), RPG_RESIST_PHYSICAL],
//         ["Lightning Strike", (RPG_DMG_ELECTRICAL,100), RPG_DMG_ELECTRICAL],
//     ],[ #--- Spells: Item[3] 
//         # target[1], particleTexture[2], particleBegin[3], iconDst[4], duration[5], castTime[6], recastTime[7] castRange[8] harmful[9] addEffect[10] beginMsg[11] sndBegin[12] afxSpellEffectCasting[13] afxSpellEffectBegin[14] afxSpellEffectEnd[15]
//         ["Tenderize", RPG_TARGET_OTHER, "wake", "WakeEmitter", "SPELLICON_2_5", 5, 0, 0, 10, True, "StunB", "$tgt is stunned and begins to bleed.", "", "", "", ""],
//         ["Leech", RPG_TARGET_OTHER, "fire2", "DragonFireEmitter", "SPELLICON_2_5", 50, 0, 0, 10, True, "Weapon Leech", "GreatBallImpact", "$src weapon sucks the life from $tgt", "sound/character/dragon_breathfire4.ogg", "", "", ""],
//         ["Ice Mourn", RPG_TARGET_OTHER, "wake", "WakeEmitter", "SPELLICON_2_5", 25, 0, 1000, 10, True, "Ice Mourn", "GreatBallImpact", "$tgt is blasted by freezing vapor.", "character/Dragon_Breathice1.ogg", "IcSRingCasting", "IcSRingImpact", "IcSRingImpact"],
//         ["Lightning Strike", RPG_TARGET_OTHER, "wake", "WakeEmitter", "SPELLICON_2_5", 50, 0, 0, 10, True, "Lightning Strike", "GreatBallImpact", "$tgt is shocked by lightning bolt.", "", "", "ThorHammerImpact", ""],
//         ["Stun", RPG_TARGET_OTHER, "wake", "WakeEmitter", "SPELLICON_2_5", 5, 0, 0, 10, True, "Stun", "GreatBallImpact", "$src stuns $tgt", "", "", "ThorHammerImpact", "", "Stun"],
//         ["Stolen Soul", RPG_TARGET_OTHER, "wake", "WakeEmitter", "SPELLICON_2_5", 50, 0, 0, 10, True, "Stolen Soul", "GreatBallImpact", "$src feels exhilarated as they drains the essence $tgt's very soul.", "", "", "", "", ""],
//     ],[#--- common[4]
//         ["Dagger", "['WEAPON','COMMON']", "1H Slash", (RPG_SLOT_PRIMARY, RPG_SLOT_SECONDARY), RPG_ITEM_INDESTRUCTIBLE, "EQUIPMENT/SWORDS/24", "weapons/dagger00.dts", 10, 10, 1, 10, "", "", "Simple dagger, used by theives"],

//         ["Combatant Club", "['WEAPON','UNCOMMON']", "1H Impact", (RPG_SLOT_PRIMARY,RPG_SLOT_SECONDARY), RPG_ITEM_INDESTRUCTIBLE, "EQUIPMENT/WEAPONS/IMPACT/5", "weapons/spikeclub.dts", 3, 30, 1, 5, "", "", "", "", ""],



//         ["Composite Longbow","['COMMON','BOW']","Archery","ArrowProjectile","EQUIPMENT/BOWS/3","weapons/bow04.dts","",(RPG_SLOT_AMMO,),11,20,44,[1,5,50,1],(["dex",150],["agi",150],["ref",150]),"",""],["Feather Arrow","['COMMON','BOW','AMMO']","Arrow","ArrowProjectile","EQUIPMENT/AMMO/1",(RPG_SLOT_AMMO,),750,50,30,10,22,[1,0,0,0],RPG_ITEM_INDESTRUCTIBLE,""],



//         for ob in rec[0]: 
//         effect = DBEffectProto(name=ob[0],leechType=ob[1],leechTick=ob[2],leechTickRate=ob[3],drainType=ob[4],drainTick=ob[5],drainTickRate=ob[6],resist=ob[7]) 
//         if ob[8]: effect.addDamage(ob[8][0],ob[8][1])
//         if ob[9]: target=ob[9]
    
//     for ob in rec[1]:
//         effect=DBEffectProto(name=ob[0],drainType=ob[1],drainTick=ob[2],drainTickRate=ob[3],resist=ob[6])
//         if ob[5]: effect.addDamage(ob[5][0],ob[5][1]), 
//         if ob[4]: effect.addStat(ob[4][0],ob[4][1],ob[4][2])
    
//     for ob in rec[2]:
//         effect=DBEffectProto(name=ob[0],resist=ob[2])
//         if ob[1]: effect.addDamage(ob[1][0],ob[1][1]) 
    
//     for ob in rec[3]:
//         spell=DBSpellProto(name=ob[0],target=ob[1],particleTextureBegin=ob[2],particleBegin=ob[3],iconDst=ob[4],duration=ob[5],castTime=ob[6],recastTime=ob[7],castRange=ob[8],harmful=ob[9],beginMsg=ob[11],sndBegin=ob[12]) 
//         if ob[10]:spell.addEffect(ob[10])
//         if ob[11]:afxSpellEffectCasting=ob[11]
//         if ob[12]:afxSpellEffectBegin=ob[12]
//         if ob[13]:afxSpellEffectEnd=ob[13]
    
//     for ob in rec[4]:
//         item = DBItemProto(name=ob[0],itemType=ob[1],skill=ob[2],slots=ob[3],flags=ob[4],wpnDamage=ob[7],wpnRate=ob[8],wpnRange=ob[9],worthGold=ob[10])
//         if ob[5]: item.bitmap = ob[5]
//         if ob[6]: item.model = ob[6]
//         if ob[11]: item.material = ob[11]
//         if ob[12]: item.addRace(ob[12])
//         if ob[13]: item.desc = ob[13]
    
//     for ob in rec[5]:
//         item = DBItemProto(name=ob[0],itemType=ob[1],skill=ob[2],slots=ob[3],flags=ob[4],wpnDamage=ob[7],wpnRate=ob[8],wpnRange=ob[9],worthGold=ob[10]) 
//         if ob[5]: item.bitmap = ob[5]
//         if ob[6]: item.model = ob[6]
//         if ob[11]: item.material = ob[11]
//         if ob[12]: item.addRace(ob[12])
//         if ob[13]: item.desc = ob[13]
//         if ob[14]: item.addSpell( ob[14][0], ob[14][1], ob[14][2] )
//         if ob[15]: item.equippedParticle = ob[15]
//         # if ob[16]: item.equippedParticleTexture = "fire"
    
//     for bow in rec[6]:
//         item = DBItemProto(name=bow[0],itemType=bow[1],skill=bow[2],wpnAmmunitionType=bow[3],bitmap=bow[4],model=bow[5],material=[6],slots=bow[7],wpnRate=bow[8],wpnDamage=bow[9],wpnRange=bow[10],
//         worthCopper=bow[11][0],worthSilver=bow[11][1],worthTin=bow[11][2],worthGold=bow[11][3])
//         if bow[12]:
//             for stat in bow[12]:item.addStat(stat[0],stat[1])
//         if bow[13]:item.flags=bow[13]
//         if bow[14]:item.rating=bow[14]
    
//     for ammo in rec[7]:
//         item = DBItemProto(name=ammo[0],itemType=ammo[1],isAmmunitionType=ammo[2],projectile=ammo[3],bitmap=ammo[4],slots=ammo[5],stackMax=ammo[6],stackDefault=ammo[7],
//         speed=ammo[8],wpnDamage=ammo[9],wpnRange=ammo[10],worthCopper=ammo[11][0],worthSilver=ammo[11][1],worthTin=ammo[11][2],worthGold=ammo[11][3])
//         if ammo[12]:item.flags=ammo[12]
//         if ammo[13]:item.rating=ammo[13]
    
//     for basic_item in rec[8]:
//         item = DBItemProto(name=basic_item[0],itemType=basic_item[1],bitmap=basic_item[2],stackMax=basic_item[3],stackDefault=basic_item[4],useMax=basic_item[5],desc=basic_item[6],worthCopper=basic_item[7][0],worthSilver=basic_item[7][1],worthTin=basic_item[7][2],worthGold=basic_item[7][3])
    
    




