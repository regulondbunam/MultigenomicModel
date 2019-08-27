# Multigenomic Model of RegulonDB

La información de RegulonDB está organizada y resguardada bajo un modelo de colecciones implementado en MongoDB. Cada una de las colecciones que integran el modelo de datos, representa un objeto biologíco sobre la regulación transcriocional de diferentes organinismos, entre los que destaca _Escherichia coli K-12_. Cada una de estas colecciones cuenta con una serie de atributos que permiten plasmar e identificar las características que posee un objeto en particular, como gene, producto, operon, entre muchos más.  

A continuación, se describe cada una de las colecciones que conforman el modelo de datos de RegulonDB:  

## Collections

### 1. gene

* Description  

Esta colección representa al objeto Gene dentro de la regulación transcripcional de un organismo. Un gen posee una serie de propiedades que permiten identificarlo y diferenciarlo de otros, así como de característica que permiten establecer relaciones con otros objetos.  

* Attributes

  AttributeName  
    gene_id


  * Type  
    string    


  * Synonyms  
    identifier  

  * Usage  
    requerido  


  * Example  

      ```xml
      RDBECOLIGN00001
      ```

      Examples:

| Identifier |Description |
| ---------- | ---------- |
| RDBECOLIGR00001   | This is a RegulonDB identifier of the 00001 gene   |
| RDBECOLIOP00001   | Campo B1   |


  * Comments  
    Para conocer más detalle sobre la definición de los identificadores, consultar la sección: Identifiers en el manual de RegulonDB.  


  AttributeName  
    gene_name  

  * Type  
    string  

  * Synonyms  
    name

  * Usage:
    Opcional

  * Example:

      ```xml
      araC
      ```

  * Comments  
    En el caso del nombre de genes se sigue una nomenclatura de nombrado donde se define que la última letra se debe especificar en mayúscula.  


  AttributeName  
    gene_posleft

  * Type  
    int

  * Synonyms  
    genome left position 

  * Usage:
    requerido

  * Example:

      ```xml
      70387
      ```

  * Comments 


  * AttributeName  
    gene_posright

  * Type  
    int

  * Synonyms  
    genome right position 

  * Usage:
    requerido 

  * Example:

      ```xml
      71265
      ```

  * Comments 


  * AttributeName  
    gene_strand

  * Type  
    string

  * Synonyms  


  * Usage:
    requerido

  * Example:

      ```xml
      forward
      ```

  * Comments 
      Los valores permitidos para este atributo son: "forward", "reverse", null


  * AttributeName  
    gene_sequence

  * Type  
    string

  * Synonyms  
    
  * Usage:
    requerido

  * Example:

      ```xml
      
      ```

  * Comments 


  * AttributeName  
    gc_content

  * Type  
    double

  * Synonyms  
    
  * Usage:
    requerido

  * Example:

      ```xml
      52.56
      ```

  * Comments 


  * AttributeName  
    gene_note

  * Type  
    string

  * Synonyms  


  * Usage:
    opcional

  * Example:

      ```xml
      
      ```

  * Comments 


  * AttributeName  
    gene_internal_comment

  * Type  
    string

  * Synonyms  


  * Usage:
    opcional

  * Example:

      ```xml
      
      ```

  * Comments 


  * AttributeName  
    organism_id

  * Type  
    string

  * Synonyms  
    organism identifier

  * Usage:
    requerido

  * Example:

      ```xml
      
      ```

  * Comments 

  * AttributeName  
    gene_type

  * Type  
    string

  * Synonyms  


  * Usage:
    requerido

  * Example:

      ```xml
      pseudo
      ```

  * Comments 
    Los valores permitidos para este atributo son: "pseudo", "phantom", null


  * AttributeName  
    centisome_position

  * Type  
    double

  * Synonyms  


  * Usage:
    requerido

  * Example:

      ```xml
      
      ```

  * Comments 


  * AttributeName  
    interrupted

  * Type  
    bool

  * Synonyms  


  * Usage:
    opcional

  * Example:

      ```xml
      
      ```

  * Comments 


  * AttributeName  
    synonyms

  * Type  
    string

  * Synonyms  
    Identifier

  * Usage:
    
  * Example:

      ```xml
      RDBECOLIGN00065, RDBECOLIGN10054
      ```

  * Comments


  * AttributeName  
    external_databases 

  * Type  
    string

  * Synonyms  
    
  * Usage:
    opcional

  * Example:

      ```xml
      ASAP, http://.......
      ```

  * Comments 


  * AttributeName  
    schema_version

  * Type  
    string

  * Synonyms  
    
  * Usage:
    opcional

  * Example:

      ```xml
      1
      ```

  * Comments 
    Este atributo es usado para controlar internamente las modificaciones que se hagan en la colección, así como con el uso del modelo por parte de la aplicación Web de RegulonDB.


  * AttributeName  
    multifun_parents

  * Type  
    string

  * Synonyms  
    multifun family

  * Usage:
    opcional

  * Example:

      ```xml
      
      ```

  * Comments 

* Desing patterns

* Comments

* Example


```xml
Example
```

### 2. ColletionName

* Description

* Attributes

  * AttributeName

  * Type

  * Synonyms

  * Usage:

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments  


  * AttributeName  


  * Type  


  * Synonyms  


  * Usage:
    
  * Example:

      ```xml
      
      ```

  * Comments 

    * AttributeName  


  * Type  


  * Synonyms  


  * Usage:
    
  * Example:

      ```xml
      
      ```

  * Comments 


* Desing patterns

* Validation rules

* Comments

* Example


```xml
Example
```

### 3. ColletionName

* Description

* Attributes

  * AttributeName

  * Type

  * Synonyms

  * Usage:

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments  


  * AttributeName  


  * Type  


  * Synonyms  


  * Usage:
    
  * Example:

      ```xml
      
      ```

  * Comments 

    * AttributeName  


  * Type  


  * Synonyms  


  * Usage:
    
  * Example:

      ```xml
      
      ```

  * Comments 


* Desing patterns

* Validation rules

* Comments

* Example


```xml
Example
```

### 4. ColletionName

* Description

* Attributes

  * AttributeName

  * Type

  * Synonyms

  * Usage:

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments  


  * AttributeName  


  * Type  


  * Synonyms  


  * Usage:
    
  * Example:

      ```xml
      
      ```

  * Comments 


* Desing patterns

* Validation rules

* Comments

* Example


```xml
Example
```

### 5. ColletionName

* Description

* Attributes

  * AttributeName

  * Type

  * Synonyms

  * Usage:

    Seleccionar uno de los siguientes valores: [Requerido, Opcional]

  * Example:

      ```xml
      Example
      ```


  * Comments  


  * AttributeName  


  * Type  


  * Synonyms  


  * Usage:
    
  * Example:

      ```xml
      
      ```

  * Comments 

* Desing patterns

* Validation rules

* Comments

* Example


```xml
Example
```




### References

