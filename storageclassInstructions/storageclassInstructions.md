https://learn.microsoft.com/en-us/azure/openshift/howto-create-a-storageclass#before-you-begin

antes de crear el PersistentVolumeClaim que pueda bindearse a un PersistentVolume ,
paso 1 creamos un storageclass , para ello

configuramos un azure storage account

AZURE_STORAGE_ACCOUNT_NAME=christianazurefilessa

az storage account create \
	--name christianazurefilessa \
	--resource-group MyClusterDemoGroup \
	--kind StorageV2 \
	--sku Standard_LRS

configuramos los permisos

az aro create \
  --resource-group MyClusterDemoGroup \
  --name myCluster \
  --vnet KubeVNet \
  --master-subnet MySubnet \
  --worker-subnet MySubnet

ARO_RESOURCE_GROUP=MyClusterDemoGroup
CLUSTER=cluster
ARO_SERVICE_PRINCIPAL_ID=$(az aro show -g $ARO_RESOURCE_GROUP -n $CLUSTER --query servicePrincipalProfile.clientId -o tsv)

az role assignment create --role Contributor --scope /subscriptions/mySubscriptionID/resourceGroups/myResourceGroupName --assignee $ARO_SERVICE_PRINCIPAL_ID -g $AZURE_FILES_RESOURCE_GROUP