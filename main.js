// CLASES, POLIMORFISMO, HERENCIA Y MAS

class RecetaEspada{

    //Constructor de la clase espada con sus propiedades
    constructor(material, durabilidad, efecto){
        this.material = material;
        this.dano = 10;
        this.resistencia = 15/2;
        this.info = [];
        this.setMaterial = material;
        this.setDurabilidad = durabilidad;
        this.info.push(this.getDano, durabilidad, efecto, this.resistencia);
        //console.log(this.info);
    }
    atacar(){
        let durabilidad = this.getDurabilidad;
        let info = "";
        if(durabilidad <= 0 && this.material != null){
            this.setMaterial = null;
            info = `La espada de '${this.material}' realizo un daño de ${this.info[0]}, la espada se rompio, inflinge efecto de ${this.info[7]} al enemigo`
        }else if(durabilidad > 0){
            durabilidad = durabilidad - (Math.floor(Math.random() * 5) + 1); 
            info = `La espada de '${this.material}' realizo un daño de ${this.info[0]}; la durabilidad es ${this.getDurabilidad} / ${this.info[6]}, inflinge efecto de ${this.info[7]} al enemigo`;
            this.setDurabilidad = durabilidad;
        }else{
            info = `Sin espada para golpear`;
        }
        return info;
    }
    parry(){
        let porcentaje = (Math.floor(Math.random() * 2) + 1);
        let durabilidad = this.getDurabilidad;
        let info = "";
        if(durabilidad <= 0 && this.material != null && porcentaje == 1){
            info = `La espada de '${this.material}' resistio un daño de ${this.info[4]}, la espada se rompio, se realizo un contragolpe de ${this.info[0]} de daño al enemigo`;  
            this.setMaterial = null;
         }else if(durabilidad <= 0 && this.material != null && porcentaje != 1 ){
            info = `La espada de '${this.material}' resistio un daño de ${this.info[4]}, la espada se rompio, no se realiza contragolpe`;
            this.setMaterial = null;
         }else if(durabilidad > 0 && porcentaje == 1){
            durabilidad = durabilidad - (Math.floor(Math.random() * 5) + 1); 
            info = `La espada de '${this.material}' resistio un daño de ${this.info[4]}; la durabilidad es  ${this.getDurabilidad} / ${this.info[6]}, se realizo un contragolpe de ${this.info[0]} de daño al enemigo`;
            this.setDurabilidad = durabilidad;
        }else if(durabilidad > 0 && porcentaje != 1){
            info = `La espada de '${this.material}' resistio un daño de ${this.info[4]}; la durabilidad es ${this.getDurabilidad} / ${this.info[6]}, no se realiza contragolpe`;
            this.setDurabilidad = durabilidad;  
        }else{
            info = `Daño directo`;
        }
        return info;
    }

        //Set Y Get

        //Set para nuestra espada
        set setMaterial(material){
            this.material = material;
            switch(material){
                case "Madera":
                    this.info[0] = (this.getDano+5);
                    this.info[4] = (this.getResistencia*0.2);
                    break;
                case "Piedra":
                    this.info[0] = (this.getDano+12);
                    this.info[4] = (this.getResistencia*0.6);
                    break;
                case "Hierro":
                    this.info[0] = (this.getDano+20);
                    this.info[4] = (this.getResistencia*0.75);
                    break;
                case "Diamante":
                    this.info[0] = (this.getDano+32);
                    this.info[4] = (this.getResistencia*1.25);
                    break;

            }
        }
        //Get para nuestra espada
        get getMaterial(){
            return this.material;
        }e

        //Set para el parry
        set setResistencia(Resistencia){
            this.resistencia = Resistencia;
        }
        //Get para el parry
        get getResistencia(){
            return this.resistencia;
        }

        //Set para el daño
        set setDano(Dano){
            this.dano = Dano;
        }
        //Get para el daño
        get getDano(){
            return this.dano;
        }

        //Set para la durabilidad
        set setDurabilidad(durabilidad){
            this.durabilidad = durabilidad;
        }
        //Get para la durabilidad
        get getDurabilidad(){
            return this.durabilidad;
        }
}

// CLASES DE ESPADAS A PARTIR DEL DISEÑO

class EspadaMadera extends RecetaEspada{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }  
}

class EspadaPiedra extends RecetaEspada{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}

class EspadaHierro extends RecetaEspada{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}

class EspadaDiamante extends RecetaEspada{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}

const obj = new EspadaMadera("Madera", 10, "Golpe");
const obj2 = new EspadaPiedra("Piedra", 20, "Paro");
const obj3 = new EspadaHierro("Hierro", 40, "Sangrado");
const obj4 = new EspadaDiamante("Diamante", 80, "Reduccion de defensa");


// console.log(obj.parry());
// console.log(obj.parry());
// console.log(obj.parry());
// console.log(obj.parry());
// console.log(obj.parry());
// console.log(obj.parry());
// console.log(obj.parry());

/*
console.log(obj2.parry());
console.log(obj3.parry());
console.log(obj4.parry());
*/


 console.log(obj.atacar());
 console.log(obj.atacar());
// console.log(obj2.atacar());
// console.log(obj2.atacar());
// console.log(obj3.atacar());
// console.log(obj3.atacar());
// console.log(obj3.atacar());
// console.log(obj4.atacar());
// console.log(obj4.atacar());
// console.log(obj4.atacar());
// console.log(obj4.atacar());

