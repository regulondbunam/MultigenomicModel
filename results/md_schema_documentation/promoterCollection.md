# promoter

Esta colección representa al objeto __Promoter__ dentro de la regulación transcripcional de un organismo. Un promotor se encarga de controlar el inio de la transcripción en punto determinado del ADN. Posee una serie de propiedades que permiten identificarlo y diferenciarlo de otros, así como de características que permiten establecer relaciones con otros objetos.

---
## Properties
---
### _id
* Synonyms: identifier
* Type: string
* Description: Este campo tiene como función identificar a un promotor en particular, el cual puede ser utilizado para hacer búsquedas y relaciones con otros campos.
* URI: [value]
* Required: yes
* Example: 
```xml 
 ECK125109145 
```
* Comments: Para conocer más detalle sobre la definición de los identificadores, consultar la sección: Identificadores en el manual de RegulonDB.
---
### name
* Synonyms: [value]
* Type: string
* Description: Indica el nombre oficial de un promotor
* URI: [value]
* Required: no
* Example: 
```xml 
 ycgZp 
```
* Comments: [value]
---
### transcriptionStartSite
* Synonyms: TSS
* Type: object
* Description: Representa el inicio del sitio de transcripción. Este objeto esta compuesto por las propiedades: 
 leftEndPosition: Posición izquierda del sitio 
 rightEndPosition: Posición derecha del sitio 
 range: Rango del sitio 
 type: Tipo del sitio [primary, secondary, tertiary].
* URI: [value]
* Required: yes
* Example: 
```xml 
 "leftEndPosition": 1215716,
"rightEndPosition": 1215745,
"range": -29,
"type": "primary" 
```
* Comments: [value]
---
### strand
* Synonyms: [value]
* Type: string
* Description: Indica la orientación del Promotor, ya sea forward, reverse
* URI: [value]
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
* Description: Indica la sequencia de ADN del Promotor.
* URI: [value]
* Required: no
* Example: 
```xml 
 gcaaaaaattaatttatcattctgtacacatatttcgtacaagtttgctattgttacttcActtaacattgattaacattt 
```
* Comments: [value]
---
### sigmaFactor_id
* Synonyms: [value]
* Type: string
* Description: Identificador del Factor Sigma asociado al Promotor.
* URI: [value]
* Required: no
* Example: 
```xml 
 ECK12T000000 
```
* Comments: [value]
---
### transcriptionUnit_ids
* Synonyms: [value]
* Type: array
* Description: Identificador de las unidades de transcripción asociadas al Promotor.
* URI: [value]
* Required: no
* Example: 
```xml 
 ECK120051389 
```
* Comments: [value]
---
### regulatoryInteraction_ids
* Synonyms: [value]
* Type: array
* Description: Identificador de las interacciones regulatorias relacionas al Promotor.
* URI: [value]
* Required: no
* Example: 
```xml 
 ECK125258023 
```
* Comments: [value]
---
### note
* Synonyms: [value]
* Type: string
* Description: Comentarios de curación relacionados al Promotor.
* URI: [value]
* Required: no
* Example: 
```xml 
 [value] 
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
* Synonyms: [value]
* Type: string
* Description: Indica el identificador del organismo de referencia.
* URI: [value]
* Required: yes
* Example: 
```xml 
 ECK12 
```
* Comments: [value]
---
### synonyms
* Synonyms: [value]
* Type: array
* Description: Señala los identificadores de aquellos promotores con los que se le conoce de igual forma el Promotor en particular.
* URI: [value]
* Required: no
* Example: 
```xml 
 ["ECK125137693", "ECK120010283"] 
```
* Comments: [value]
---
### evidenceReferences
* Synonyms: 
* Type: array
* Description: Identificador de la publicación así como de la evidencia asociada al Promotor.
* URI: 
* Required: no
* Example: 
```xml 
 [{"publication_id": "GID000027564"},{"publication_id": "GID000027564","evidence_id": "GID000000006"}] 
```
* Comments: 
---
### externalCrossReferences
* Synonyms: 
* Type: array
* Description: Bases de datos externas donde se puede localizar información asociada al Promotor.
* URI: 
* Required: no
* Example: 
```xml 
  
```
* Comments: 
---
### promoterFeatures
* Synonyms: 
* Type: array
* Description: Campo para especificar las propiedades adicionales que identifican a un promotor, como: minus10Signal, minus35Signal, score, bindsSigmaFactor y evidenceReferences.
* URI: 
* Required: no
* Example: 
```xml 
 [{"minus10Signal":{"leftEndPosition": 1215735,"rightEndPosition": 1215745,"sequence": "TTTGCTATTGT"},
"minus35Signal":{"leftEndPosition": 1215716, "rightEndPosition": 1215721,"sequence": "TACACA"},
"bindsSigmaFactor": {
"evidenceReferences": [{
"publication_id": "GID000041933",
"evidence_id": "GID000000012"},
{
"publication_id": "GID000030094","evidence_id": "GID000000036"},
{
"publication_id": "GID000027564",
"evidence_id": "GID000000012"}]},
"evidenceReferences": [
{
"publication_id": "GID000018240",
"evidence_id": "GID000000013"}
]
}
} 
```
* Comments: 
---
### schemaVersion
* Synonyms: 
* Type: double
* Description: Permite identificar la versión del esquema de la colección.
* URI: 
* Required: yes
* Example: 
```xml 
 1.0 
```
* Comments: 
---
