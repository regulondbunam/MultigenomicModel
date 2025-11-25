# gene

Esta colección representa al objeto __Gene__ dentro de la regulación transcripcional de un organismo. Un gen representa un segmento corto de ADN, y tiene como objetivo desempeñar una función especial. Posee una serie de propiedades que permiten identificarlo y diferenciarlo de otros, así como de características que permiten establecer relaciones con otros objetos.

---
## Properties
---
### _id
* Synonyms: identifier
* Type: string
* Description: Identificador de un gen dentro de RegulonDB, el cual puede ser utilizado para hacer búsquedas y relaciones con otros campos.
* URI: No aplica
* Required: yes
* Example: 
```xml 
 ECK120000050 
```
* Comments: Para conocer más detalle sobre la definición de los identificadores, consultar la sección: Identificadores en el manual de RegulonDB.
---
### name
* Synonyms: [value]
* Type: string
* Description: Indica el nombre oficial de un gen.
* URI: [value]
* Required: no
* Example: 
```xml 
 araC 
```
* Comments: [value]
---
### leftEndPosition
* Synonyms: genome left position
* Type: int
* Description: Indica la posición izquierda del objeto Gen.
* URI: [value]
* Required: no
* Example: 
```xml 
 70387 
```
* Comments: [value]
---
### rightEndPosition
* Synonyms: genome right position
* Type: int
* Description: Indica la posición derecha del objeto Gen.
* URI: [value]
* Required: no
* Example: 
```xml 
 71265 
```
* Comments: [value]
---
### fragments
* Synonyms: [value]
* Type: array
* Description: Indica que un gene está conformado por múltiples segmentos. Las características de estos genes son definidas por medio de un objeto con las propiedades: strand, leftEndPosition, rightEndPosition, name, bnumber, synonyms, centisomePosition y evidenceReferences.
* URI: [value]
* Required: no
* Example: 
```xml 
 ["forward", 70387, 71265, "araC", bnumber, ["b0064","ECK0065","EG10054"],1.5164213,[{"publication_id": "GID000027564"},{"publication_id": "GID000027564","evidence_id": "GID000000006"}]] 
```
* Comments: Para el caso de genes fragmentados las propiedades obligatorias son: strand, leftEndPosition y rightEndPosition
---
### strand
* Synonyms: direction
* Type: string
* Description: Indica la orientación del Gen.
* URI: forward, reverse
* Required: no
* Example: 
```xml 
 forward 
```
* Comments: [value]
---
### sequence
* Synonyms: [value]
* Type: string
* Description: Indica la sequencia de ADN del Gen.
* URI: [value]
* Required: no
* Example: 
```xml 
 ATGGCTGAAGCGCAAAATGATCCCCTGCTGCCGGGATACTCGTTTAACGCCCATCTGGTGGCGGGTTTAACGCCGATTGAGGCCAACGGTTATCTCGATTTTTTTATCGACCGACCGCTGGGAATGAAAGGTTATATTCTCAATCTCACCATTCGCGGTCAGGGGGTGGTGAAAAATCAGGGACGAGAATTTGTCTGCCGACCGGGTGATATTTTGCTGTTCCCGCCAGGAGAGATTCATCACTACGGTCGTCATCCGGAGGCTCGCGAATGGTATCACCAGTGGGTTTACTTTCGTCCGCGCGCCTACTGGCATGAATGGCTTAACTGGCCGTCAATATTTGCCAATACGGGTTTCTTTCGCCCGGATGAAGCGCACCAGCCGCATTTCAGCGACCTGTTTGGGCAAATCATTAACGCCGGGCAAGGGGAAGGGCGCTATTCGGAGCTGCTGGCGATAAATCTGCTTGAGCAATTGTTACTGCGGCGCATGGAAGCGATTAACGAGTCGCTCCATCCACCGATGGATAATCGGGTACGCGAGGCTTGTCAGTACATCAGCGATCACCTGGCAGACAGCAATTTTGATATCGCCAGCGTCGCACAGCATGTTTGCTTGTCGCCGTCGCGTCTGTCACATCTTTTCCGCCAGCAGTTAGGGATTAGCGTCTTAAGCTGGCGCGAGGACCAACGCATTAGTCAGGCGAAGCTGCTTTTGAGCACTACCCGGATGCCTATCGCCACCGTCGGTCGCAATGTTGGTTTTGACGATCAACTCTATTTCTCGCGAGTATTTAAAAAATGCACCGGGGCCAGCCCGAGCGAGTTTCGTGCCGGTTGTGAAGAAAAAGTGAATGATGTAGCCGTCAAGTTGTCATAA 
```
* Comments: [value]
---
### gcContent
* Synonyms: [value]
* Type: double
* Description: Representa el porcentaje de pares de Guanina-Citosina en la secuencia de ADN del Gen.
* URI: [value]
* Required: yes
* Example: 
```xml 
 52.56 
```
* Comments: [value]
---
### note
* Synonyms: [value]
* Type: string
* Description: Comentarios de curación relacionados al Gen.
* URI: [value]
* Required: no
* Example: 
```xml 
 The expression of the gene is analyzed through a transcriptional fusion (i.e. lacZ), and  a difference in expression levels is observed when the regulatory protein is present  (wild type) vs in its absence.  Note that this evidence does not eliminate the possiblity of an indirect effect of the regulator on the regulated gene. 
```
* Comments: [value]
---
### internalComment
* Synonyms: [value]
* Type: string
* Description: Comentarios de uso interno del equipo de RegulonDB.
* URI: [value]
* Required: no
* Example: 
```xml 
 [value] 
```
* Comments: [value]
---
### organism_id
* Synonyms: organism identifier
* Type: string
* Description: Indica el identificador del organismo estudiado.
* URI: [value]
* Required: yes
* Example: 
```xml 
 ECK12 
```
* Comments: [value]
---
### type
* Synonyms: kind
* Type: string
* Description: Indica el tipo de gene anotado.
* URI: pseudo, phantom, gene, truncated
* Required: yes
* Example: 
```xml 
 phantom 
```
* Comments: [value]
---
### centisomePosition
* Synonyms: [value]
* Type: double
* Description: Indica la posición del gene en el cromosoma en unidades de centisoma
* URI: [value]
* Required: yes
* Example: 
```xml 
 1.5164213 
```
* Comments: [value]
---
### interrupted
* Synonyms: [value]
* Type: bool
* Description: Este campo se usa para genes que tienen un codón de parada. Un gene interrumpido será definido por dos marcos genéticos que describen las dos mitades del gen. 
* URI: [value]
* Required: no
* Example: 
```xml 
 false 
```
* Comments: [value]
---
### ontologyClass_ids
* Synonyms: [value]
* Type: array
* Description: Descripción de las funciones celulares del producto del Gene.
* URI: [value]
* Required: no
* Example: 
```xml 
 ["carbon compounds", "Transcription related", "operon", "repressor"] 
```
* Comments: [value]
---
### synonyms
* Synonyms: [value]
* Type: array
* Description: Indica los identificadores de aquellos genes con los que se le conoce al gene.
* URI: [value]
* Required: no
* Example: 
```xml 
 ["b0064", "ECK0065", "EG10054"] 
```
* Comments: [value]
---
### evidenceReferences
* Synonyms: [value]
* Type: array
* Description: Identificador de la publicación así como de la evidencia asociada al Gen.
* URI: [value]
* Required: no
* Example: 
```xml 
 [{"publication_id": "GID000027564"},{"publication_id": "GID000027564","evidence_id": "GID000000006"}] 
```
* Comments: [value]
---
### externalCrossReferences
* Synonyms: [value]
* Type: array
* Description: Indica las referencias externas relacionadas con el Gene. Este campo es de tipo objeto por lo que se encuentra compuesto por dos propiedades: externalCrossReference_id y objectId.
* URI: [value]
* Required: no
* Example: 
```xml 
 [{"externalCrossReference_id":"OU-Microarray","objectId":"b3075"}] 
```
* Comments: [value]
---
### schemaVersion
* Synonyms: [value]
* Type: double
* Description: Permite identificar la versión del esquema de la colección.
* URI: [value]
* Required: yes
* Example: 
```xml 
 1.0 
```
* Comments: [value]

---

## Code

[![Edit geneCollection](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/genecollection-bn1bi?fontsize=14&hidenavigation=1&theme=dark) 



<iframe
     src="https://codesandbox.io/embed/genecollection-bn1bi?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="geneCollection"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>