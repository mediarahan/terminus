/*
var i=0
var skillCount=0
var forgetSkillCount=0

while (i < 1)
{
    n++;
    if ($gameParty.leader().isLearnedSkill(skillCount) == true)
    {
        $gameParty.leader().forgetSkill(skillCount);
        forgetSkillCount++;
    }

    if (forgetSkillCount == 3)
        $gameMessage.add("Skills has been reset!");
        break;
}

return;
*/

// kode forget skill, jalan kalau di restriksi setiap pilih harus 3 kali.
// value 2 dari variabel eventing in-game. Dan variabelnya harus di set dulu untuk aktor yang mau diganti skillnya
/*
var skillCount = 4; var forgetSkillCount = 0;
while (0 < 1) {
    skillCount++;
    if ($gameActors.actor($gameVariables.value(2)).isLearnedSkill(skillCount) == true) {
        $gameActors.actor($gameVariables.value(2)).forgetSkill(skillCount);
        forgetSkillCount++;
    }
    if (forgetSkillCount == 3) {
        $gameMessage.add("Skills has been reset!");
        break
    }
}
*/

/*
var skillCount = 4;
while (0<1) {
    skillCount++;
    if ($gameActors.actor($gameVariables.value(2)).isLearnedSkill(skillCount) == true) {
        $gameMessage.add("Please choose 3 unique skills.")
        var self = $gameMap._interpreter;
        self._params = ["SkillChoose"];
        self.command119();

    }
    else 
        break
}

for (let i=0; i<36; i++) {
    $gameVariables.setValue(3, 5);
    if ($gameActors.actor($gameVariables.value(2)).isLearnedSkill($gameVariables.value(3)) == true) {
        $gameVariables.setValue(1, $gameVariables.value(1) - 1);
    }
}
*/

/*
/// kodingan yang jalan, tapi aing juga gapaham kenapa
var skillCount = 4; var forgetSkillCount = 0;
for (let i=0 ; i<36 ; i++) {
    skillCount++;
    if ($gameActors.actor($gameVariables.value(2)).isLearnedSkill(skillCount) == true) {
        $gameActors.actor($gameVariables.value(2)).forgetSkill(skillCount);
        forgetSkillCount++;
    }
    if (forgetSkillCount == 3) {
        $gameMessage.add("Skills has been reset!");
        break
    }
}
*/

//heal 17
var h = a.mhp * 0.17; b.gainHp(h); a.gainHp(-h); h

//heal 40
var h = a.mhp * 0.4; var i = a.mhp * 0.3; b.gainHp(h); a.gainHp(-i);

//vitality burst
var h = a.mhp * 0.3; var i = a.mhp * 0.6; b.gainHp(h); a.gainHp(-i);

// poisoned quickstrike
a.agi * 2 - b.def * 1

a.add_state(17); b.add_state(15); a.agi * 2 - b.def * 1

//eye of the sealer
for (let i=0 ; i<25 ; i++)
{
    if (b.isStateAffected(i) == true)
        v[5] += 1
}

for (let i=0 ; i<25 ; i++) {if (b.isStateAffected(i) == true){v[5] += 1 : v[5] == v[5]; (a.mat * 3 - b.mdf * 2)  * v[5];}}

b.isStateAffected(15) ? (a.mat * 3 - b.mdf * 2) : 10000;

if (b.isStateAffected(4) || b.isStateAffected(5) || b.isStateAffected(6)) || b.isStateAffected(15)) || b.isStateAffected(10)) || b.isStateAffected(22)){a.atk * 2.76 - b.def} else {a.atk * 2.30 - b.def}

var r = 1;
if(b.isStateAffected(4)) {
    r = 1.75;
} else if(b.isStateAffected(31)) {
    b.removeState(31);
    b.addState(39);
} else {
    b.addState(31);
    r = 0.75;
}
a.mat * r


var r = 1;
for(let i=0 ; i<25 ; i++) {
    if(b.isStateAffected(i)){
        r+=1
    }   
}
(a.mat * 3 - b.mdf * 2) * r;

//Jalan!!! Eye of the Sealer
var r = 1; for(let i=0 ; i<25 ; i++) {if(b.isStateAffected(i)){r+=1}}(a.mat * 3 - b.mdf * 2) * r; 

//TS - gilded supernova
    // damage
a.mat * 7 - b.def * 2;
    //healing
    for (let i = 1; i <= 4; i++) { var actor = $gameActors.actor(i); if (actor.isStateAffected(1) == true) { actor.gainHp(0) } else actor.gainHp(0.5 * actor.mhp) }

//TS - grand lunar reap
    // damage
    a.mat * 7 - b.def * 2;
    //cleansing
    for(let i=0;i<25; i++){
        var actor = $gameActors.actor(i)
        actor.removeState(i);
    }

    for(let i=0;i<25; i++){ var actor = $gameActors.actor(i); actor.removeState(i);}

    // remove buff, jalan tapi remove kabeh
    for(let i=1;i<=4; i++) {
        var actor = $gameActors.actor(i);
        for (let j=0;j<8; j++){
            actor.removeBuff
        }
    }
        
    //remove state
    for(let i=1;i<=4; i++) {
        var actor = $gameActors.actor(i);
        for (let j=0;j<14; j++){
            actor.removeState(j)
        }
    }

    // manjangin titit. Jk, jk, buat remove semua actor
    for (let i=1;i<=11;i++) {
        var partyMember = $gameParty.removeActor(i);
    }

    // lagi gacha malem2, capek. Nyobain buat random resource
    var num = [0,1];
    
    for (let i=1;i<=6;i++) {
        var result = num[Math.floor(Math.random() * num.length)];
        $gameVariables.setValue(29, $gameVariables.value(29) - result);       
    }

