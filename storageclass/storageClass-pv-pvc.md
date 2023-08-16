al crear el storageclass NO se creará automáticamente el "persistentVolume pv"
al contrario que un AKS ya que el nuestro es cluster self-managed 

ponemos en los 3 nodos el archivo 
$ sudo vi /etc/kubernetes/cloud.conf
 
el contenido de cloud.conf