# Multigenomic Model of RegulonDB

La información de RegulonDB está organizada y resguardada bajo un modelo de colecciones implementado en MongoDB. Cada una de las colecciones que integran el modelo de datos, representa un objeto biologíco sobre la regulación transcriocional de diferentes organinismos, entre los que destaca _Escherichia coli K-12_. Cada una de estas colecciones cuenta con una serie de atributos que permiten plasmar e identificar las características que posee un objeto en particular, como gene, producto, operon, entre muchos más.  

A continuación, se describe cada una de las colecciones que conforman el modelo de datos de RegulonDB:  

## Collections

### 1. gene

_Description_  

Esta colección representa al objeto Gene dentro de la regulación transcripcional de un organismo. Un gen posee una serie de propiedades que permiten identificarlo y diferenciarlo de otros, así como de característica que permiten establecer relaciones con otros objetos.  

_Attributes_  
 
__1.1 regulondbId__  


  * Type: string  

  * Synonyms: identifier  

  * Usage: requerido  

  * Example:  

      ```xml
      RDBECOLIGN00001
      ```

  * Comments: Para conocer más detalle sobre la definición de los identificadores, consultar la sección: Identifiers en el manual de RegulonDB.  


__1.2 name__  

  * Type: string  

  * Synonyms: name  

  * Usage: opcional  

  * Example:

      ```xml
      araC
      ```

  * Comments:  
    En el caso del nombre de genes se sigue una nomenclatura de nombrado donde se define que la última letra se debe especificar en mayúscula.  


__1.3 leftPosition__

  * Type: int  

  * Synonyms: genome left position  

  * Usage: requerido  

  * Example:

      ```xml
      70387
      ```

  * Comments:  


 
 __1.4 rightPosition__

  * Type: int

  * Synonyms: genome right position  

  * Usage: requerido  

  * Example:

      ```xml
      71265
      ```

  * Comments 


__1.5 sequence__

  * Type: string

  * Synonyms:  
    
  * Usage: requerido  

  * Example:

      ```xml
      ATGGCTGAAGCGCAAAATGATCCCCTGCTGCCGGGATACTCGTTTAACGCCCATCTGGTGGCGGGTTTAACGCCGATTGAGGCCAACGGTTATCTCGATTTTTTTATCGACCGACCGCTGGGAATGAAAGGTTATATTCTCAATCTCACCATTCGCGGTCAGGGGGTGGTGAAAAATCAGGGACGAGAATTTGTCTGCCGACCGGGTGATATTTTGCTGTTCCCGCCAGGAGAGATTCATCACTACGGTCGTCATCCGGAGGCTCGCGAATGGTATCACCAGTGGGTTTACTTTCGTCCGCGCGCCTACTGGCATGAATGGCTTAACTGGCCGTCAATATTTGCCAATACGGGTTTCTTTCGCCCGGATGAAGCGCACCAGCCGCATTTCAGCGACCTGTTTGGGCAAATCATTAACGCCGGGCAAGGGGAAGGGCGCTATTCGGAGCTGCTGGCGATAAATCTGCTTGAGCAATTGTTACTGCGGCGCATGGAAGCGATTAACGAGTCGCTCCATCCACCGATGGATAATCGGGTACGCGAGGCTTGTCAGTACATCAGCGATCACCTGGCAGACAGCAATTTTGATATCGCCAGCGTCGCACAGCATGTTTGCTTGTCGCCGTCGCGTCTGTCACATCTTTTCCGCCAGCAGTTAGGGATTAGCGTCTTAAGCTGGCGCGAGGACCAACGCATTAGTCAGGCGAAGCTGCTTTTGAGCACTACCCGGATGCCTATCGCCACCGTCGGTCGCAATGTTGGTTTTGACGATCAACTCTATTTCTCGCGAGTATTTAAAAAATGCACCGGGGCCAGCCCGAGCGAGTTTCGTGCCGGTTGTGAAGAAAAAGTGAATGATGTAGCCGTCAAGTTGTCATAA
      ```

  * Comments:  

__1.6 strand__

  * Type: string  

  * Synonyms:  


  * Usage: requerido  

  * Example:

      ```xml
      forward
      ```

  * Comments: Los valores permitidos para este atributo son: "forward", "reverse", null.  


 __1.7 gcContent__

  * Type: double

  * Synonyms:  
    
  * Usage: requerido  

  * Example:

      ```xml
      52.56
      ```

  * Comments:  


__1.8 organismId__

  * Type: string

  * Synonyms: organism identifier  

  * Usage: requerido  

  * Example:

      ```xml
      ECK12
      ```

  * Comments: 

  __1.9 type__

  * Type: string

  * Synonyms:   

  * Usage: requerido  

  * Example:

      ```xml
      gene
      ```

  * Comments: Los valores permitidos para este atributo son: pseudo, phantom, gene y truncated.  


