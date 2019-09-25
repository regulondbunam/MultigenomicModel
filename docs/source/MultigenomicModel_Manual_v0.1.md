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


__1.8 gene_note__

  * Type: string  

  * Synonyms:  

  * Usage: opcional  

  * Example:

      ```xml
      
      ```

  * Comments:  


__1.9 gene_internal_comment__

  * Type: string

  * Synonyms:  


  * Usage: opcional  

  * Example:

      ```xml
      
      ```

  * Comments:  






__1.14 synonyms__

  * Type: string

  * Synonyms: identifier

  * Usage:  
    
  * Example:

      ```xml
      RDBECOLIGN00065, RDBECOLIGN10054
      ```

  * Comments:  


 __1.15 external_databases__  

  * Type: string

  * Synonyms:   
    
  * Usage: opcional

  * Example:

      ```xml
      ASAP, http://.......
      ```

  * Comments:  


__1.16 schema_version__

  * Type: string

  * Synonyms:  
    
  * Usage: pcional  

  * Example:

      ```xml
      1
      ```

  * Comments: Este atributo es usado para controlar internamente las modificaciones que se hagan en la colección, así como con el uso del modelo por parte de la aplicación Web de RegulonDB.  


__1.17 multifun_parents__

  * Type: string  

  * Synonyms: multifun family  

  * Usage: opcional  

  * Example:

      ```xml
      
      ```

  * Comments:   

_Desing patterns_  

_Comments:_  

_Example:_  

```xml
Example
```


### 2. ColletionName

_Description_  


_Attributes_  

__2.1 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]    


__2.2 [AttributeName]__  

  * Type: [value]  

  * Synonyms: [value]  

  * Usage: [requerido, opcional]  

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments: [value]     

 
 __2.3 [AttributeName]__  

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

