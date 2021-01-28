# -*- coding: utf-8 -*-
# NAME [ParserJsonMarkdown_v1.0.py]   Version [1.0]
# AUTHOR  kevin alquicira y shirley alquicira
# CREATED (2019-10)
# USAGE python ParserJsonMarkdown_v1.0.py -f ../json_schema_validation_extended/gene_schema_annotation.json -s ../config/format_style.json -o ../results/
# DESCRIPTION Programa que parsea las propiedades de la colección gene y genera su formato en markdown

import argparse
import json
import codecs
from collections import OrderedDict

parser = argparse.ArgumentParser()
parser._action_groups.pop()
requiredNamed = parser.add_argument_group('required named arguments')
requiredNamed.add_argument('-f', '--file', help='Input file name')
requiredNamed.add_argument('-s', '--style', help='Input file name style')
requiredNamed.add_argument('-o', '--outputfile', help='Outputfile file name md')
# requiredNamed.add_argument('-j', '--outputfileschema', help='Outputfile file schema js')

optional = parser.add_argument_group('optional arguments')
optional.add_argument( 
      "-u", "--usage", 
            help="Muestra modo de ejecución del programa", 
            action="store_true")


args = parser.parse_args()

# Aqui procesamos lo que se tiene que hacer con cada argumento

if args.usage:
	 print ("\tPrograma que lee un archivo: ejemplo de ejecucion\n python argumentos.py -f dna.txt\n ")
	 quit()

if not args.file:
	 print ("  -f, --file Argumento obligatorio\n")
	 quit()

if not args.style:
   print ("  -s, --style Argumento obligatorio\n")
   quit()

if not args.outputfile:
   print ("  -o, --outputfile Argumento obligatorio\n")
   quit()

'''if args.file:
    print ("El nombre de archivo a procesar es: "+ args.file)'''

#data = json.load(open('../data/gene_schema_annotation.json'), object_pairs_hook=OrderedDict)

data = json.load(open(args.file), object_pairs_hook=OrderedDict)
#print (data['validator'])

#Obteniendo nombre de la colleccion
nameColection=data['collection']['name']
descColection=data['collection']['description']

pathFileMD=args.outputfile+"md_schema_documentation/"+nameColection+"Collection.md"


dataStyle = json.load(open(args.style), object_pairs_hook=OrderedDict)



#print(dataStyle["title"])

#print (nameColection)
#print (descColection)


fileMD=codecs.open(pathFileMD,"w", encoding="utf-8")
fileMD.write(dataStyle["title"]+" "+nameColection+"\n\n")
fileMD.write(descColection+"\n\n")

fileMD.write(dataStyle["sections"]+"\n")
fileMD.write(dataStyle["subtitle"]+" Properties\n")
fileMD.write(dataStyle["sections"]+"\n")


'''for field in data.keys():
  print field'''

#print (data['validator']['$jsonSchema']['properties'].keys())

#if ("_id" in data['validator']['$jsonSchema']['required']):
#  print (data['validator']['$jsonSchema']['required'])
bsonType=""
for key in data['validator']['$jsonSchema']['properties'].keys():

  #print(key,"--->",data['validator']['$jsonSchema']['properties'][key])
  #print("annotation","--->",data['validator']['$jsonSchema']['properties'][key])
  fileMD.write(dataStyle["properties"]+" "+key+"\n")
  keys_first_level=data['validator']['$jsonSchema']['properties'][key].keys()
  #print(keys_first_level)
  for key_first_level in keys_first_level:
    if ('collections.OrderedDict' not in str(type(data['validator']['$jsonSchema']['properties'][key][key_first_level])) and (key_first_level in 'type')):
      #fileMD.write(dataStyle["element_properties"]+" "+key_first_level+": "+data['validator']['$jsonSchema']['properties'][key][key_first_level]+"\n")
      bsonType=str(dataStyle["element_properties"]+" type: "+data['validator']['$jsonSchema']['properties'][key][key_first_level]+"\n")

    if ('collections.OrderedDict' in str(type(data['validator']['$jsonSchema']['properties'][key][key_first_level])) and (key_first_level in 'annotation')):
      #print(key_first_level,data['validator']['$jsonSchema']['properties'][key][key_first_level])
      counter_elements=1

      

      #for key_NA in data['validator']['$jsonSchema']['properties'][key]['annotation'].keys():
        #print data['validator']['$jsonSchema']['properties'][key]['annotation'][key_NA]
   # if (data['validator']['$jsonSchema']['properties'][key]['annotation'][key_first_level] == "NA"):
    #  print data['validator']['$jsonSchema']['properties'][key]['annotation'][key_first_level]
     # del(data['validator']['$jsonSchema']['properties'][key]['annotation'][key_first_level])

      for key_second_level in data['validator']['$jsonSchema']['properties'][key][key_first_level].keys():
          #print data['validator']['$jsonSchema']['properties'][key][key_first_level][key_second_level]

          #print (counter_elements)
          if (counter_elements==2):
            fileMD.write(bsonType)
            bsonType=""

          if (data['validator']['$jsonSchema']['properties'][key][key_first_level][key_second_level] == "NA") or (data['validator']['$jsonSchema']['properties'][key][key_first_level][key_second_level] == "No") or (data['validator']['$jsonSchema']['properties'][key][key_first_level][key_second_level] == ""):
            del (data['validator']['$jsonSchema']['properties'][key][key_first_level][key_second_level])

          else:
            #print key_second_level

            if key_second_level in "Required":
              #print (key_second_level)
              required="no"
              if (key in data['validator']['$jsonSchema']['required']):

                required="yes"

              fileMD.write(dataStyle["element_properties"]+" "+key_second_level+": "+required+"\n") 
            elif key_second_level in "Example":
              fileMD.write(dataStyle["element_properties"]+" "+key_second_level+": \n"+dataStyle["code"].replace('$CODE$',data['validator']['$jsonSchema']['properties'][key][key_first_level][key_second_level])+"\n")
            else:
              fileMD.write(dataStyle["element_properties"]+" "+key_second_level+": "+data['validator']['$jsonSchema']['properties'][key][key_first_level][key_second_level]+"\n")
            counter_elements=counter_elements+1


    if ('collections.OrderedDict' in str(type(data['validator']['$jsonSchema']['properties'][key][key_first_level])) and (key_first_level in 'annotation')):
      del data['validator']['$jsonSchema']['properties'][key]["annotation"]
  fileMD.write(dataStyle["sections"]+"\n")

fileMD.close()

data.pop("collection")


#print data


  
data={nameColection : data}
pathFileSchema=args.outputfile+"json_schema_validation/"+nameColection+"_schema_validation_rules.json"
with open(pathFileSchema, 'w') as data_file:
    data = json.dump(data, data_file, indent=2)