__1.10 centisomePosition__

  * Type: double  

  * Synonyms:  

  * Usage: requerido  

  * Example:

      ```xml
      1.5164213
      ```

  * Comments:   


__1.11 interrupted__

  * Type: bool  

  * Synonyms:  

  * Usage: opcional  

  * Example:

      ```xml
      false
      ```

  * Comments:  

__1.12 multifunDirectParents__

  * Type: array  

  * Synonyms:  

  * Usage: opcional  

  * Example:

      ```xml
      carbon compounds, Transcription related, operon, repressor
      ```

  * Comments:  


__1.13 gene_note__

  * Type: string  

  * Synonyms:  

  * Usage: opcional  

  * Example:

      ```xml
      
      ```

  * Comments:  


__1.14 gene_internal_comment__

  * Type: string

  * Synonyms:  


  * Usage: opcional  

  * Example:

      ```xml
      
      ```

  * Comments:  


__1.15 synonyms__

  * Type: string

  * Synonyms: identifier

  * Usage:  
    
  * Example:

      ```xml
      RDBECOLIGN00065, RDBECOLIGN10054
      ```

  * Comments:  


 __1.16 external_databases__  

  * Type: string

  * Synonyms:   
    
  * Usage: opcional

  * Example:

      ```xml
      ASAP, http://.......
      ```

  * Comments:  


__1.17 schema_version__

  * Type: string

  * Synonyms:  
    
  * Usage: opcional  

  * Example:

      ```xml
      1
      ```

  * Comments: Este atributo es usado para controlar internamente las modificaciones que se hagan en la colección, así como con el uso del modelo por parte de la aplicación Web de RegulonDB.  


__1.18 multifun_parents__

  * Type: string  

  * Synonyms: multifun family  

  * Usage: opcional  

  * Example:

      ```xml
      
      ```

  * Comments:   

  __1.19 schemaVersion__

  * Type: double  

  * Synonyms:

  * Usage: requerido  

  * Example:

      ```xml
      1.0
      ```

  * Comments: Este campo es utilizado de manera interna para llevar el control de las versiones del esquema de las colecciones de RegulonDB por el sistema de base de datos MongoDB.  



_Desing patterns_  

_Comments:_  

_Example:_  

```xml
Example
```


### 2. Promoter

_Description_  
Dentro del modelo de RegulonDB, Promoter representa una colección que permite representar los diferentes atributos y características que permiten describirlo.

_Attributes_  

__2.1\_id__  

  * Type: objectId 

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]    


