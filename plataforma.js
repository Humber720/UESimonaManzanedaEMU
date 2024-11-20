function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "ojo.png"; // Cambia a la imagen de ojo cerrado
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "ojo2.png"; // Cambia de nuevo a la imagen de ojo abierto
    }
}

// Lista de usuarios y contraseñas
const users = {
//1RO PRIMARIA
    "FrancoGael": "15383976",       //lista 1)
    "SebastianZabdiel": "15098838", //lista 2)
    "Diego": "15200288",            //lista 3)
    "DanitsJhane": "16916466",      //lista 4)
    "Shiomara": "16789062",         //lista 5)
    "IkerAsad": "15099063",         //lista 6)
    "JuanMateo": "16787132",        //lista 7)
    "LeilaScarlett": "15310814",    //lista 8)
    "YostinBrus": "15031268",       //lista 9)
    "CarlosLeonel": "15231995",     //lista 10)
    "Nataly": "17389914",           //lista 11)
    "MadeleineNikol": "16117234",   //lista 12)
    "LuzEvelin": "17310778",        //lista 13)
    "YarelyLuz": "15041299",        //lista 14)
    "AstridZoe": "15171572",        //lista 15)
    "MishelDaniela": "15230850",    //lista 16)
    "BiancaMayte": "16786439",      //lista 17)

//2DO PRIMARIA
    "ThaisDaniela": "17259685",     //lista 1)
    "AbnerZenon": "16653592",       //lista 2)
    "NadiaWara": "16689391",        //lista 3)
    "DannaAvril": "17414259",       //lista 4)
    "HansAnthony": "15790869",      //lista 5)
    "LuzCamila": "17310758",        //lista 6)
    "DanyJail": "17272587",         //lista 7)
    "YuanEduardo": "15680683",      //lista 8)
    "Ismael": "16911786",           //lista 9)

//3RO DE PRIMARIA
    "ArianaAlessandra": "14427120",     //lista 1)
    "GustavoAnthony": "16176647",       //lista 2)
    "AndersonVladimir": "15605576",     //lista 3)
    "SimonSantiago": "17265383",        //lista 4)
    "KiaraLiz": "16534327",             //lista 5)
    "YasitMilan": "16160305",           //lista 6)
    "Alejandra": "16403548",            //lista 7)
    "CarlosGael": "15642783",           //lista 8)
    "GaelOmar": "14480516",             //lista 9)
    "Itcel": "16324027",                //lista 10)
    "DamianNoel": "15141072",           //lista 11)
    "JohanAldair": "16786700",          //lista 12)
    "BeymarAngel": "17173764",          //lista 13)
    "CoralainAydee": "14802040",        //lista 14)
    "Jaciel": "16700337",               //lista 15)
    "RominaGiselle": "17556655",        //lista 16)
    "BenjaminFidel": "16771922",                   //lista 17)

//4TO DE PRIMARIA
    "Sharai": "16297336",           //lista 1)
    "AlisonMaya": "14479026",       //lista 2)
    "Yadiel": "15645677",           //lista 3)
    "Jhostin": "16789053",          //lista 4)
    "MairynZulami": "17451940",     //lista 5)
    "MaryLuz": "16789847",          //lista 6)
    "AnyheloMateo": "17414278",     //lista 7)
    "ViancaKaren": "15306099",      //lista 8)
    "Alejandro": "14047775",        //lista 9)
    "AndreiGemio": "14801125",      //lista 10)
    "HarolJhonnatan": "15333051",   //lista 11)
    "NoemiYesica": "16220469",      //lista 12)
    "CamilaShelly": "17184594",     //lista 13)
    "Magali": "16960822",           //lista 14)
    "OrianaYaiza": "16368496",      //lista 15)

//5TO DE PRIMARIA
    "MariaGuadalupe": "16557920",        //lista 1)
    "Jorge": "17260874",            //lista 2)
    "Beymar": "16916432",           //lista 3)
    "Jose": "16883286",             //lista 4)
    "CharlyDaniel": "17465602",     //lista 5)
    "RaumyrOmar": "13551461",       //lista 6)
    "SandraAlexia": "15224708",     //lista 7)
    "YeraldinRocio": "16699943",    //lista 8)
    "DanielaAilyn": "14915429",     //lista 9)
    "JennyLizeth": "16326100",      //lista 10)       

//6TO DE PRIMARIA
    "LeonelSebastian": "15461886",   //lista 1)
    "UloMiriam": "15626005",         //lista 2)
    "Eddy": "16789814",              //lista 3)
    "Liliana": "15456960",           //lista 4)
    "ZoeMonserrat": "13552457",      //lista 5)
    "WaraJazmin": "1470426",         //lista 6)
    "JulietaNicol": "15924925",      //lista 7)
    "RuthNayeli": "15288814",        //lista 8)
    "NicoleTeodora": "14910299",     //lista 9)
    "AsbelXabi": "14007390",        //lista 10)
    "DamirJunior": "15618792",       //lista 11)
    "ViderRedin": "15490487",        //lista 12)
    "MarianaMayte": "13375018",      //lista 13)
    "GabrielJhostin": "14879032",    //lista 14)

    // Añadir más estudiantes según sea necesario
};

