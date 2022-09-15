const e = require("express");
const path = require("path")


// Proceso cuando se llame a la ruta
exports.getAltaConsola = (req, res) => {
//    res.send('<h1>Formulario de Consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html'));
}

exports.postAltaConsola = (req, res) => {
    console.log(req.body)
    res.json({estado:"Existoso"})
}

exports.getConsultaConsola = (req, res) => {
    res.send('<h1>Datos de las consolas</h1>')
}


// TAREA
exports.getAltaTarea = (req, res) => {
    //    res.send('<h1>Formulario de Consola</h1>')
        res.sendFile(path.join(__dirname,'..','views','formulario_tarea2.html'));
}
 
exports.postTarea2_f = (req, res) => {
    console.log(req.body)
    console.log(req.body.idioma)
    let a = req.body.idioma
    a = a.replace(/afa/g,"a")
    a = a.replace(/efe/g,"e")
    a = a.replace(/ifi/g,"i")
    a = a.replace(/ofo/g,"o")
    a = a.replace(/ufu/g,"u")
    console.log(a)
    res.json({Palabra_bien:a})
}

exports.postTarea2_p = (req, res) => {
    console.log(req.body)
    let a = req.body.palimdrome
    let asd = a.replace(/\s+/g, ''); 
    console.log(asd)
    const resultado = asd.split("")
    const reversa = resultado.reverse()
    const reversa_string = reversa.join("")
    let palindromeStatus = ""
    if (asd == reversa_string){
        console.log("Es palindrome")
        palindromeStatus = "Es palindrome"
    }
    else{
        console.log("No es palindrome")
        palindromeStatus = "No es palindrome"

    }

    res.json({Palindrome_status:palindromeStatus})

}