__2.2 regulondbId__  

  * Type: string  

  * Synonyms: [value]  

  * Usage: requerido 

  * Example:

      ```xml
      RDBECOLIPR00001
      ```


  * Comments: [value]     

 
 __2.3 name__  

  * Type: string  

  * Synonyms: [value]  

  * Usage: requerido

  * Example:

      ```xml
      ycgZp
      ```


  * Comments: [value] 


   __2.4 strand__  

  * Type: string 

  * Synonyms: [value]  

  * Usage: requerido  

  * Example:

      ```xml
      forward
      ```

  * Comments: El valor del campo strand puede estar asociado a dos valores: forward o reverse.

   __2.5 pos1__  

  * Type: double 

  * Synonyms: [value]  

  * Usage: opcional  

  * Example:

      ```xml
      1215752
      ```

  * Comments: [value]

   __2.6 sequence__  

  * Type: string 

  * Synonyms: [value]  

  * Usage: opcional

  * Example:

      ```xml
      gcaaaaaattaatttatcattctgtacacatatttcgtacaagtttgctattgttacttcActtaacattgattaacattt
      ```

  * Comments: ^[ATCGatcg]+$

    __2.7 sigmaFactor__  

  * Type: string  

  * Synonyms: [value]  

  * Usage: opcional  

  * Example:

      ```xml
      Example
      ```

  * Comments: [value]

     __2.8 note__  

  * Type: string  

  * Synonyms: [value]  

  * Usage:  opcional

  * Example:

      ```xml
      Example
      ```

  * Comments: [value]


   __2.9 internalComment__  

  * Type: string  

  * Synonyms: [value]  

  * Usage: opcional 

  * Example:

      ```xml
      Example
      ```

  * Comments: [value]

     __2.10 organismId__  

  * Type: string  

  * Synonyms: [value]  

  * Usage: requerido  

  * Example:

      ```xml
      ECK12
      ```

  * Comments: [value]

     __2.11 synonyms__  

  * Type: array

  * Synonyms: [value]  

  * Usage: opcional

  * Example:

      ```xml
      Example
      ```

  * Comments: Cada elemento del arreglo debe ser único y en formato string 


     __2.12 evidenceReferences__  

  * Type: array  

  * Properties:

  	Name: publicationId
  	Type: string
  	Usage: opcional 
	
	Name: sourceId
  	Type: int
  	Usage: opcional 

  	Name: externalDatabaseId
  	Type: string
  	Usage: opcional 

  	Name: publicationUrl
  	Type: string
   	Usage: opcional 

  	Name: evidenceId
  	Type: string
  	Usage: opcional 

  * Synonyms: [value]  

  * Usage: opcional 

  * Example:

      ```xml
      "evidenceReferences": [
        {
            "publicationId": "GID000027564",
            "sourceId": 18158297,
            "externalDatabaseId": "GID000000048",
            "publicationUrl": "http://www.ncbi.nlm.nih.gov/pubmed/18158297",
            "evidenceId": "GID000000006"
        }
        ]
      ```

  * Comments: Cada elemento del arreglo debe representar un objeto único conformado con las propiedades descritas.  

     __2.13 externalDatabases__  

  * Type: array

  * Properties:

  	Name: name
  	Type: string
  	Usage: requerido  

  	Name: url
  	Type: string
  	Usage: requerido 

  	Name: externaldbObjectId
  	Type: string
  	Usage: requerido 

  * Synonyms: [value]  

  * Usage: opcional

  * Example:

      ```xml
      Example
      ```

  * Comments: Cada elemento del arreglo debe representar un objeto único conformado con las propiedades descritas.


     __2.14 promoterFeatures__  

  * Type: array  

    * Properties:

  	Name: regulondbId
  	Type: string
  	Usage: opcional  

  	Name: box10Left
  	Type: int
  	Usage: opcional  

  	Name: box10Right
  	Type: int
  	Usage: opcional  

  	Name: box10Sequence
  	Type: string
  	Usage: opcional  

  	Name: box35Left
  	Type: int
  	Usage: opcional 

  	Name: box35Right
  	Type: int
  	Usage: opcional  

  	Name: box35Sequence
  	Type: string
  	Usage: opcional  

  	Name: score
  	Type: double
  	Usage: opcional  

  	Name: bindsSigmaFactor
  	Type: object
  	Usage: opcional  
  	Properties:  

		  	- Name: evidenceReferences
		  	- Type: array
		  	- Usage: opcional
		  	- Comments: Cada elemento del arreglo debe representar un _objeto_ único conformado con las propiedades que se describen a continuación.  
			-Properties:  

		  			  	* Name: publicationId
  						* Type: string
  						* Usage: opcional  


		  			  	* Name: sourceId
  						* Type: int
  						* Usage: opcional  


		  			  	* Name: externalDatabaseId
  						* Type: string
  						* Usage: opcional  


		  			  	* Name: publicationUrl
  						* Type: string
  						* Usage: opcional  


		  			  	* Name: evidenceId
  						* Type: string
  						* Usage: opcional  

  	Name: evidenceReferences
  	Type: array
  	Usage: opcional
  	Comments: Cada elemento del arreglo debe representar un _objeto_ único conformado con las propiedades que se describen a continuación.  
  	Properties:  

  			- Name: publicationId
		  	- Type: string
		  	- Usage: opcional  

  			- Name: sourceId
		  	- Type: int
		  	- Usage: opcional  

  			- Name: externalDatabaseId
		  	- Type: string
		  	- Usage: opcional  

		  	- Name: publicationUrl
		  	- Type: string
		  	- Usage: opcional  

		  	- Name: evidenceId
		  	- Type: string
		  	- Usage: opcional  


  * Synonyms: [value]  

  * Usage: opcional

  * Example:

      ```xml
      Example
      ```

  * Comments: [value]

     __2.15 schemaVersion__  

  * Type: double  

  * Synonyms: [value]  

  * Usage: requerido  

  * Example:

      ```xml
      1.0
      ```
  * Comments: Este campo es utilizado de manera interna para llevar el control de las versiones del esquema de las colecciones de RegulonDB por el sistema de base de datos MongoDB.  


_Desing patterns_  

_Comments:_  

_Example:_  

```xml
Example
```


### 3. ColletionName

_Description_  


_Attributes_  

__3.1 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]    


__3.2 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]     

 
 __3.3 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]    


_Desing patterns_  

_Comments:_  

_Example:_  

```xml
Example
```


### 4. ColletionName

_Description_  


_Attributes_  

__4.1 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]    


__4.2 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]     

 
 __4.3 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]    


_Desing patterns_  

_Comments:_  

_Example:_  

```xml
Example
```


### 5. ColletionName

_Description_  


_Attributes_  

__5.1 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]    


__5.2 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]     

 
 __5.3 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]    


_Desing patterns_  

_Comments:_  

_Example:_  

```xml
Example
```



### References