// Datos de calificaciones para cada estudiante
const gradesData = {
//1RO DE PRIMARIA//
    //lista 1
    "FrancoGael": [
        { trimestre: "1er Trim.", nota: 91, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 85, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 77, descripcion: "APROBADO", observacion: "Mejorar la conducta/ Falta demostración de danza 28-11-24 " },
    ],
    //lista 2
    "SebastianZabdiel": [
        { trimestre: "1er Trim.", nota: 97, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 92, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 80, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " },
    ],
    //lista 3
    "Diego": [
        { trimestre: "1er Trim.", nota: 78, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 79, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 70, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24  " }
    ],
    //lista 4
    "DanitsJhane": [
        { trimestre: "1er Trim.", nota: 59, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 66, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 69, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24  " }
    ],
    //lista 5
    "Edylson": [
        { trimestre: "1er Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 23, descripcion: "REPROBADO", observacion: "No cuenta con cuaderno de música/Falta demostración de danza 28-11-24  " }
    ],
    //lista 6
    "Shiomara": [
        { trimestre: "1er Trim.", nota: 67, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 45, descripcion: "REPROBADO", observacion: "No presento tareas de música/Falta demostración de danza 28-11-24 " }
    ],
    //lista 7
    "IkerAsad": [
        { trimestre: "1er Trim.", nota: 94, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 75, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 45, descripcion: "REPROBADO", observacion: "No presento tareas de música/Falta demostración de danza 28-11-24 " }
    ],
    //lista 8
    "JuanMateo": [
        { trimestre: "1er Trim.", nota: 80, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 59, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 23, descripcion: "REPROBADO", observacion: "No cuenta con cuaderno de música/Falta demostración de danza 28-11-24  " }
    ],
    //lista 9
    "LeilaScarlett": [
        { trimestre: "1er Trim.", nota: 98, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 95, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 87, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 10
    "YostinBrus": [
        { trimestre: "1er Trim.", nota: 75, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 66, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 55, descripcion: "APROBADO", observacion: "Mejorar la conducta/ Falta demostración de danza 28-11-24  " }
    ],
    //lista 11
    "CarlosLeonel": [
        { trimestre: "1er Trim.", nota: 70, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 64, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 55, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 12
    "Nataly": [
        { trimestre: "1er Trim.", nota: 64, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 56, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 45, descripcion: "APROBADO", observacion: "Presento incompleto las tareas de música/Falta demostración de danza 28-11-24 " }
    ],
    //lista 13
    "MadeleineNikol": [
        { trimestre: "1er Trim.", nota: 98, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 95, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 70, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 14
    "LuzEvelin": [
        { trimestre: "1er Trim.", nota: 53, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 67, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 45, descripcion: "REPROBADO", observacion: "Presento incompleto las tareas de música/Falta demostración de danza 28-11-24 " }
    ],
    //lista 15
    "YarelyLuz": [
        { trimestre: "1er Trim.", nota: 79, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 93, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 65, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 16
    "AstridZoe": [
        { trimestre: "1er Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 16, descripcion: "REPROBADO", observacion: "No presento tareas en cuaderno de música/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 17
    "MishelDaniela": [
        { trimestre: "1er Trim.", nota: 74, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 68, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 60, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 18
    "BiancaMayte": [
        { trimestre: "1er Trim.", nota: 99, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 98, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 80, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],

//2DO DE PRIMARIA//
    //lista 1
    "ThaisDaniela": [
        { trimestre: "1er Trim.", nota: 66, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 75, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 55, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " },
    ],
    //lista 2
    "AbnerZenon": [
        { trimestre: "1er Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 94, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 71, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " },
    ],
    //lista 3
    "NadiaWara": [
        { trimestre: "1er Trim.", nota: 81, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 89, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 64, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 4
    "DannaAvril": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 59, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 18, descripcion: "REPROBADO", observacion: "No cuenta con material/La inasistencia a las clases/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 5
    "HansAnthony": [
        { trimestre: "1er Trim.", nota: 95, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 71, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 6
    "LuzCamila": [
        { trimestre: "1er Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 55, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 51, descripcion: "REPROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 7
    "DanyJail": [
        { trimestre: "1er Trim.", nota: 80, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 57, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 51, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 8
    "YuanEduardo": [
        { trimestre: "1er Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 61, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 45, descripcion: "REPROBADO", observacion: "No presento tareas de música/Falta demostración de danza 28-11-24 " }
    ],
    //lista 9
    "Ismael": [
        { trimestre: "1er Trim.", nota: 96, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 74, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 54, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],


//3RO DE PRIMARIA//
    //lista 1
    "ArianaAlessandra": [
        { trimestre: "1er Trim.", nota: 93, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 97, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 87, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " },
    ],
    //lista 2
    "GustavoAnthoy": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 54, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 40, descripcion: "REPROBADO", observacion: "Falta demostración de danza 28-11-24 " },
    ],
    //lista 3
    "AndersonVladimir": [
        { trimestre: "1er Trim.", nota: 83, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 86, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 55, descripcion: "APROBADO", observacion: "Debe mejorar la conducta/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 4
    "SimonSantiago": [
        { trimestre: "1er Trim.", nota: 53, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 57, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 45, descripcion: "REPROBADO", observacion: "No presento tareas de música/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 5
    "KiaraLiz": [
        { trimestre: "1er Trim.", nota: 92, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 0, descripcion: "APROBADO", observacion: "NO asiste a la clase de música/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 6
    "YasitMilan": [
        { trimestre: "1er Trim.", nota: 83, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 80, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 47, descripcion: "REPROBADO", observacion: "No trae cuaderno de música/ No presento algunos tareas de música/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 7
    "Alejandra": [
        { trimestre: "1er Trim.", nota: 92, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 87, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 79, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 8
    "CarlosGael": [
        { trimestre: "1er Trim.", nota: 62, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 91, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 55, descripcion: "APROBADO", observacion: "Debe mejorar la conducta/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 9
    "GaelOmar": [
        { trimestre: "1er Trim.", nota: 54, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 53, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 40, descripcion: "REPROBADO", observacion: "No presento tareas de música/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 10
    "Itcel": [
        { trimestre: "1er Trim.", nota: 83, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 70, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 11
    "DamianNoel": [
        { trimestre: "1er Trim.", nota: 76, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 84, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 65, descripcion: "REPROBADO", observacion: "Falta demostración de danza 28-11-24 " }
    ],
    //lista 12
    "JohanAldair": [
        { trimestre: "1er Trim.", nota: 64, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 54, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 58, descripcion: "APROBADO", observacion: "No cuenta con cuaderno de música/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 13
    "BeymarAngel": [
        { trimestre: "1er Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 20, descripcion: "REPROBADO", observacion: "No cuenta con material de música/ No presento tareas/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 14
    "CoralainAydee": [
        { trimestre: "1er Trim.", nota: 57, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 60, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 42, descripcion: "REPROBADO", observacion: "No presento tareas de música/ Debe mejorar la conducta/ Falta demostración de danza 28-11-24 " }
    ],
    //lista 15
    "Jaciel": [
        { trimestre: "1er Trim.", nota: 62, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 86, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 35, descripcion: "REPROBADO", observacion: "No presento tareas de música/ Falta demostración de danza 28-11-24" }
    ],
    //lista 16
    "BenjaminFidel": [
            { trimestre: "1er Trim.", nota: 0, descripcion: "SIN NOTA", observacion: " " },
            { trimestre: "2do Trim.", nota: 73, descripcion: "APROBADO", observacion: " " },
            { trimestre: "3er Trim.", nota: 51, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
        ],
    
    //lista 17
    "RominaGiselle": [
        { trimestre: "1er Trim.", nota: 97, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 60, descripcion: "APROBADO", observacion: "Debe mejorar la conducta/Falta demostración de danza 28-11-24" }
    ],


// 4TO DE PRIMARIA
    //lista 1
    "Sharai": [
        { trimestre: "1er Trim.", nota: 62, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 45, descripcion: "REPROBADO", observacion: "No presento tareas de música/ Falta demostración de danza 28-11-24" }
    ],
    //lista 2
    "AlisonMaya": [
        { trimestre: "1er Trim.", nota: 66, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 93, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 60, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 3
    "Yadiel": [
        { trimestre: "1er Trim.", nota: 98, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 96, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 66, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 4
    "Jhostin": [
        { trimestre: "1er Trim.", nota: 57, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 59, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 5
    "MairynZulami": [
        { trimestre: "1er Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 81, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 70, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 6
    "MaryLuz": [
        { trimestre: "1er Trim.", nota: 73, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 78, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 65, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 7
    "AnyheloMateo": [
        { trimestre: "1er Trim.", nota: 53, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 54, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 25, descripcion: "REPROBADO", observacion: "No cuenta con material de música/ No presento tareas de música/ Falta demostración de danza 28-11-24" }
    ],
    //lista 8
    "ViancaKaren": [
        { trimestre: "1er Trim.", nota: 55, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 52, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 48, descripcion: "REPROBADO", observacion: "No presento tareas de música/ La inasistencia a las clases/ Falta demostración de danza 28-11-24" }
    ],
    //lista 9
    "Alejandro": [
        { trimestre: "1er Trim.", nota: 60, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 92, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 58, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 10
    "AndreiGemio": [
        { trimestre: "1er Trim.", nota: 76, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 60, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 11
    "HarolJhonnatan": [
        { trimestre: "1er Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 94, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 79, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 12
    "NoemiYesica": [
        { trimestre: "1er Trim.", nota: 79, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 65, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 41, descripcion: "REPROBADO", observacion: "No presento tareas de música/ Falta demostración de danza 28-11-24" }
    ],
    //lista 13
    "CamilaShelly": [
        { trimestre: "1er Trim.", nota: 57, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 83, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 51, descripcion: "APROBADO", observacion: "Debe mejorar la conducta/ Falta demostración de danza 28-11-24" }
    ],
    //lista 14
    "Magali": [
        { trimestre: "1er Trim.", nota: 61, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 80, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 58, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 15
    "OrianaYaiza": [
        { trimestre: "1er Trim.", nota: 81, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 58, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 54, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],




//5TO DE PRIMARIA
    //lista 1
    "MariaGuadalupe": [
        { trimestre: "1er Trim.", nota: 80, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 94, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 55, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 2
    "Jorge": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 60, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 3
    "Beymar": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 47, descripcion: "REPROBADO", observacion: "No presento tareas de música/ Falta demostración de danza 28-11-24" }
    ],
    //lista 4
    "Jose": [
        { trimestre: "1er Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 93, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 62, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 5
    "CharlyDaniel": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 99, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 59, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 6
    "RaumyrOmar": [
        { trimestre: "1er Trim.", nota: 82, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 95, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 61, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 7
    "SandraAlexia": [
        { trimestre: "1er Trim.", nota: 58, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 57, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 51, descripcion: "APROBADO", observacion: "No cuenta con cancionero escolar/ Falta demostración de danza 28-11-24" }
    ],
    //lista 8
    "YeraldinRocio": [
        { trimestre: "1er Trim.", nota: 83, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 60, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 9
    "DanielaAilyn": [
        { trimestre: "1er Trim.", nota: 99, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 99, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 72, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 10
    "JennyLizeth": [
        { trimestre: "1er Trim.", nota: 80, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 93, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 60, descripcion: "APROBADO", observacion: "No cuenta con carpeta de música/ Falta demostración de danza 28-11-24" }
    ],






//6TO DE PRIMARIA
    //lista 1
    "LeonelSebastian": [
        { trimestre: "1er Trim.", nota: 53, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 4, descripcion: "REPROBADO", observacion: "No asiste a la clase de música/ Falta demostración de danza 28-11-24" }
    ],
    //lista 2
    "UloMiriam": [
        { trimestre: "1er Trim.", nota: 63, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 96, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 79, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 3
    "Eddy": [
        { trimestre: "1er Trim.", nota: 82, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 95, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 67, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 4
    "Liliana": [
        { trimestre: "1er Trim.", nota: 76, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 76, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 5
    "ZoeMonserrat": [
        { trimestre: "1er Trim.", nota: 99, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 98, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 85, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 6
    "WaraJazmin": [
        { trimestre: "1er Trim.", nota: 93, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 95, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 56, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 7
    "JulietaNicol": [
        { trimestre: "1er Trim.", nota: 92, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 96, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 84, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 8
    "RuthNayeli": [
        { trimestre: "1er Trim.", nota: 99, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 99, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 85, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 9
    "NicoleTeodora": [
        { trimestre: "1er Trim.", nota: 96, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 90, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 79, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 10
    "AsbelXabi": [
        { trimestre: "1er Trim.", nota: 81, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 79, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 48, descripcion: "REPROBADO", observacion: "No presento tareas de música/ No realizo tareas en el aula/ Mejorar la conducta/ Falta demostración de danza 28-11-24" }
    ],
    //lista 11
    "DamirJunior": [
        { trimestre: "1er Trim.", nota: 92, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 95, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 66, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],
    //lista 12
    "ViderRedin": [
        { trimestre: "1er Trim.", nota: 60, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 91, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 56, descripcion: "APROBADO", observacion: "No presento tareas de música/ Falta demostración de danza 28-11-24" }
    ],
    //lista 13
    "MarianaMayte": [
        { trimestre: "1er Trim.", nota: 92, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 93, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 60, descripcion: "APROBADO", observacion: "Debe completar tareas/ Falta demostración de danza 28-11-24" }
    ],
    //lista 14
    "GabrielJhostin": [
        { trimestre: "1er Trim.", nota: 51, descripcion: "APROBADO", observacion: " " },
        { trimestre: "2do Trim.", nota: 55, descripcion: "APROBADO", observacion: " " },
        { trimestre: "3er Trim.", nota: 57, descripcion: "APROBADO", observacion: "Falta demostración de danza 28-11-24" }
    ],




    // Añadir más calificaciones para otros estudiantes
};

// Función de inicio de sesión
function login(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] === password) {
        // Guardar el usuario en el almacenamiento local
        localStorage.setItem("loggedUser", username);
        // Redireccionar a la página de plataforma
        window.location.href = "plataforma.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}

// Función para cargar las calificaciones del estudiante
function loadGrades() {
    const username = localStorage.getItem("loggedUser");
    if (!username || !gradesData[username]) {
        alert("No hay datos de usuario. Redirigiendo a inicio de sesión.");
        window.location.href = "inicio.html";
        return;
    }

    // Mostrar nombre del estudiante
    document.getElementById("student-name").textContent = username;

    // Obtener la tabla y llenar las calificaciones
    const gradesTable = document.getElementById("grades-table");
    gradesData[username].forEach(grade => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${grade.trimestre}</td>
            <td>${grade.nota}</td>
            <td>${grade.descripcion}</td>
            <td>${grade.observacion}</td>
        `;
        gradesTable.appendChild(row);
    });
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}

// Llama a loadGrades solo si estamos en plataforma.html
if (window.location.pathname.includes("plataforma.html")) {
    loadGrades();
}
