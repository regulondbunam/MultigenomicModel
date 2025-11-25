# promoter

_Description_  
Dentro del modelo de RegulonDB, __Promoter__ representa una colección que permite representar los diferentes atributos y características que permiten describirlo.

_Attributes_  

__2.1\_id__  

  * Type: objectId 

  * Synonyms: [value]  

  * Required: [requerido, opcional]  

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