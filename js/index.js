// -----------------------------------------
// Import des classes
// -----------------------------------------

import Api from './class/Api.js'
import Error from './class/Error.js'

import Photographer from './class/Photographer.js'

// -----------------------------------------
// Définition des cibles sur le document
// -----------------------------------------


let photographerTarget = document.getElementById('photographers-list')

// -----------------------------------------
// Fonctions
// -----------------------------------------

const injectElement = (element, target) => {
    target.appendChild(element)
}

// -----------------------------------------
// Comportement par défaut (une fois la page chargé)
// -----------------------------------------

// const connected = await Api.init()

try {
    await Api.init()
} catch (error) {
    Error.print(error)
}

// Photographe

    // Création des éléments
    Api.getAllPhotographers().forEach(p => new Photographer(p))

    // Injection dans le document
    Photographer.instances.forEach(i => {
        injectElement(i.element, photographerTarget)
    })