$gameParty.numItems($dataItems[45]) >= 1 && $gameParty.numItems($dataItems[40]) >= 2

//HP
if (($gameParty.numItems($dataItems[45]) >= 1) && ($gameParty.numItems($dataItems[40]) >= 2))
//HHP
if (($gameParty.numItems($dataItems[45]) >= 2) && ($gameParty.numItems($dataItems[40]) >= 2) && ($gameParty.numItems($dataItems[39]) >= 1))
//MRP
if (($gameParty.numItems($dataItems[45]) >= 2) && ($gameParty.numItems($dataItems[39]) >= 3))
//P
if (($gameParty.numItems($dataItems[45]) < 2) || ($gameParty.numItems($dataItems[41]) < 1) || ($gameParty.numItems($dataItems[48]) < 1) || ($gameParty.numItems($dataItems[49]) < 1) || ($gameParty.numItems($dataItems[50]) < 1))
//RP
if (($gameParty.numItems($dataItems[45]) >= 1) && ($gameParty.numItems($dataItems[42]) >= 1) && ($gameParty.numItems($dataItems[43]) >= 2))

//SHP
if (($gameParty.numItems($dataItems[45]) >= 3) && ($gameParty.numItems($dataItems[40]) >= 2) && ($gameParty.numItems($dataItems[42]) >= 2))
//MHP
if (($gameParty.numItems($dataItems[45]) >= 3) && ($gameParty.numItems($dataItems[40]) >= 3) && ($gameParty.numItems($dataItems[42]) >= 1))
//HMHP
if (($gameParty.numItems($dataItems[45]) >= 3) && ($gameParty.numItems($dataItems[39]) >= 2) && ($gameParty.numItems($dataItems[42]) >= 2))
//CT
if (($gameParty.numItems($dataItems[39]) >= 2) && ($gameParty.numItems($dataItems[41]) >= 2) && ($gameParty.numItems($dataItems[47]) >= 1))
//EiaB
if (($gameParty.numItems($dataItems[45]) >= 2) && ($gameParty.numItems($dataItems[49]) >= 2) && ($gameParty.numItems($dataItems[46]) >= 2))

//jangar anying hayang gera2 beres ieu game

for(let i=1;i<=4; i++) 


if ($gameActors.actor(1).isStateAffected(37)){
    $gameParty.gainGold(100);}

//bece didet haf tukat miof. Cek "Stuffed" buat unavailability
for(let i=1;i<=11; i++) {
    var actor = $gameActors.actor(i);
    if ($gameParty.members().contains(actor) && !(actor.isStateAffected(37)))
        $gameParty.gainGold(100);
}

//Kondisi "Sehat" / Available, Statenya = -1. Kalau ke knockout / laper, statenya berubah jadi 2 (atau 1 kalau hunger)
//Setiap hari semua variabel state -1. Jadi, jangan lupa pas awal2 banget, ubah variabelnya jadi -1 supaya "sehat".
for(let i=1;i<=11; i++) {
    var actor = $gameActors.actor(i);
    if ($gameParty.members().contains(actor) && !(actor.isStateAffected(37)))
        for(let j=21;j<=28; j++){
            $gameVariables.setValue(j,Math.random() * 2)
            if ($gameVariables.value(j) <=0)
                break;
            else {
            $gameMessage.setFaceImage('', 0);
            $gameMessage.setBackground(0);
            $gameMessage.setPositionType(2);
            $gameMessage.add('Due to fatigue, \\c[6]\\n[i]\\c[0] will not be available for \\c[1]\\v[j]\\c[0] days.');
            this.setWaitMode('message');
            }
        }
}

//Disingkat
for(let i=1;i<=11; i++) {
    var actor = $gameActors.actor(i);
    if ($gameParty.members().contains(actor) && !(actor.isStateAffected(37)))
        for(let j=21;j<=28; j++){
            $gameVariables.setValue(j,Math.random() * 2)
            if ($gameVariables.value(j) <=0)
                break;
            else {
            $gameMessage.setFaceImage('', 0); $gameMessage.setBackground(0); $gameMessage.setPositionType(2);
            $gameMessage.add('Due to fatigue, \\c[6]\\n[i]\\c[0] will not be available for \\c[1]\\v[j]\\c[0] days.');
            this.setWaitMode('message');}   }
}

for(let i=1;i<=11; i++) {
    var actor = $gameActors.actor(i);
    if ($gameParty.members().contains(actor) && !(actor.isStateAffected(37)))
        $gameVariables.setValue(22,Math.random() * 3);

for(let i=1;i<=11; i++) {
    var actor = $gameActors.actor(i);
    if ($gameParty.members().contains(actor) && !(actor.isStateAffected(37)))
        for(let j=21;j<=28; j++){
            $gameVariables.setValue(j,Math.random() * 3);

j=21;
for (let i=1;i<=11; i++) {
    if (i == 5 || i == 6 || i == 7)
        continue;
    else {
        if($gameParty.members().contains(actor) && !(actor.isStateAffected(37)))
            $gameVariables.setValue(j,Math.random() * 3); j+=1;
    }
}

j=21;
for
