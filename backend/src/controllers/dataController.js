const express = require('express')


let database = [
    [1,2,5,7,8], 
    [8,2,9,3], 
    [1,2,8,8]
  ]
  
  values = {
   maior: null,
   ocorrenciasMaior: 1,
   array: []
  }
  
  let entrada = database.reduce(
    ( acumulador, valorAtual ) => acumulador.concat(valorAtual), []
  )
  
  for (let i = 0; i < entrada.length; i++) {
    let ocorrencias = 1
    for (let t = i + 1; t < entrada.length; t++)
      if (entrada[i] == entrada[t]) ocorrencias++
  
    if (ocorrencias > values.ocorrenciasMaior) {
      values.maior = entrada[i]
      values.ocorrenciasMaior = ocorrencias
      values.array.push(`luckNumber: ${values.maior} - timesRepeated: ${values.ocorrenciasMaior}`)
    }
  }
  
  console.log(values.array)
  
  console.log(`value: ${values.maior} (${values.ocorrenciasMaior} ocorrencias)`)

  module.exports = app => app.use('/', router)