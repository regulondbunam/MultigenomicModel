# gene

Esta colección representa al objeto __Gene__ dentro de la regulación transcripcional de un organismo. Un gen representa un segmento corto de ADN, y tiene como objetivo desempeñar una función especial. Posee una serie de propiedades que permiten identificarlo y diferenciarlo de otros, así como de características que permiten establecer relaciones con otros objetos.

---
## Propiedades
---
### _id
* bsonType: string
* URI PRO: NA
* Synonyms: identifier
* Description: Este campo tiene como función identificar a un gen en particular, el cual puede ser utilizado para hacer búsquedas y relaciones con otros campos.
* Required: si
* URI [values]: NA
* Example: 
```xml 
 RDBECOLIGN00001 
```
* Comments: Para conocer más detalle sobre la definición de los identificadores, consultar la sección: Identificadores en el manual de RegulonDB.
---
### name
* bsonType: string
* URI PRO: string
* Synonyms: NA
* Description: Indica el nombre oficial de un gen.
* Required: no
* URI [values]: NA
* Example: 
```xml 
 araC 
```
* Comments: En algunos casos habrá genes que no tengan un nombre asociado por lo que este campo pudiera presentarse vacío.
---
### bnumber
* bsonType: string
* URI PRO: string
* Synonyms: identifier
* Description: Este campo tiene como función identificar de forma alterna a un gen. Los valores de este campo son tomados de fuentes externas a RegulonDB.
* Required: no
* URI [values]: string
* Example: 
```xml 
 b0064 
```
* Comments: NA
---
### leftEndPosition
* bsonType: int
* URI PRO: string
* Synonyms: genome left position
* Description: Indica la posición izquierda del objeto Gen.
* Required: no
* URI [values]: NA
* Example: 
```xml 
 70387 
```
* Comments: NA
---
### rightEndPosition
* bsonType: int
* URI PRO: string
* Synonyms: genome right position
* Description: Indica la posición derecha del objeto Gen.
* Required: no
* URI [values]: NA
* Example: 
```xml 
 71265 
```
* Comments: NA
---
### fragments
* bsonType: array
* URI PRO: string
* Synonyms: string
* Description: Indica que un gene está conformado por múltiples segmentos. Las características de estos genes son definidas por medio de un objeto con las propiedades: strand, leftEndPosition, rightEndPosition, name, bnumber, synonyms, centisomePosition y evidenceReferences.
* Required: no
* URI [values]: NA
* Example: 
```xml 
 ["forward", 70387, 71265, "araC", bnumber, ["b0064","ECK0065","EG10054"],1.5164213,[{"publication_id": "GID000027564"},{"publication_id": "GID000027564","evidence_id": "GID000000006"}]] 
```
* Comments: Para el caso de genes fragmentados las propiedades obligatorias son: strand, leftEndPosition y rightEndPosition
---
### strand
* bsonType: string
* URI PRO: string
* Synonyms: direction
* Description: Indica la orientación del Gene.
* Required: no
* URI [values]: forward, reverse
* Example: 
```xml 
 forward 
```
* Comments: string
---
### sequence
* bsonType: string
* URI PRO: string
* Synonyms: string
* Description: Indica la sequencia de ADN del Gen.
* Required: no
* URI [values]: string
* Example: 
```xml 
 ATGGCTGAAGCGCAAAATGATCCCCTGCTGCCGGGATACTCGTTTAACGCCCATCTGGTGGCGGGTTTAACGCCGATTGAGGCCAACGGTTATCTCGATTTTTTTATCGACCGACCGCTGGGAATGAAAGGTTATATTCTCAATCTCACCATTCGCGGTCAGGGGGTGGTGAAAAATCAGGGACGAGAATTTGTCTGCCGACCGGGTGATATTTTGCTGTTCCCGCCAGGAGAGATTCATCACTACGGTCGTCATCCGGAGGCTCGCGAATGGTATCACCAGTGGGTTTACTTTCGTCCGCGCGCCTACTGGCATGAATGGCTTAACTGGCCGTCAATATTTGCCAATACGGGTTTCTTTCGCCCGGATGAAGCGCACCAGCCGCATTTCAGCGACCTGTTTGGGCAAATCATTAACGCCGGGCAAGGGGAAGGGCGCTATTCGGAGCTGCTGGCGATAAATCTGCTTGAGCAATTGTTACTGCGGCGCATGGAAGCGATTAACGAGTCGCTCCATCCACCGATGGATAATCGGGTACGCGAGGCTTGTCAGTACATCAGCGATCACCTGGCAGACAGCAATTTTGATATCGCCAGCGTCGCACAGCATGTTTGCTTGTCGCCGTCGCGTCTGTCACATCTTTTCCGCCAGCAGTTAGGGATTAGCGTCTTAAGCTGGCGCGAGGACCAACGCATTAGTCAGGCGAAGCTGCTTTTGAGCACTACCCGGATGCCTATCGCCACCGTCGGTCGCAATGTTGGTTTTGACGATCAACTCTATTTCTCGCGAGTATTTAAAAAATGCACCGGGGCCAGCCCGAGCGAGTTTCGTGCCGGTTGTGAAGAAAAAGTGAATGATGTAGCCGTCAAGTTGTCATAA 
```
* Comments: string
---
### gcContent
* bsonType: double
* URI PRO: string
* Synonyms: string
* Description: Representa el porcentaje de pares de Guanina-Citosina en la secuencia de ADN del Gen.
* Required: si
* URI [values]: NA
* Example: 
```xml 
 52.56 
```
* Comments: NA
---
### note
* bsonType: string
* URI PRO: string
* Synonyms: string
* Description: string
* Required: no
* URI [values]: string
* Example: 
```xml 
 The expression of the gene is analyzed through a transcriptional fusion (i.e. lacZ), and  a difference in expression levels is observed when the regulatory protein is present  (wild type) vs in its absence.  Note that this evidence does not eliminate the possiblity of an indirect effect of the regulator on the regulated gene. 
```
* Comments: string
---
### internalComment
* bsonType: string
* URI PRO: string
* Synonyms: string
* Description: string
* Required: no
* URI [values]: string
* Example: 
```xml 
 string 
```
* Comments: string
---
### organism_id
* bsonType: string
* URI PRO: string
* Synonyms: organism identifier
* Description: Indica el identificador del organismo estudiado.
* Required: si
* URI [values]: string
* Example: 
```xml 
 ECK12 
```
* Comments: string
---
### type
* bsonType: string
* URI PRO: string
* Synonyms: kind
* Description: Indica el tipo de gene anotado.
* Required: si
* URI [values]: pseudo, phantom, gene, truncated
* Example: 
```xml 
 phantom 
```
* Comments: string
---
### centisomePosition
* bsonType: double
* URI PRO: string
* Synonyms: string
* Description: Indica la posición central del gene en el cromosoma
* Required: si
* URI [values]: string
* Example: 
```xml 
 1.5164213 
```
* Comments: string
---
### interrupted
* bsonType: bool
* URI PRO: string
* Synonyms: string
* Description: string
* Required: no
* URI [values]: string
* Example: 
```xml 
 false 
```
* Comments: string
---
### multifunDirectParents
* bsonType: array
* URI PRO: string
* Synonyms: string
* Description: Descripción de las funciones celulares del producto del Gene.
* Required: no
* URI [values]: string
* Example: 
```xml 
 ["carbon compounds", "Transcription related", "operon", "repressor"] 
```
* Comments: string
---
### synonyms
* bsonType: array
* URI PRO: string
* Synonyms: string
* Description: Indica los identificadores de aquellos genes con los que se le conoce al gene.
* Required: no
* URI [values]: string
* Example: 
```xml 
 ["RDBECOLIGN00065", "RDBECOLIGN10054"] 
```
* Comments: string
---
### evidenceReferences
* bsonType: array
* URI PRO: string
* Synonyms: string
* Description: string
* Required: no
* URI [values]: string
* Example: 
```xml 
 [{"publication_id": "GID000027564"},{"publication_id": "GID000027564","evidence_id": "GID000000006"}] 
```
* Comments: string
---
### externalCrossReferences
* bsonType: array
* URI PRO: string
* Synonyms: string
* Description: Indica las referencias relacionadas con el Gene. Este campo es de tipo objeto por lo que se encuentra compuesto por dos propiedades: externalCrossReference_id y objectId.
* Required: no
* URI [values]: string
* Example: 
```xml 
 [{"externalCrossReference_id":"OU-Microarray","objectId":"b3075"}] 
```
* Comments: string
---
### product_ids
* bsonType: array
* URI PRO: string
* Synonyms: string
* Description: Identificador del producto obtenido de la expresión del Gene.
* Required: no
* URI [values]: string
* Example: 
```xml 
 ["ECK120004526"] 
```
* Comments: string
---
### schemaVersion
* bsonType: double
* URI PRO: string
* Synonyms: string
* Description: Permite identificar la versión del esquema de la colección.
* Required: si
* URI [values]: string
* Example: 
```xml 
 1.0 
```
* Comments: string
---
