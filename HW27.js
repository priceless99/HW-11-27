class Monster {
    constructor(type, name, strength) {
        this._type = type;
        this._name = name;
        this._strength = strength;
    }
    get name() {
        return this._name;
    }

    get strength() {
        return this._strength;
    }

    Cname() {
        this._name += 'Ultra';
        console.log('No one can stop you now');
    }

    Attack() {
        this._strength *= 2 ;
        console.log('KAMEHAMEHAAAAA')
    }
}

class EvolvedMonster extends Monster {
    constructor(type, name, strength, speed, weapon) {
        super(type, name, strength,);

        this._speed = speed;
        this._weapon = weapon;
    }

    WeaponCH() {
        this._weapon += 1 ;
        console.log('Congrats you now have a Scythe');
    }
}

let Demon = new Monster('evil', 'Warrior', 8);
let Devil = new EvolvedMonster('Super evil', 'Diablo', 16, 19, 'sword');

Demon.Attack();
Demon.Cname();
Demon.Attack();

Devil.Attack();
Devil.Cname();
Devil.WeaponCH();
